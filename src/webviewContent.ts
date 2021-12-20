import { Uri } from 'vscode';

const webviewUiToolkitHash =
  'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=';

export function getWebviewContent(
  cspSource: string,
  scriptPath: Uri,
  stylePath: Uri,
  imagesPath: Uri
) {
  return /*html*/ `<!doctype html>
	<html lang="en">

	<head>
		<meta charset="utf-8">
		<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src ${cspSource}; style-src ${cspSource} '${webviewUiToolkitHash}'; img-src ${cspSource};">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<title>CSS Flexbox Cheatsheet</title>
		
		<link rel="stylesheet" href="${stylePath}/custom.css">
	</head>

	<body>
		<main>
			<div class="container">
				<h1>CSS Flexbox Cheatsheet</h1>

				<h2>Settings</h2>

				<div class="directionality-settings">
					<p>Select the <i>directionality</i> to be used in the interactive playgrounds. (<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir">Learn more</a>)</p>

					<vscode-radio-group orientation="vertical" name="js-directionality-radio-group">
						<label slot="label">Directionality</label>
						<vscode-radio value="ltr" checked>LTR (left-to-right)</vscode-radio>
						<vscode-radio value="rtl">RTL (right-to-left)</vscode-radio>
					</vscode-radio-group>
				</div>

				<h2>Flex Container</h2>

				<div class="group">
					<h3>Display</h3>

					<div class="row">
						<div>
							<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display" target="_blank" rel="noopener">display</a>: flex;
						</div>
						<img src="${imagesPath}/display-flex.svg" alt="display: flex;">
					</div>

					<div class="row">
						<div>display: inline-flex;</div>
						<img src="${imagesPath}/display-inline-flex.svg" alt="display: inline-flex;">
					</div>
				</div>

				<div class="group">
					<h3>Flex flow (shorthand)</h3>

					<div class="row">
						<div><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow" target="_blank" rel="noopener">flex-flow</a>:
							<span class="default">row nowrap;</span> <span class="shorthand-hint">(flex-direction flex-wrap)</span>
						</div>
					</div>
				</div>

				<div class="group">
					<h3>Flex direction</h3>
				
					<div class="row">
						<div>
							<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction" target="_blank" rel="noopener">flex-direction</a>: <span class="default">row</span>;
						</div>
						<img src="${imagesPath}/flex-direction-row.svg" alt="flex-direction: row;">
					</div>
					<div class="row">
						<div>flex-direction: row-reverse;</div>
						<img src="${imagesPath}/flex-direction-row-reverse.svg" alt="flex-direction: row-reverse;">
						</div>
					<div class="row">
						<div>flex-direction: column;</div>
						<img src="${imagesPath}/flex-direction-column.svg" alt="flex-direction: column;">
					</div>
					<div class="row">
						<div>flex-direction: column-reverse;</div>
						<img src="${imagesPath}/flex-direction-column-reverse.svg" alt="flex-direction: column-reverse;">
					</div>

					<h4>Try it out</h4>
					<div class="interactive-playground flex-container">
						<button class="button selected" data-js-class="flex-direction-row" type="button">row</button>
						<button class="button" data-js-class="flex-direction-row-reverse" type="button">row-reverse</button>
						<button class="button" data-js-class="flex-direction-column" type="button">column</button>
						<button class="button" data-js-class="flex-direction-column-reverse" type="button">column-reverse</button>

						<div class="directionality align-right">
							<code class="js-directionality-code">dir="ltr"</code>
						</div>

						<div class="flexbox-container js-flexbox-container" dir="ltr">
							<div>One</div>
							<div>Two</div>
							<div>Three</div>
							<div>Four</div>
						</div>
					</div>
				</div>

				<div class="group">
					<h3>Flex wrap</h3>

					<div class="row">
						<div>
							<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap" target="_blank" rel="noopener">flex-wrap</a>: <span class="default">nowrap</span>;
						</div>
						<img src="${imagesPath}/flex-wrap-nowrap.svg" alt="flex-wrap: nowrap;">
					</div>

					<div class="row">
						<div>flex-wrap: wrap;</div>
						<img src="${imagesPath}/flex-wrap-wrap.svg" alt="flex-wrap: wrap;">
					</div>

					<div class="row">
						<div>flex-wrap: wrap-reverse;</div>
						<img src="${imagesPath}/flex-wrap-wrap-reverse.svg" alt="flex-wrap: wrap-reverse;">
					</div>

					<h4>Try it out</h4>
					<div class="interactive-playground flex-container">
						<button class="button selected" data-js-class="flex-wrap-nowrap" type="button">nowrap</button>
						<button class="button" data-js-class="flex-wrap-flex-wrap" type="button">wrap</button>
						<button class="button" data-js-class="flex-wrap-wrap-reverse" type="button">wrap-reverse</button>

						<div class="directionality align-right">
							<code class="js-directionality-code">dir="ltr"</code>
						</div>

						<div class="flexbox-container js-flexbox-container" dir="ltr">
							<div>One</div>
							<div>Two</div>
							<div>Three</div>
							<div>Four</div>
							<div>Five</div>
							<div>Six</div>
							<div>Seven</div>
							<div>Eight</div>
						</div>
					</div>
				</div>

				<div class="group">
					<h3>Justify content</h3>

					<div class="row">
						<div>
							<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content" target="_blank" rel="noopener">justify-content</a>: <span class="default">flex-start</span>;
						</div>
						<img src="${imagesPath}/justify-content-flex-start.svg" alt="justify-content: flex-start;">
					</div>

					<div class="row">
						<div>justify-content: center;</div>
						<img src="${imagesPath}/justify-content-center.svg" alt="justify-content: center;">
					</div>

					<div class="row">
						<div>justify-content: flex-end;</div>
						<img src="${imagesPath}/justify-content-flex-end.svg" alt="justify-content: flex-end;">
					</div>

					<div class="row">
						<div>justify-content: space-between;</div>
						<img src="${imagesPath}/justify-content-space-between.svg" alt="justify-content: space-between;">
					</div>

					<div class="row">
						<div>justify-content: space-around;</div>
						<img src="${imagesPath}/justify-content-space-around.svg" alt="justify-content: space-around;">
					</div>

					<div class="row">
						<div>justify-content: space-evenly;</div>
						<img src="${imagesPath}/justify-content-space-evenly.svg" alt="justify-content: space-evenly;">
					</div>

					<h4>Try it out</h4>
					<div class="interactive-playground flex-container">
						<button class="button selected" data-js-class="justify-content-flex-start" type="button">flex-start</button>
						<button class="button" data-js-class="justify-content-center" type="button">center</button>
						<button class="button" data-js-class="justify-content-flex-end" type="button">flex-end</button>
						<button class="button" data-js-class="justify-content-space-between" type="button">space-between</button>
						<button class="button" data-js-class="justify-content-space-around" type="button">space-around</button>
						<button class="button" data-js-class="justify-content-space-evenly" type="button">space-evenly</button>

						<div class="directionality align-right">
							<code class="js-directionality-code">dir="ltr"</code>
						</div>

						<div class="flexbox-container js-flexbox-container" dir="ltr">
							<div>One</div>
							<div>Two</div>
							<div>Three</div>
							<div>Four</div>
						</div>
					</div>
				</div>

				<div class="group">
					<h3>Align items</h3>

					<div class="row">
						<div>
							<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items" target="_blank" rel="noopener">align-items</a>: <span class="default">stretch</span>;
						</div>
						<img src="${imagesPath}/align-items-stretch.svg" alt="align-items: stretch;">
					</div>

					<div class="row">
						<div>align-items: flex-start;</div>
						<img src="${imagesPath}/align-items-flex-start.svg" alt="align-items: flex-start;">
					</div>

					<div class="row">
						<div>align-items: center;</div>
						<img src="${imagesPath}/align-items-center.svg" alt="align-items: center;">
					</div>

					<div class="row">
						<div>align-items: flex-end;</div>
						<img src="${imagesPath}/align-items-flex-end.svg" alt="align-items: flex-end;">
					</div>

					<div class="row">
						<div>align-items: baseline;</div>
						<img src="${imagesPath}/align-items-baseline.svg" alt="align-items: baseline;">
					</div>

					<h4>Try it out</h4>
					<div class="interactive-playground flex-container has-height">
						<button class="button selected" data-js-class="align-items-stretch" type="button">stretch</button>
						<button class="button" data-js-class="align-items-flex-start" type="button">flex-start</button>
						<button class="button" data-js-class="align-items-center" type="button">center</button>
						<button class="button" data-js-class="align-items-flex-end" type="button">flex-end</button>
						<button class="button" data-js-class="align-items-baseline" type="button">baseline</button>

						<div class="directionality align-right">
							<code class="js-directionality-code">dir="ltr"</code>
						</div>

						<div class="flexbox-container js-flexbox-container" dir="ltr">
							<div>One</div>
							<div>Two</div>
							<div>Three</div>
							<div>Four</div>
						</div>
					</div>
				</div>

				<div class="group">
					<h3>Align content</h3>

					<div class="row">
						<div>
							<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-content" target="_blank" rel="noopener">align-content</a>: <span class="default">stretch</span>;
						</div>
						<img src="${imagesPath}/align-content-stretch.svg" alt="align-content: stretch;">
					</div>

					<div class="row">
						<div>align-content: flex-start;</div>
						<img src="${imagesPath}/align-content-flex-start.svg" alt="align-content: flex-start;">
					</div>

					<div class="row">
						<div>align-content: center;</div>
						<img src="${imagesPath}/align-content-center.svg" alt="align-content: center;">
					</div>

					<div class="row">
						<div>align-content: flex-end;</div>
						<img src="${imagesPath}/align-content-flex-end.svg" alt="align-content: flex-end;">
					</div>

					<div class="row">
						<div>align-content: space-between;</div>
						<img src="${imagesPath}/align-content-space-between.svg" alt="align-content: space-between;">
					</div>

					<div class="row">
						<div>align-content: space-around;</div>
						<img src="${imagesPath}/align-content-space-around.svg" alt="align-content: space-around;">
					</div>

					<h4>Try it out</h4>
					<div class="interactive-playground flex-container has-height has-width flex-wrap">
						<button class="button selected" data-js-class="align-content-stretch" type="button">stretch</button>
						<button class="button" data-js-class="align-content-flex-start" type="button">flex-start</button>
						<button class="button" data-js-class="align-content-center" type="button">center</button>
						<button class="button" data-js-class="align-content-flex-end" type="button">flex-end</button>
						<button class="button" data-js-class="align-content-space-between" type="button">space-between</button>
						<button class="button" data-js-class="align-content-space-around" type="button">space-around</button>

						<div class="directionality align-right">
							<code class="js-directionality-code">dir="ltr"</code>
						</div>

						<div class="flexbox-container js-flexbox-container" dir="ltr">
							<div>One</div>
							<div>Two</div>
							<div>Three</div>
							<div>Four</div>
							<div>Five</div>
							<div>Six</div>
							<div>Seven</div>
							<div>Eight</div>
						</div>
					</div>
				</div>
			</div>

			<div class="container">
				<h2>Flex Item</h2>

				<div class="group">
					<h3>Order</h3>

					<div class="row">
						<div>
							<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/order" target="_blank" rel="noopener">order</a>: <span class="default">0</span>;
						</div>
						<img src="${imagesPath}/order.svg" alt="order: 0;">
					</div>
				</div>

				<div class="group">
					<h3>Flex (shorthand)</h3>

					<div class="row">
						<div>
							<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex" target="_blank" rel="noopener">flex</a>: <span class="default">0 1 auto;</span> <span class="shorthand-hint">(flex-grow flex-shrink flex-basis)</span>
						</div>
					</div>
				</div>

				<div class="group">
					<h3>Flex grow</h3>

					<div class="row">
						<div><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow" target="_blank" rel="noopener">flex-grow</a>:
							<span class="default">0</span>;
						</div>
						<img src="${imagesPath}/flex-grow-0.svg" alt="flex-grow: 0;">
					</div>

					<div class="row">
						<div>flex-grow: 1;</div>
						<img src="${imagesPath}/flex-grow-1.svg" alt="flex-grow: 1;">
					</div>

					<h4>Try it out</h4>
					<div class="interactive-playground flex-item">
						<button class="button selected" data-js-class="flex-grow-0" type="button">0</button>
						<button class="button" data-js-class="flex-grow-1" type="button">1</button>

						<div class="directionality align-right">
							<code class="js-directionality-code">dir="ltr"</code>
						</div>

						<div class="flexbox-container js-flexbox-container" dir="ltr">
							<div>One</div>
							<div>Two</div>
							<div>Three</div>
							<div>Four</div>
						</div>
					</div>
				</div>

				<div class="group">
					<h3>Flex shrink</h3>

					<div class="row">
						<div>
							<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow" target="_blank" rel="noopener">flex-shrink</a>: <span class="default">0</span>;
						</div>
						<img src="${imagesPath}/flex-shrink-0.svg" alt="flex-shrink: 0;">
					</div>
					<div class="row">
						<div>flex-shrink: 1;</div>
						<img src="${imagesPath}/flex-shrink-1.svg" alt="flex-shrink: 1;">
					</div>
				</div>

				<div class="group">
					<h3>Flex basis</h3>

					<div class="row">
						<div>
							<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis" target="_blank" rel="noopener">flex-basis</a>: <span class="default">auto</span>;
						</div>
					</div>
				</div>

				<div class="group">
					<h3>Align self</h3>

					<div class="row">
						<div>
							<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-self" target="_blank" rel="noopener">align-self</a>: <span class="default">auto</span>;
						</div>
						<img src="${imagesPath}/align-self-auto.svg" alt="align-self: auto;">
					</div>

					<div class="row">
						<div>align-self: flex-start;</div>
						<img src="${imagesPath}/align-self-flex-start.svg" alt="align-self: flex-start;">
					</div>

					<div class="row">
						<div>align-self: center;</div>
						<img src="${imagesPath}/align-self-center.svg" alt="align-self: center;">
					</div>

					<div class="row">
						<div>align-self: flex-end;</div>
						<img src="${imagesPath}/align-self-flex-end.svg" alt="align-self: flex-end;">
					</div>

					<div class="row">
						<div>align-self: baseline;</div>
						<img src="${imagesPath}/align-self-baseline.svg" alt="align-self: baseline;">
					</div>

					<div class="row">
						<div>align-self: stretch;</div>
						<img src="${imagesPath}/align-self-stretch.svg" alt="align-self: stretch;">
					</div>

					<h4>Try it out</h4>
					<div class="interactive-playground flex-item has-height">
						<button class="button selected" data-js-class="align-self-auto" type="button">auto</button>
						<button class="button" data-js-class="align-self-flex-start" type="button">flex-start</button>
						<button class="button" data-js-class="align-self-center" type="button">center</button>
						<button class="button" data-js-class="align-self-flex-end" type="button">flex-end</button>
						<button class="button" data-js-class="align-self-baseline" type="button">baseline</button>
						<button class="button" data-js-class="align-self-stretch" type="button">stretch</button>

						<div class="directionality align-right">
							<code class="js-directionality-code">dir="ltr"</code>
						</div>

						<div class="flexbox-container js-flexbox-container" dir="ltr">
							<div>One</div>
							<div>Two</div>
							<div>Three</div>
							<div>Four</div>
							<div>Five</div>
						</div>
					</div>
				</div>
			</div>

			<div class="container">
				<h2>Resources</h2>

				<ul>
					<li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener">A Complete Guide to Flexbox</a></li>
					<li><a href="https://www.samanthaming.com/flexbox30/" target="_blank" rel="noopener">Learn Flexbox with 30 Code Tidbits</a></li>
					<li><a href="https://flexboxfroggy.com/" target="_blank" rel="noopener">Flexbox Froggy</a></li>
					<li><a href="https://flexboxzombies.com/p/flexbox-zombies" target="_blank" rel="noopener">Flexbox Zombies</a></li>
					<li><a href="https://codingfantasy.com/games/flexboxadventure" target="_blank" rel="noopener">Flex Box Adventure</a></li>
					<li><a href="https://www.flexboxpatterns.com/" target="_blank" rel="noopener">Flexbox Patterns</a></li>
				</ul>
			</div>
		</main>

		<script type="module" src="${scriptPath}/webview-ui-toolkit/toolkit.min.js"></script>
		<script src="${scriptPath}/custom.js"></script>
	</body>
</html>
`;
}
