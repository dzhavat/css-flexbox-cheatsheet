import { Uri } from "vscode";

export function getWebviewContent(stylePath: Uri, imagesPath: Uri) {
	return `<!doctype html>
	<html lang="en">
	
	<head>
		<meta charset="utf-8">
		<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src vscode-resource:; img-src vscode-resource:;">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<title>Flexbox Cheatsheet</title>

		<link rel="stylesheet" href="${stylePath}/custom.css">
	</head>
	
	<body>
	<main>
		<div class="container">
			<h1>Flexbox Cheatsheet</h1>

			<h2>Flex Container</h2>
	
			<div class="group">
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
				<div class="row">
					<div><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow" target="_blank" rel="noopener">flex-flow</a>:
						<span class="default">row nowrap;</span> <span class="shorthand-hint">(flex-direction flex-wrap)</span>
					</div>
				</div>
			</div>
	
			<div class="group">
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
			</div>
	
			<div class="group">
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
			</div>
	
			<div class="group">
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
			</div>
	
			<div class="group">
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
			</div>
	
			<div class="group">
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
			</div>
		</div>
	
		<div class="container">
			<h2>Flex Item</h2>
	
			<div class="group">
				<div class="row">
					<div>
						<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/order" target="_blank" rel="noopener">order</a>: <span class="default">0</span>;
					</div>
					<img src="${imagesPath}/order-0.svg" alt="order: 0;">
				</div>
			</div>
	
			<div class="group">
				<div class="row">
					<div>
						<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex" target="_blank" rel="noopener">flex</a>: <span class="default">0 1 auto;</span> <span class="shorthand-hint">(flex-grow flex-shrink flex-basis)</span>
					</div>
				</div>
			</div>
	
			<div class="group">
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
			</div>
	
			<div class="group">
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
				<div class="row">
					<div>
						<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis" target="_blank" rel="noopener">flex-basis</a>: <span class="default">auto</span>;
					</div>
				</div>
			</div>
	
			<div class="group">
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
			</div>
		</div>
	
		<div class="container">
			<h2>Resources</h2>

			<ul>
				<li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener">A Complete Guide to Flexbox</a></li>
				<li><a href="https://github.com/samanthaming/Flexbox30" target="_blank" rel="noopener">Learn Flexbox in 30 days with 30 code tidbits</a></li>
				<li><a href="https://www.flexboxpatterns.com/" target="_blank" rel="noopener">Flexbox Patterns</a></li>
				<li><a href="https://flexboxfroggy.com" target="_blank" rel="noopener">Flexbox Froggy</a></li>
				<li><a href="https://mastery.games/p/flexbox-zombies" target="_blank" rel="noopener">Flexbox Zombies</a></li>
				<li><a href="https://github.com/philipwalton/flexbugs" target="_blank" rel="noopener">Flexbugs</a> - Flexbox issues</li>
			</ul>
		</div>
	</main>	
</body>
</html>
`;
}
