import * as vscode from 'vscode';
import * as path from 'path';

import { getWebviewContent } from './webviewContent';

const flexboxRegEx =  /display:(\s+)?flex[;|\s]/ig;
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
		const styleRoot = vscode.Uri.file(path.join(context.extensionPath, 'style'));
		const imagesRoot = vscode.Uri.file(path.join(context.extensionPath, 'images'));

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
			const range = doc.getWordRangeAtPosition(pos, flexboxRegEx);

			if (range === undefined) {
				return;
			}

			const markdownString = getText();

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

		let matches = matchAll(flexboxRegEx, sourceCode);

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

function getText(): vscode.MarkdownString {
	const commandUri = vscode.Uri.parse('command:flexbox.cheatsheet');

	const markdownString = new vscode.MarkdownString(`[Open Flexbox Cheatsheet](${commandUri} "Open Flexbox Cheatsheet")`);

	// To enable command URIs in Markdown content, you must set the `isTrusted` flag.
	// When creating trusted Markdown string, make sure to properly sanitize all the
	// input content so that only expected command URIs can be executed
	markdownString.isTrusted = true;

	return markdownString;
}

export function deactivate() {}
