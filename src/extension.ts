import * as vscode from 'vscode';
import { join } from 'path';

import { getWebviewContent } from './webviewContent';
import * as flexboxPatterns from './flexboxPatterns';

const supportedFiles = ['css', 'less', 'sass', 'scss'];

let decorationType: vscode.TextEditorDecorationType;

export function activate(context: vscode.ExtensionContext) {
	decorationType = vscode.window.createTextEditorDecorationType({
		after: {
			margin: '0 0.2rem 0 0',
			width: '.8125rem'
		},
		dark: {
			after: {
				contentIconPath: context.asAbsolutePath('/images/flexbox-icon-light.svg')
			}
		},
		light: {
			after: {
				contentIconPath: context.asAbsolutePath('/images/flexbox-icon-dark.svg')
			}
		}
	});

	const activeEditor = vscode.window.activeTextEditor;
	
	if (activeEditor) {
		decorate(activeEditor);
	}

	const disposableCommand = vscode.commands.registerCommand('flexbox.cheatsheet', () => {
		const styleRoot = vscode.Uri.file(join(context.extensionPath, 'style'));
		const imagesRoot = vscode.Uri.file(join(context.extensionPath, 'images'));

		// Create and show a new webview
		const panel = vscode.window.createWebviewPanel(
			'flexboxCheatsheet',
			'Flexbox Cheatsheet',
			vscode.ViewColumn.Beside, {
				localResourceRoots: [
					styleRoot,
					imagesRoot
				]
			}
		);

		const stylePath = styleRoot.with({ scheme: 'vscode-resource' });
		const imagesPath = imagesRoot.with({ scheme: 'vscode-resource' });

		panel.webview.html = getWebviewContent(stylePath, imagesPath);
	});

	const disposableVisibleTextEditors = vscode.window.onDidChangeVisibleTextEditors(event => {
		let editor = vscode.window.activeTextEditor;

		if (editor && supportedFiles.includes(editor.document.languageId)) {
			decorate(editor);
		}
	});

	const disposableChangeDocument = vscode.workspace.onDidChangeTextDocument(event => {
		const openEditor = vscode.window.visibleTextEditors.filter(
			editor => editor.document.uri === event.document.uri
		)[0];

		if (openEditor && supportedFiles.includes(openEditor.document.languageId)) {
			decorate(openEditor);
		}
	});

	const hoverProvider: vscode.HoverProvider = {
		provideHover(doc, pos, token): vscode.ProviderResult<vscode.Hover> {
			const range = getPropertyRangeAtPosition(doc, pos);

			if (range === undefined) {
				return;
			}

			const property = getPropertyAtRange(doc, range);

			const markdownString = buildMarkdownString(context, property);

			return new vscode.Hover(markdownString, range);
		}
	};

	const disposableHoverProvider = vscode.languages.registerHoverProvider(
		supportedFiles,
		hoverProvider
	);

	context.subscriptions.push(
		disposableCommand,
		disposableHoverProvider,
		disposableChangeDocument,
		disposableVisibleTextEditors
	);
}

function decorate(editor: vscode.TextEditor) {
  const sourceCode = editor.document.getText();
	
  let decorationsArray: vscode.DecorationOptions[] = [];

  const sourceCodeArr = sourceCode.split('\n');

  for (let line = 0; line < sourceCodeArr.length; line++) {
		const sourceCode = sourceCodeArr[line];

		let matches = matchAll(flexboxPatterns.displayFlexPattern, sourceCode);

		if (matches.length > 0) {
			matches.forEach(match => {
				if (match.index !== undefined) {
					const flexIndex = sourceCode.indexOf('flex', match.index);

					let range = new vscode.Range(
						new vscode.Position(line, match.index),
						new vscode.Position(line, flexIndex)
					);

					let decoration = { range };

					decorationsArray.push(decoration);
				}
			});
		}
  }

  editor.setDecorations(decorationType, decorationsArray);
}

function matchAll(pattern: RegExp, text: string): Array<RegExpMatchArray> {
	const out: RegExpMatchArray[] = [];
	let match: RegExpMatchArray | null;

	pattern.lastIndex = 0;

	while (match = pattern.exec(text)) {
		out.push(match);
	}

	return out;
}

function buildMarkdownString(context: vscode.ExtensionContext, property: string): vscode.MarkdownString[] {
	const commandUri = vscode.Uri.parse('command:flexbox.cheatsheet');

	const flexboxCommand = new vscode.MarkdownString(`[Open Flexbox Cheatsheet](${commandUri} "Open Flexbox Cheatsheet")`);

	// To enable command URIs in Markdown content, you must set the `isTrusted` flag.
	// When creating trusted Markdown string, make sure to properly sanitize all the
	// input content so that only expected command URIs can be executed
	flexboxCommand.isTrusted = true;

	const onDiskPath = vscode.Uri.file(
		join(context.extensionPath, 'images', `${property}.svg`)
	);

	const flexboxImage = new vscode.MarkdownString(`![${property}](${onDiskPath.toString()})`);

	return [flexboxCommand, flexboxImage];
}

function getPropertyRangeAtPosition(doc: vscode.TextDocument, pos: vscode.Position) {
	let propertyRange: vscode.Range | undefined;

	for (const pattern of flexboxPatterns.allFlexboxPatterns) {
		const range = doc.getWordRangeAtPosition(pos, pattern);
	
		if (range) {
			propertyRange = range;

			break;
		}
	}

	return propertyRange;
}

function getPropertyAtRange(doc: vscode.TextDocument, range: vscode.Range) {
	let property = doc.getText(range);

	if (flexboxPatterns.flexGrowBiggerThanZero.test(property)) {
		return 'flex-grow-1';
	} else if (flexboxPatterns.flexShrinkBiggerThanZero.test(property)) {
		return 'flex-shrink-1';
	} else if (flexboxPatterns.order.test(property)) {
		return 'order-0';
	}

	return property.split(':').map(elem => elem.trim()).join('-').replace(';', '');
}

export function deactivate() {}
