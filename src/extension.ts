import * as vscode from 'vscode';
import { getWebviewContent } from './webviewContent';

export function activate(context: vscode.ExtensionContext) {
	const disposableCommand = vscode.commands.registerCommand('flexbox.cheatsheet', () => {
		// Create and show a new webview
		const panel = vscode.window.createWebviewPanel(
			'flexboxCheatsheet',
			'Flexbox Cheatsheet',
			vscode.ViewColumn.Beside
		);

		panel.webview.html = getWebviewContent();
	});

	const hoverProvider: vscode.HoverProvider = {
		provideHover(doc, pos, token): vscode.ProviderResult<vscode.Hover> {
			const range = doc.getWordRangeAtPosition(pos, /display:(\s+)?flex;/ig);

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
		['css', 'less', 'sass', 'scss'],
		hoverProvider
	);

	context.subscriptions.push(
		disposableCommand,
		disposableHoverProvider
	);
}

function getText(): vscode.MarkdownString {
	const commandUri = vscode.Uri.parse('command:flexbox.cheatsheet');

	return new vscode.MarkdownString(`[Open Flexbox Cheatsheet](${commandUri})`);
}

export function deactivate() {}
