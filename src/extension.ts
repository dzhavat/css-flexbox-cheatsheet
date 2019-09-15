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
		// Create and show a new webview
		const panel = vscode.window.createWebviewPanel(
			'flexboxCheatsheet',
			'Flexbox Cheatsheet',
			vscode.ViewColumn.Beside, {
				localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'style'))]
			}
		);

		const styleSrc = vscode.Uri.file(
			path.join(context.extensionPath, 'style', 'custom.css')
		).with({ scheme: 'vscode-resource' });

		panel.webview.html = getWebviewContent(styleSrc);
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

		decorate(openEditor);
	});

	const hoverProvider: vscode.HoverProvider = {
		provideHover(doc, pos, token): vscode.ProviderResult<vscode.Hover> {
			const range = doc.getWordRangeAtPosition(pos, flexboxRegEx);

			if (range === undefined) {
				return;
			}

			const contents = getText();

			// To enable command URIs in Markdown content, you must set the `isTrusted` flag.
			// When creating trusted Markdown string, make sure to properly sanitize all the
			// input content so that only expected command URIs can be executed
			contents.isTrusted = true;

			return new vscode.Hover(contents);
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

	return new vscode.MarkdownString(`[Open Flexbox Cheatsheet](${commandUri})`);
}

export function deactivate() {}
