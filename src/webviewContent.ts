import { Uri } from "vscode";

export function getWebviewContent(styleSrc: Uri) {
	return `<!doctype html>
	<html lang="en">
	
	<head>
		<meta charset="utf-8">
		<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src vscode-resource:;">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<title>Flexbox Cheatsheet</title>

		<link rel="stylesheet" href="${styleSrc}">
	</head>
	
	<body>
	<main>
		<div class="container">
			<h1>Flexbox Cheatsheet</h1>

			<h2>Flex Container</h2>
	
			<!-- display -->
			<div class="group">
				<div class="row">
					<div>
						<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display" target="_blank" rel="noopener">display</a>: flex;
					</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -27.000000)">
								<g id="display_flex" transform="translate(27.000000, 27.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<rect id="element" x="0" y="0" width="37" height="1"></rect>
										<rect id="element" x="0" y="20" width="37" height="1"></rect>
									</g>
									<path
											d="M4,6.0085302 L4,14.9914698 C4,16.1007504 4.90234375,17 5.99456145,17 L31.0054385,17 C32.1070044,17 33,16.0980496 33,14.9914698 L33,6.0085302 C33,4.8992496 32.0976562,4 31.0054385,4 L5.99456145,4 C4.89299558,4 4,4.90195036 4,6.0085302 Z M31.0054385,5 C31.5477596,5 32,5.45393805 32,6.0085302 L32,14.9914698 C32,15.54846 31.5520164,16 31.0054385,16 L5.99456145,16 C5.4522404,16 5,15.546062 5,14.9914698 L5,6.0085302 C5,5.45153999 5.44798357,5 5.99456145,5 L31.0054385,5 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>display: inline-flex;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -57.000000)">
								<g id="display_inline-flex" transform="translate(27.000000, 57.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(1.000000, 8.000000)" id="element">
											<rect x="0" y="8" width="36" height="1"></rect>
											<path
													d="M4,1.99791312 L4,4.00208688 C4,5.10550383 4.89826062,6 5.99791312,6 L9.00208688,6 C10.1055038,6 11,5.10173938 11,4.00208688 L11,1.99791312 C11,0.894496173 10.1017394,0 9.00208688,0 L5.99791312,0 C4.89449617,0 4,0.898260623 4,1.99791312 Z M9.00208688,1 C9.55104571,1 10,1.44837074 10,1.99791312 L10,4.00208688 C10,4.55104571 9.55162926,5 9.00208688,5 L5.99791312,5 C5.44895429,5 5,4.55162926 5,4.00208688 L5,1.99791312 C5,1.44895429 5.44837074,1 5.99791312,1 L9.00208688,1 Z"></path>
											<path
													d="M25,3.0048815 L25,3.9951185 C25,5.10238398 25.8982606,6 26.9979131,6 L30.0020869,6 C31.1055038,6 32,5.1061002 32,3.9951185 L32,3.0048815 C32,1.89761602 31.1017394,1 30.0020869,1 L26.9979131,1 C25.8944962,1 25,1.8938998 25,3.0048815 Z M30.0020869,2 C30.5502659,2 31,2.45071608 31,3.0048815 L31,3.9951185 C31,4.55302399 30.5540065,5 30.0020869,5 L26.9979131,5 C26.4497341,5 26,4.54928392 26,3.9951185 L26,3.0048815 C26,2.44697601 26.4459935,2 26.9979131,2 L30.0020869,2 Z"></path>
										</g>
									</g>
									<path
											d="M14,7.99810135 L14,12.0018986 C14,13.1054196 14.8865548,14 16.0059191,14 L21.9940809,14 C23.1019194,14 24,13.1132936 24,12.0018986 L24,7.99810135 C24,6.89458045 23.1134452,6 21.9940809,6 L16.0059191,6 C14.8980806,6 14,6.88670635 14,7.99810135 Z M21.9940809,7 C22.5571637,7 23,7.44286817 23,7.99810135 L23,12.0018986 C23,12.5567997 22.5538512,13 21.9940809,13 L16.0059191,13 C15.4428363,13 15,12.5571318 15,12.0018986 L15,7.99810135 C15,7.44320035 15.4461488,7 16.0059191,7 L21.9940809,7 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
			</div>
	
			<!-- flex-flow -->
			<div class="group">
				<div class="row">
					<div><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow" target="_blank" rel="noopener">flex-flow</a>:
						<span class="default">row nowrap;</span> <span class="shorthand-hint">(flex-direction flex-wrap)</span>
					</div>
				</div>
			</div>
	
			<!-- flex-direction -->
			<div class="group">
				<div class="row">
					<div>
						<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction" target="_blank" rel="noopener">flex-direction</a>: <span class="default">row</span>;
					</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -117.000000)">
								<g id="flex-direction_row" transform="translate(27.000000, 117.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<polygon id="value" fill="#66D9EF" mask="url(#mask-2)"
													 points="4.5 14 4 14 4 13 4.5 13 28 13 28 10 32 13.5 28 17 28 14"></polygon>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(3.000000, 3.000000)">
											<rect id="Rectangle-13" opacity="0.4" x="0" y="0" width="7" height="5"></rect>
											<rect id="Rectangle-14" opacity="0.6" x="8" y="0" width="7" height="5"></rect>
											<rect id="Rectangle-15" opacity="0.8" x="16" y="0" width="7" height="5"></rect>
											<rect id="Rectangle-16" x="24" y="0" width="7" height="5"></rect>
										</g>
									</g>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>flex-direction: row-reverse;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -147.000000)">
								<g id="flex-direction_row-reverse" transform="translate(27.000000, 147.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<polygon id="value" fill="#66D9EF" mask="url(#mask-2)"
													 points="32.5 14 33 14 33 13 32.5 13 9 13 9 10 5 13.5 9 17 9 14"></polygon>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(3.000000, 3.000000)">
											<rect id="Rectangle-14" opacity="0.4" x="24" y="0" width="7" height="5"></rect>
											<rect id="Rectangle-15" opacity="0.6" x="16" y="0" width="7" height="5"></rect>
											<rect id="Rectangle-16" opacity="0.8" x="8" y="0" width="7" height="5"></rect>
											<rect id="Rectangle-17" x="0" y="0" width="7" height="5"></rect>
										</g>
									</g>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>flex-direction: column;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -177.000000)">
								<g id="flex-direction_column" transform="translate(27.000000, 177.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<polygon id="value" fill="#66D9EF" mask="url(#mask-2)"
													 points="29 3.5 29 3 30 3 30 3.5 30 14 33 14 29.5 18 26 14 29 14"></polygon>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(3.000000, 2.000000)">
											<rect id="Rectangle-12" x="0" y="12" width="20" height="5"></rect>
											<rect id="Rectangle-13" opacity="0.7" x="0" y="6" width="20" height="5"></rect>
											<rect id="Rectangle-14" opacity="0.4" x="0" y="0" width="20" height="5"></rect>
										</g>
									</g>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>flex-direction: column-reverse;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -207.000000)">
								<g id="flex-direction_column-reverse" transform="translate(27.000000, 207.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<polygon id="value" fill="#66D9EF" mask="url(#mask-2)"
													 points="29 17.5 29 18 30 18 30 17.5 30 7 33 7 29.5 3 26 7 29 7"></polygon>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(3.000000, 2.000000)">
											<rect id="Rectangle-12" opacity="0.4" x="0" y="12" width="20" height="5"></rect>
											<rect id="Rectangle-13" opacity="0.7" x="0" y="6" width="20" height="5"></rect>
											<rect id="Rectangle-14" x="0" y="0" width="20" height="5"></rect>
										</g>
									</g>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
			</div>
	
			<!-- display -->
			<div class="group">
				<div class="row">
					<div>
						<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap" target="_blank" rel="noopener">flex-wrap</a>: <span class="default">nowrap</span>;
					</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -267.000000)">
								<g id="flex-wrap_nowrap" transform="translate(27.000000, 267.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(2.000000, 3.000000)">
											<rect id="Rectangle-12" x="10" y="0" width="16" height="5"></rect>
											<rect id="Rectangle-13" x="0" y="0" width="9" height="5"></rect>
											<rect id="Rectangle-16" x="27" y="0" width="8" height="5"></rect>
										</g>
									</g>
									<path
											d="M37,10 L37,19.0054385 C37,20.0976562 36.1070044,21 35.0054385,21 L2,21 C0.907782299,21 0.00543854944,20.1070044 0.00543854944,19.0054385 L0.00543854944,1.99456143 C0.00543854944,0.902343733 0.898434128,-1.67638062e-08 2,-1.67638062e-08 L35.0054385,-1.67638062e-08 C35.7385551,-1.67638062e-08 36.386127,0.402324931 36.7326985,1 L35.0056202,1 C35.0055596,0.999999989 35.0054991,0.999999983 35.0054385,0.999999983 L1.99456145,0.999999966 C1.44922334,0.999999966 1,1.45067762 1,1.99456142 L1,19.0054385 C1,19.5507766 1.45067766,20 1.99456145,20 L35.0054385,20 C35.5507767,20 36,19.5493223 36,19.0054385 L36,10 L37,10 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>flex-wrap: wrap;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -297.000000)">
								<g id="flex-wrap_wrap" transform="translate(27.000000, 297.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<path d="M13,13.75 L13,13 L18,13 L18,18 L13,18 L13,17.25 L15,15.5 L13,13.75 Z"
												id="Combined-Shape" fill="#75715E" opacity="0.800000012"
												mask="url(#mask-2)"></path>
									<rect id="Rectangle-16" fill="#75715E" mask="url(#mask-2)" x="19" y="13" width="5"
												height="5"></rect>
									<rect id="Rectangle-12" fill="#75715E" opacity="0.300000012" mask="url(#mask-2)" x="12" y="3"
												width="5" height="5"></rect>
									<rect id="Rectangle-13" fill="#75715E" opacity="0.5" mask="url(#mask-2)" x="18" y="3" width="5"
												height="5"></rect>
									<rect id="Rectangle-14" fill="#75715E" opacity="0.699999988" mask="url(#mask-2)" x="24" y="3"
												width="5" height="5"></rect>
									<g id="value" mask="url(#mask-2)">
										<g transform="translate(4.000000, 5.000000)">
											<polygon id="Line-2" stroke="none" fill="#66D9EF" fill-rule="evenodd"
															 points="4 7 8 10.5 4 14"></polygon>
											<path
													d="M4.50000009,10.5 C-1.99999992,11 -0.500000013,4 4.49999978,4 C9.49999957,4 23.0000003,6.5 26.5,6.5 C29.9999997,6.5 32,0.5 26.5000006,0.5"
													id="Path-27" stroke="#66D9EF" stroke-width="1" fill="none"></path>
										</g>
									</g>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>flex-wrap: wrap-reverse;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -327.000000)">
								<g id="flex-wrap_wrap-reverse" transform="translate(27.000000, 327.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(11.000000, 2.000000)">
											<rect id="Rectangle-12" opacity="0.300000012" x="1" y="11" width="5" height="5"></rect>
											<rect id="Rectangle-13" opacity="0.5" x="7" y="11" width="5" height="5"></rect>
											<rect id="Rectangle-14" opacity="0.699999988" x="13" y="11" width="5" height="5"></rect>
											<rect id="Rectangle-16" x="8" y="1" width="5" height="5"></rect>
											<path d="M2,1.75 L2,1 L7,1 L7,6 L2,6 L2,5.25 L4,3.5 L2,1.75 Z" id="Rectangle-15"
														opacity="0.800000012"></path>
										</g>
									</g>
									<g id="value" mask="url(#mask-2)">
										<g transform="translate(19.000000, 9.000000) scale(1, -1) translate(-19.000000, -9.000000) translate(4.000000, 2.000000)">
											<polygon id="Line-3" stroke="none" fill="#66D9EF" fill-rule="evenodd"
															 points="4 7 8 10.5 4 14"></polygon>
											<path
													d="M4.50000009,10.5 C-1.99999992,11 -0.500000013,4 4.49999978,4 C9.49999957,4 23.0000003,6.5 26.5,6.5 C29.9999997,6.5 32,0.5 26.5000006,0.5"
													id="Path-27" stroke="#66D9EF" stroke-width="1" fill="none"></path>
										</g>
									</g>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
			</div>
	
			<!-- justify-content -->
			<div class="group">
				<div class="row">
					<div>
						<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content" target="_blank" rel="noopener">justify-content</a>: <span class="default">flex-start</span>;
					</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -387.000000)">
								<g id="justify-content_flex-start" transform="translate(27.000000, 387.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(3.000000, 8.000000)">
											<rect id="Rectangle-16" x="0" y="0" width="5" height="5"></rect>
											<rect id="Rectangle-17" x="6" y="0" width="5" height="5"></rect>
											<rect id="Rectangle-18" x="12" y="0" width="5" height="5"></rect>
										</g>
									</g>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>justify-content: center;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -417.000000)">
								<g id="justify-content_center" transform="translate(27.000000, 417.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(10.000000, 8.000000)">
											<rect id="Rectangle-16" x="0" y="0" width="5" height="5"></rect>
											<rect id="Rectangle-17" x="6" y="0" width="5" height="5"></rect>
											<rect id="Rectangle-18" x="12" y="0" width="5" height="5"></rect>
										</g>
									</g>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>justify-content: flex-end;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -447.000000)">
								<g id="justify-content_flex-end" transform="translate(27.000000, 447.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(17.000000, 8.000000)">
											<rect id="Rectangle-16" x="0" y="0" width="5" height="5"></rect>
											<rect id="Rectangle-17" x="6" y="0" width="5" height="5"></rect>
											<rect id="Rectangle-18" x="12" y="0" width="5" height="5"></rect>
										</g>
									</g>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>justify-content: space-between;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -477.000000)">
								<g id="justify-content_space-between"
									 transform="translate(45.500000, 487.500000) scale(-1, 1) translate(-45.500000, -487.500000) translate(27.000000, 477.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(3.000000, 8.000000)">
											<rect id="Rectangle-16" x="0" y="0" width="5" height="5"></rect>
											<rect id="Rectangle-17" x="13" y="0" width="5" height="5"></rect>
											<rect id="Rectangle-18" x="26" y="0" width="5" height="5"></rect>
										</g>
									</g>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>justify-content: space-around;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -507.000000)">
								<g id="justify-content_space-around" transform="translate(27.000000, 507.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(3.000000, 8.000000)">
											<rect id="Rectangle-16" x="2.5" y="0" width="5" height="5"></rect>
											<rect id="Rectangle-17" x="13" y="0" width="5" height="5"></rect>
											<rect id="Rectangle-18" x="23.5" y="0" width="5" height="5"></rect>
										</g>
									</g>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>justify-content: space-evenly;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -507.000000)">
								<g id="justify-content_space-evenly" transform="translate(27.000000, 507.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(6.000000, 8.000000)">
											<rect id="Rectangle-16" x="0" y="0" width="5" height="5"></rect>
											<rect id="Rectangle-17" x="10" y="0" width="5" height="5"></rect>
											<rect id="Rectangle-18" x="20" y="0" width="5" height="5"></rect>
										</g>
									</g>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
			</div>
	
			<!-- align-items -->
			<div class="group">
				<div class="row">
					<div>
						<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items" target="_blank" rel="noopener">align-items</a>: <span class="default">stretch</span>;
					</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -657.000000)">
								<g id="align-items_stretch" transform="translate(27.000000, 657.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(2.000000, 2.000000)">
											<rect id="Rectangle-13" x="10" y="0" width="16" height="17"></rect>
											<rect id="Rectangle-14" x="0" y="0" width="9" height="17"></rect>
											<rect id="Rectangle-17" x="27" y="0" width="6" height="17"></rect>
										</g>
									</g>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>align-items: flex-start;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -567.000000)">
								<g id="align-items_flex-start" transform="translate(27.000000, 567.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(2.000000, 2.000000)">
											<rect id="Rectangle-13" x="10" y="0" width="16" height="7"></rect>
											<rect id="Rectangle-14" x="0" y="0" width="9" height="3"></rect>
											<rect id="Rectangle-17" x="27" y="0" width="6" height="5"></rect>
										</g>
									</g>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>align-items: center;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -597.000000)">
								<g id="align-items_center" transform="translate(27.000000, 597.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(2.000000, 7.000000)">
											<rect id="Rectangle-13" x="10" y="0" width="16" height="7"></rect>
											<rect id="Rectangle-14" x="0" y="2" width="9" height="3"></rect>
											<rect id="Rectangle-17" x="27" y="1" width="6" height="5"></rect>
										</g>
									</g>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>align-items: flex-end;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -627.000000)">
								<g id="align-items_flex-end" transform="translate(27.000000, 627.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(2.000000, 12.000000)">
											<rect id="Rectangle-13" x="10" y="0" width="16" height="7"></rect>
											<rect id="Rectangle-14" x="0" y="4" width="9" height="3"></rect>
											<rect id="Rectangle-17" x="27" y="2" width="6" height="5"></rect>
										</g>
									</g>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>align-items: baseline;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -687.000000)">
								<g id="align-items_baseline" transform="translate(27.000000, 687.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<path
											d="M12,8 L12,6 L28,6 L28,8 L12,8 Z M12,11 L12,16 L28,16 L28,11 L12,11 Z M2,9 L2,5 L11,5 L11,8 L2,8 L2,9 Z M29,8 L29,6 L35,6 L35,13 L29,13 L29,11 L35,11 L35,8 L29,8 Z"
											id="Combined-Shape" fill="#75715E" mask="url(#mask-2)"></path>
									<polygon id="value" fill="#66D9EF" mask="url(#mask-2)" points="2 10 35 10 35 9 2 9"></polygon>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
			</div>
	
			<!-- align-content -->
			<div class="group">
				<div class="row">
					<div>
						<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-content" target="_blank" rel="noopener">align-content</a>: <span class="default">stretch</span>;
					</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -837.000000)">
								<g id="align-content_stretch" transform="translate(27.000000, 837.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(2.000000, 2.000000)">
											<rect id="Rectangle-15" x="0" y="12" width="9" height="5"></rect>
											<rect id="Rectangle-18" x="10" y="12" width="6" height="5"></rect>
											<rect id="Rectangle-13" x="10" y="0" width="16" height="5"></rect>
											<rect id="Rectangle-14" x="7" y="6" width="16" height="5"></rect>
											<rect id="Rectangle-15" x="24" y="6" width="9" height="5"></rect>
											<rect id="Rectangle-18" x="0" y="6" width="6" height="5"></rect>
											<rect id="Rectangle-17" x="27" y="0" width="6" height="5"></rect>
											<rect id="Rectangle-14" x="0" y="0" width="9" height="5"></rect>
										</g>
									</g>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>align-content: flex-start;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -747.000000)">
								<g id="align-content_flex-start" transform="translate(27.000000, 747.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(2.000000, 2.000000)">
											<rect id="Rectangle-13" x="10" y="0" width="16" height="2"></rect>
											<rect id="Rectangle-14" x="0" y="0" width="9" height="2"></rect>
											<rect id="Rectangle-17" x="27" y="0" width="6" height="2"></rect>
											<rect id="Rectangle-15" x="0" y="6" width="9" height="2"></rect>
											<rect id="Rectangle-18" x="10" y="6" width="6" height="2"></rect>
											<rect id="Rectangle-14" x="7" y="3" width="16" height="2"></rect>
											<rect id="Rectangle-15" x="24" y="3" width="9" height="2"></rect>
											<rect id="Rectangle-18" x="0" y="3" width="6" height="2"></rect>
										</g>
									</g>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>align-content: center;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -777.000000)">
								<g id="align-content_center" transform="translate(27.000000, 777.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(2.000000, 6.000000)">
											<rect id="Rectangle-13" x="10" y="0" width="16" height="2"></rect>
											<rect id="Rectangle-14" x="0" y="0" width="9" height="2"></rect>
											<rect id="Rectangle-17" x="27" y="0" width="6" height="2"></rect>
											<rect id="Rectangle-15" x="0" y="6" width="9" height="2"></rect>
											<rect id="Rectangle-18" x="10" y="6" width="6" height="2"></rect>
											<rect id="Rectangle-14" x="7" y="3" width="16" height="2"></rect>
											<rect id="Rectangle-15" x="24" y="3" width="9" height="2"></rect>
											<rect id="Rectangle-18" x="0" y="3" width="6" height="2"></rect>
										</g>
									</g>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>align-content: flex-end;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -807.000000)">
								<g id="align-content_flex-end" transform="translate(27.000000, 807.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(2.000000, 11.000000)">
											<rect id="Rectangle-13" x="10" y="0" width="16" height="2"></rect>
											<rect id="Rectangle-14" x="0" y="0" width="9" height="2"></rect>
											<rect id="Rectangle-17" x="27" y="0" width="6" height="2"></rect>
											<rect id="Rectangle-15" x="0" y="6" width="9" height="2"></rect>
											<rect id="Rectangle-18" x="10" y="6" width="6" height="2"></rect>
											<rect id="Rectangle-14" x="7" y="3" width="16" height="2"></rect>
											<rect id="Rectangle-15" x="24" y="3" width="9" height="2"></rect>
											<rect id="Rectangle-18" x="0" y="3" width="6" height="2"></rect>
										</g>
									</g>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>align-content: space-between;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -867.000000)">
								<g id="align-content_space-between" transform="translate(27.000000, 867.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(2.000000, 2.000000)">
											<rect id="Rectangle-15" x="0" y="15" width="9" height="2"></rect>
											<rect id="Rectangle-18" x="10" y="15" width="6" height="2"></rect>
											<rect id="Rectangle-13" x="10" y="0" width="16" height="2"></rect>
											<rect id="Rectangle-14" x="7" y="7" width="16" height="2"></rect>
											<rect id="Rectangle-15" x="24" y="7" width="9" height="2"></rect>
											<rect id="Rectangle-18" x="0" y="7" width="6" height="2"></rect>
											<rect id="Rectangle-17" x="27" y="0" width="6" height="2"></rect>
											<rect id="Rectangle-14" x="0" y="0" width="9" height="2"></rect>
										</g>
									</g>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>align-content: space-around;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="container" transform="translate(-27.000000, -897.000000)">
								<g id="align-content_space-around" transform="translate(27.000000, 897.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<g transform="translate(2.000000, 4.000000)">
											<rect id="Rectangle-15" x="0" y="10" width="9" height="2"></rect>
											<rect id="Rectangle-18" x="10" y="10" width="6" height="2"></rect>
											<rect id="Rectangle-13" x="10" y="0" width="16" height="2"></rect>
											<rect id="Rectangle-14" x="7" y="5" width="16" height="2"></rect>
											<rect id="Rectangle-15" x="24" y="5" width="9" height="2"></rect>
											<rect id="Rectangle-18" x="0" y="5" width="6" height="2"></rect>
											<rect id="Rectangle-17" x="27" y="0" width="6" height="2"></rect>
											<rect id="Rectangle-14" x="0" y="0" width="9" height="2"></rect>
										</g>
									</g>
									<path
											d="M0.00543854944,1.99456143 L0.00543854944,19.0054385 C0.00543854944,20.1070044 0.907782299,21 2,21 L35.0054385,21 C36.1070044,21 37,20.0976562 37,19.0054385 L37,1.99456143 C37,0.892995562 36.0976562,-1.67638062e-08 35.0054385,-1.67638062e-08 L2,-1.67638062e-08 C0.898434128,-1.67638062e-08 0.00543854944,0.902343733 0.00543854944,1.99456143 Z M35.0054385,0.999999983 C35.5493223,0.999999983 36,1.44922332 36,1.99456143 L36,19.0054385 C36,19.5493223 35.5507767,20 35.0054385,20 L1.99456145,20 C1.45067766,20 1,19.5507766 1,19.0054385 L1,1.99456142 C1,1.45067762 1.44922334,0.999999966 1.99456145,0.999999966 L35.0054385,0.999999983 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
			</div>
		</div>
	
		<div class="container">
			<h2>Flex Item</h2>
	
			<!-- order -->
			<div class="group">
				<div class="row">
					<div>
						<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/order" target="_blank" rel="noopener">order</a>: <span class="default">0</span>;
					</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="item" transform="translate(-27.000000, -117.000000)">
								<g id="order_0" transform="translate(27.000000, 117.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)">
										<path
												d="M2,2.99895656 L2,6.00104344 C2,6.55275191 2.4463114,7 2.99754465,7 L10.0024554,7 C10.553384,7 11,6.55733967 11,6.00104344 L11,2.99895656 C11,2.44724809 10.5536886,2 10.0024554,2 L2.99754465,2 C2.44661595,2 2,2.44266033 2,2.99895656 Z M10.0024554,3 C10.0009345,3 10,6.00104344 10,6.00104344 C10,6.00307541 2.99754465,6 2.99754465,6 C2.99906549,6 3,2.99895656 3,2.99895656 C3,2.99692459 10.0024554,3 10.0024554,3 Z"
												id="Rectangle-14" fill="#75715E"></path>
										<path
												d="M29,2.99980749 L29,6.00019251 C29,6.55237094 29.4509752,7 29.990778,7 L34.009222,7 C34.5564136,7 35,6.55628335 35,6.00019251 L35,2.99980749 C35,2.44762906 34.5490248,2 34.009222,2 L29.990778,2 C29.4435864,2 29,2.44371665 29,2.99980749 Z M34.009222,3 C33.9984093,3 34,6.00019251 34,6.00019251 C34,6.00406733 29.990778,6 29.990778,6 C30.0015907,6 30,2.99980749 30,2.99980749 C30,2.99593267 34.009222,3 34.009222,3 Z"
												id="Rectangle-17" fill="#75715E"></path>
										<g id="value" transform="translate(0.000000, 6.000000)">
											<polygon id="value-2" fill="#66D9EF"
															 transform="translate(4.127459, 4.126125) rotate(-292.000000) translate(-4.127459, -4.126125) "
															 points="6.12745875 0.626124718 2.12745875 4.12612472 6.12745875 7.62612472"></polygon>
											<path
													d="M4.8530554,5.914605 C5.64169677,7.8195214 7.09635922,11.7093404 12.0481798,11.7093403 C17.0000004,11.7093403 20.1507658,8.8995312 20.3677071,4.55180426"
													id="Path-119" stroke="#66D9EF"></path>
										</g>
									</g>
									<path
											d="M12,3.00292933 L12,7.99707067 C12,8.55097324 12.4446309,9 13.0008717,9 L26.9991283,9 C27.5518945,9 28,8.56211865 28,7.99707067 L28,3.00292933 C28,2.44902676 27.5553691,2 26.9991283,2 L13.0008717,2 C12.4481055,2 12,2.43788135 12,3.00292933 Z M26.9991283,3 C27.0008847,3 27,7.99707067 27,7.99707067 C27,8.00471541 13.0008717,8 13.0008717,8 C12.9991153,8 13,3.00292933 13,3.00292933 C13,2.99528459 26.9991283,3 26.9991283,3 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
			</div>
	
			<!-- flex -->
			<div class="group">
				<div class="row">
					<div>
						<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex" target="_blank" rel="noopener">flex</a>: <span class="default">0 1 auto;</span> <span class="shorthand-hint">(flex-grow flex-shrink flex-basis)</span>
					</div>
				</div>
			</div>
	
			<!-- flex-grow -->
			<div class="group">
				<div class="row">
					<div><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow" target="_blank" rel="noopener">flex-grow</a>:
						<span class="default">0</span>;
					</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="item" transform="translate(-27.000000, -177.000000)">
								<g id="flex-grow_0" transform="translate(27.000000, 177.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<path
												d="M31,2.9999602 L31,18.0000398 C31,18.5523026 31.4433532,19 32.0093689,19 L33.9906311,19 C34.5480902,19 35,18.5452911 35,18.0000398 L35,2.9999602 C35,2.44769743 34.5566468,2 33.9906311,2 L32.0093689,2 C31.4519098,2 31,2.45470893 31,2.9999602 Z M33.9906311,3 C34.0021871,3 34,2.99782053 34,2.9999602 L34,18.0000398 C34,17.9944105 33.9943851,18 33.9906311,18 L32.0093689,18 C31.9978129,18 32,18.0021795 32,18.0000398 L32,2.9999602 C32,3.00558949 32.0056149,3 32.0093689,3 L33.9906311,3 Z M26,2.9999602 L26,18.0000398 C26,18.5523026 26.4433532,19 27.0093689,19 L28.9906311,19 C29.5480902,19 30,18.5452911 30,18.0000398 L30,2.9999602 C30,2.44769743 29.5566468,2 28.9906311,2 L27.0093689,2 C26.4519098,2 26,2.45470893 26,2.9999602 Z M28.9906311,3 C29.0021871,3 29,2.99782053 29,2.9999602 L29,18.0000398 C29,17.9944105 28.9943851,18 28.9906311,18 L27.0093689,18 C26.9978129,18 27,18.0021795 27,18.0000398 L27,2.9999602 C27,3.00558949 27.0056149,3 27.0093689,3 L28.9906311,3 Z"
												id="Combined-Shape"></path>
									</g>
									<path
											d="M2,2.9999602 L2,18.0000398 C2,18.5523026 2.43891776,19 3.00307055,19 L23.9969294,19 C24.55091,19 25,18.5452911 25,18.0000398 L25,2.9999602 C25,2.44769743 24.5610822,2 23.9969294,2 L3.00307055,2 C2.44908998,2 2,2.45470893 2,2.9999602 Z M23.9969294,3 C24.004404,3 24,18.0000398 24,18.0000398 C24,17.9958139 3.00307055,18 3.00307055,18 C2.995596,18 3,2.9999602 3,2.9999602 C3,3.0041861 23.9969294,3 23.9969294,3 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
									<path
											d="M16,10 L16,7 L20,10.5 L16,14 L16,11 L11,11 L11,14 L7,10.5 L11,7 L11,10 L16,10 L16,10 Z M5,7 L6,7 L6,14 L5,14 L5,7 L5,7 Z M21,7 L22,7 L22,14 L21,14 L21,7 L21,7 Z"
											id="value" fill="#66D9EF" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>flex-grow: 1;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="item" transform="translate(-27.000000, -207.000000)">
								<g id="flex-grow_1" transform="translate(27.000000, 207.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<path
												d="M31,2.9999602 L31,18.0000398 C31,18.5523026 31.4433532,19 32.0093689,19 L33.9906311,19 C34.5480902,19 35,18.5452911 35,18.0000398 L35,2.9999602 C35,2.44769743 34.5566468,2 33.9906311,2 L32.0093689,2 C31.4519098,2 31,2.45470893 31,2.9999602 Z M33.9906311,3 C34.0021871,3 34,2.99782053 34,2.9999602 L34,18.0000398 C34,17.9944105 33.9943851,18 33.9906311,18 L32.0093689,18 C31.9978129,18 32,18.0021795 32,18.0000398 L32,2.9999602 C32,3.00558949 32.0056149,3 32.0093689,3 L33.9906311,3 Z M26,2.9999602 L26,18.0000398 C26,18.5523026 26.4433532,19 27.0093689,19 L28.9906311,19 C29.5480902,19 30,18.5452911 30,18.0000398 L30,2.9999602 C30,2.44769743 29.5566468,2 28.9906311,2 L27.0093689,2 C26.4519098,2 26,2.45470893 26,2.9999602 Z M28.9906311,3 C29.0021871,3 29,2.99782053 29,2.9999602 L29,18.0000398 C29,17.9944105 28.9943851,18 28.9906311,18 L27.0093689,18 C26.9978129,18 27,18.0021795 27,18.0000398 L27,2.9999602 C27,3.00558949 27.0056149,3 27.0093689,3 L28.9906311,3 Z"
												id="Combined-Shape"></path>
									</g>
									<path
											d="M2,2.9999602 L2,18.0000398 C2,18.5523026 2.43891776,19 3.00307055,19 L23.9969294,19 C24.55091,19 25,18.5452911 25,18.0000398 L25,2.9999602 C25,2.44769743 24.5610822,2 23.9969294,2 L3.00307055,2 C2.44908998,2 2,2.45470893 2,2.9999602 Z M23.9969294,3 C24.004404,3 24,18.0000398 24,18.0000398 C24,17.9958139 3.00307055,18 3.00307055,18 C2.995596,18 3,2.9999602 3,2.9999602 C3,3.0041861 23.9969294,3 23.9969294,3 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
									<polygon id="value" fill="#66D9EF" mask="url(#mask-2)"
													 points="19 10 19 7 23 10.5 19 14 19 11 8 11 8 14 4 10.5 8 7 8 10"></polygon>
								</g>
							</g>
						</g>
					</svg>
				</div>
			</div>
	
			<!-- flex-shrink -->
			<div class="group">
				<div class="row">
					<div>
						<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow" target="_blank" rel="noopener">flex-shrink</a>: <span class="default">0</span>;
					</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="item" transform="translate(-27.000000, -247.000000)">
								<g id="flex-shrink_0" transform="translate(27.000000, 247.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<path
												d="M24,2.9999602 L24,18.0000398 C24,18.5523026 24.4433532,19 25.0093689,19 L27.9906311,19 C28.5480902,19 29,18.5452911 29,18.0000398 L29,2.9999602 C29,2.44769743 28.5566468,2 27.9906311,2 L25.0093689,2 C24.4519098,2 24,2.45470893 24,2.9999602 Z M27.9857009,3 C28.003033,3 27.9997527,2.99782053 27.9997527,2.9999602 L27.9997527,18.0000398 C27.9997527,17.9944105 27.9913313,18 27.9857009,18 L25.0141342,18 C24.9968021,18 25.0000824,18.0021795 25.0000824,18.0000398 L25.0000824,2.9999602 C25.0000824,3.00558949 25.0085038,3 25.0141342,3 L27.9857009,3 Z"
												id="Rectangle-152"></path>
										<path
												d="M30,2.9999602 L30,18.0000398 C30,18.5523026 30.4433532,19 31.0093689,19 L33.9906311,19 C34.5480902,19 35,18.5452911 35,18.0000398 L35,2.9999602 C35,2.44769743 34.5566468,2 33.9906311,2 L31.0093689,2 C30.4519098,2 30,2.45470893 30,2.9999602 Z M33.9857009,3 C34.003033,3 33.9997527,2.99782053 33.9997527,2.9999602 L33.9997527,18.0000398 C33.9997527,17.9944105 33.9913313,18 33.9857009,18 L31.0141342,18 C30.9968021,18 31.0000824,18.0021795 31.0000824,18.0000398 L31.0000824,2.9999602 C31.0000824,3.00558949 31.0085038,3 31.0141342,3 L33.9857009,3 Z"
												id="Rectangle-152"></path>
									</g>
									<path
											d="M2,2.9999602 L2,18.0000398 C2,18.5523026 2.43891776,19 3.00307055,19 L21.9969294,19 C22.55091,19 23,18.5452911 23,18.0000398 L23,2.9999602 C23,2.44769743 22.5610822,2 21.9969294,2 L3.00307055,2 C2.44908998,2 2,2.45470893 2,2.9999602 Z M21.9960561,3 C22.0028184,3 21.9988341,18.0000398 21.9988341,18.0000398 C21.9988341,17.9958139 3.00265517,18 3.00265517,18 C2.99589285,18 2.9998772,2.9999602 2.9998772,2.9999602 C2.9998772,3.0041861 21.9960561,3 21.9960561,3 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
									<path
											d="M23,10 L23,11 L21,11 L21,14 L17,10.5 L21,7 L21,10 L23,10 Z M16,6 L17,6 L17,15 L16,15 L16,6 Z M8,6 L9,6 L9,15 L8,15 L8,6 Z M2,10 L2,11 L4,11 L4,14 L8,10.5 L4,7 L4,10 L2,10 Z"
											id="value" fill="#66D9EF" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>flex-shrink: 1;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="item" transform="translate(-27.000000, -277.000000)">
								<g id="flex-shrink_1" transform="translate(27.000000, 277.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<path
												d="M24,2.9999602 L24,18.0000398 C24,18.5523026 24.4433532,19 25.0093689,19 L27.9906311,19 C28.5480902,19 29,18.5452911 29,18.0000398 L29,2.9999602 C29,2.44769743 28.5566468,2 27.9906311,2 L25.0093689,2 C24.4519098,2 24,2.45470893 24,2.9999602 Z M27.9857009,3 C28.003033,3 27.9997527,2.99782053 27.9997527,2.9999602 L27.9997527,18.0000398 C27.9997527,17.9944105 27.9913313,18 27.9857009,18 L25.0141342,18 C24.9968021,18 25.0000824,18.0021795 25.0000824,18.0000398 L25.0000824,2.9999602 C25.0000824,3.00558949 25.0085038,3 25.0141342,3 L27.9857009,3 Z"
												id="Rectangle-152"></path>
										<path
												d="M30,2.9999602 L30,18.0000398 C30,18.5523026 30.4433532,19 31.0093689,19 L33.9906311,19 C34.5480902,19 35,18.5452911 35,18.0000398 L35,2.9999602 C35,2.44769743 34.5566468,2 33.9906311,2 L31.0093689,2 C30.4519098,2 30,2.45470893 30,2.9999602 Z M33.9857009,3 C34.003033,3 33.9997527,2.99782053 33.9997527,2.9999602 L33.9997527,18.0000398 C33.9997527,17.9944105 33.9913313,18 33.9857009,18 L31.0141342,18 C30.9968021,18 31.0000824,18.0021795 31.0000824,18.0000398 L31.0000824,2.9999602 C31.0000824,3.00558949 31.0085038,3 31.0141342,3 L33.9857009,3 Z"
												id="Rectangle-152"></path>
									</g>
									<path
											d="M2,2.9999602 L2,18.0000398 C2,18.5523026 2.43891776,19 3.00307055,19 L21.9969294,19 C22.55091,19 23,18.5452911 23,18.0000398 L23,2.9999602 C23,2.44769743 22.5610822,2 21.9969294,2 L3.00307055,2 C2.44908998,2 2,2.45470893 2,2.9999602 Z M21.9960561,3 C22.0028184,3 21.9988341,18.0000398 21.9988341,18.0000398 C21.9988341,17.9958139 3.00265517,18 3.00265517,18 C2.99589285,18 2.9998772,2.9999602 2.9998772,2.9999602 C2.9998772,3.0041861 21.9960561,3 21.9960561,3 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
									<path
											d="M23,10 L23,11 L19,11 L19,14 L15,10.5 L19,7 L19,10 L23,10 Z M2,10 L2,11 L6,11 L6,14 L10,10.5 L6,7 L6,10 L2,10 Z"
											id="value" fill="#66D9EF" mask="url(#mask-2)"></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
			</div>
	
			<!-- flex-basis -->
			<div class="group">
				<div class="row">
					<div>
						<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis" target="_blank" rel="noopener">flex-basis</a>: <span class="default">auto</span>;
					</div>
				</div>
			</div>
	
			<!-- align-self -->
			<div class="group">
				<div class="row">
					<div>
						<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-self" target="_blank" rel="noopener">align-self</a>: <span class="default">auto</span>;
					</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="item" transform="translate(-27.000000, -537.000000)">
								<g id="align-self_auto" transform="translate(27.000000, 537.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<path
												d="M2,2.99895656 L2,4.00104344 C2,4.55275191 2.4463114,5 2.99754465,5 L10.0024554,5 C10.553384,5 11,4.55733967 11,4.00104344 L11,2.99895656 C11,2.44724809 10.5536886,2 10.0024554,2 L2.99754465,2 C2.44661595,2 2,2.44266033 2,2.99895656 Z M10.0024554,3 C10.0009345,3 10,4.00104344 10,4.00104344 C10,4.00307541 2.99754465,4 2.99754465,4 C2.99906549,4 3,2.99895656 3,2.99895656 C3,2.99692459 10.0024554,3 10.0024554,3 Z"
												id="Rectangle-14"></path>
										<path
												d="M29,2.99980749 L29,6.00019251 C29,6.55237094 29.4509752,7 29.990778,7 L34.009222,7 C34.5564136,7 35,6.55628335 35,6.00019251 L35,2.99980749 C35,2.44762906 34.5490248,2 34.009222,2 L29.990778,2 C29.4435864,2 29,2.44371665 29,2.99980749 Z M34.009222,3 C33.9984093,3 34,6.00019251 34,6.00019251 C34,6.00406733 29.990778,6 29.990778,6 C30.0015907,6 30,2.99980749 30,2.99980749 C30,2.99593267 34.009222,3 34.009222,3 Z"
												id="Rectangle-17"></path>
										<path
												d="M12,3.00292933 L12,7.99707067 C12,8.55097324 12.4446309,9 13.0008717,9 L26.9991283,9 C27.5518945,9 28,8.56211865 28,7.99707067 L28,3.00292933 C28,2.44902676 27.5553691,2 26.9991283,2 L13.0008717,2 C12.4481055,2 12,2.43788135 12,3.00292933 Z M26.9991283,3 C27.0008847,3 27,7.99707067 27,7.99707067 C27,8.00471541 13.0008717,8 13.0008717,8 C12.9991153,8 13,3.00292933 13,3.00292933 C13,2.99528459 26.9991283,3 26.9991283,3 Z"
												id="elm"></path>
									</g>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>align-self: flex-start;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="item" transform="translate(-27.000000, -567.000000)">
								<g id="align-self_flex-start" transform="translate(27.000000, 567.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<path
												d="M2,2.99895656 L2,4.00104344 C2,4.55275191 2.4463114,5 2.99754465,5 L10.0024554,5 C10.553384,5 11,4.55733967 11,4.00104344 L11,2.99895656 C11,2.44724809 10.5536886,2 10.0024554,2 L2.99754465,2 C2.44661595,2 2,2.44266033 2,2.99895656 Z M10.0024554,3 C10.0009345,3 10,4.00104344 10,4.00104344 C10,4.00307541 2.99754465,4 2.99754465,4 C2.99906549,4 3,2.99895656 3,2.99895656 C3,2.99692459 10.0024554,3 10.0024554,3 Z"
												id="Rectangle-14"></path>
										<path
												d="M29,2.99980749 L29,6.00019251 C29,6.55237094 29.4509752,7 29.990778,7 L34.009222,7 C34.5564136,7 35,6.55628335 35,6.00019251 L35,2.99980749 C35,2.44762906 34.5490248,2 34.009222,2 L29.990778,2 C29.4435864,2 29,2.44371665 29,2.99980749 Z M34.009222,3 C33.9984093,3 34,6.00019251 34,6.00019251 C34,6.00406733 29.990778,6 29.990778,6 C30.0015907,6 30,2.99980749 30,2.99980749 C30,2.99593267 34.009222,3 34.009222,3 Z"
												id="Rectangle-17"></path>
									</g>
									<g id="selector" mask="url(#mask-2)" fill="#A6E22D">
										<g transform="translate(12.000000, 2.000000)">
											<path
													d="M0,1.00292933 L0,5.99707067 C0,6.55097324 0.444630861,7 1.00087166,7 L14.9991283,7 C15.5518945,7 16,6.56211865 16,5.99707067 L16,1.00292933 C16,0.449026756 15.5553691,0 14.9991283,0 L1.00087166,0 C0.448105505,0 0,0.437881351 0,1.00292933 Z M14.9991283,1 C15.0008847,1 15,5.99707067 15,5.99707067 C15,6.00471541 1.00087166,6 1.00087166,6 C0.999115311,6 1,1.00292933 1,1.00292933 C1,0.995284586 14.9991283,1 14.9991283,1 Z"></path>
										</g>
									</g>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>align-self: center;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="item" transform="translate(-27.000000, -597.000000)">
								<g id="align-self_center" transform="translate(27.000000, 597.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="Rectangle-26" xlink:href="#path-1"></use>
									<g id="selector" mask="url(#mask-2)">
										<g transform="translate(2.000000, 2.000000)">
											<path
													d="M10,6.00292933 L10,10.9970707 C10,11.5509732 10.4446309,12 11.0008717,12 L24.9991283,12 C25.5518945,12 26,11.5621186 26,10.9970707 L26,6.00292933 C26,5.44902676 25.5553691,5 24.9991283,5 L11.0008717,5 C10.4481055,5 10,5.43788135 10,6.00292933 Z M24.9991283,6 C25.0008847,6 25,10.9970707 25,10.9970707 C25,11.0047154 11.0008717,11 11.0008717,11 C10.9991153,11 11,6.00292933 11,6.00292933 C11,5.99528459 24.9991283,6 24.9991283,6 Z"
													id="selector" fill="#A6E22D"></path>
											<path
													d="M0,0.998956561 L0,2.00104344 C0,2.55275191 0.446311399,3 0.997544646,3 L8.00245535,3 C8.55338405,3 9,2.55733967 9,2.00104344 L9,0.998956561 C9,0.447248087 8.5536886,0 8.00245535,0 L0.997544646,0 C0.446615951,0 0,0.442660332 0,0.998956561 Z M8.00245535,1 C8.00093451,1 8,2.00104344 8,2.00104344 C8,2.00307541 0.997544646,2 0.997544646,2 C0.999065494,2 1,0.998956561 1,0.998956561 C1,0.996924591 8.00245535,1 8.00245535,1 Z"
													id="Rectangle-15" fill="#75715E"></path>
											<path
													d="M27,0.999807492 L27,4.00019251 C27,4.55237094 27.4509752,5 27.990778,5 L32.009222,5 C32.5564136,5 33,4.55628335 33,4.00019251 L33,0.999807492 C33,0.447629061 32.5490248,0 32.009222,0 L27.990778,0 C27.4435864,0 27,0.443716645 27,0.999807492 Z M32.009222,1 C31.9984093,1 32,4.00019251 32,4.00019251 C32,4.00406733 27.990778,4 27.990778,4 C28.0015907,4 28,0.999807492 28,0.999807492 C28,0.995932674 32.009222,1 32.009222,1 Z"
													id="Rectangle-18" fill="#75715E"></path>
										</g>
									</g>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>align-self: flex-end;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="item" transform="translate(-27.000000, -627.000000)">
								<g id="align-self_flex-end" transform="translate(27.000000, 627.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<path
												d="M2,2.99895656 L2,4.00104344 C2,4.55275191 2.4463114,5 2.99754465,5 L10.0024554,5 C10.553384,5 11,4.55733967 11,4.00104344 L11,2.99895656 C11,2.44724809 10.5536886,2 10.0024554,2 L2.99754465,2 C2.44661595,2 2,2.44266033 2,2.99895656 Z M10.0024554,3 C10.0009345,3 10,4.00104344 10,4.00104344 C10,4.00307541 2.99754465,4 2.99754465,4 C2.99906549,4 3,2.99895656 3,2.99895656 C3,2.99692459 10.0024554,3 10.0024554,3 Z"
												id="Rectangle-15"></path>
										<path
												d="M29,2.99980749 L29,6.00019251 C29,6.55237094 29.4509752,7 29.990778,7 L34.009222,7 C34.5564136,7 35,6.55628335 35,6.00019251 L35,2.99980749 C35,2.44762906 34.5490248,2 34.009222,2 L29.990778,2 C29.4435864,2 29,2.44371665 29,2.99980749 Z M34.009222,3 C33.9984093,3 34,6.00019251 34,6.00019251 C34,6.00406733 29.990778,6 29.990778,6 C30.0015907,6 30,2.99980749 30,2.99980749 C30,2.99593267 34.009222,3 34.009222,3 Z"
												id="Rectangle-18"></path>
									</g>
									<g id="selector" mask="url(#mask-2)" fill="#A6E22D">
										<g transform="translate(12.000000, 12.000000)">
											<path
													d="M0,1.00292933 L0,5.99707067 C0,6.55097324 0.444630861,7 1.00087166,7 L14.9991283,7 C15.5518945,7 16,6.56211865 16,5.99707067 L16,1.00292933 C16,0.449026756 15.5553691,0 14.9991283,0 L1.00087166,0 C0.448105505,0 0,0.437881351 0,1.00292933 Z M14.9991283,1 C15.0008847,1 15,5.99707067 15,5.99707067 C15,6.00471541 1.00087166,6 1.00087166,6 C0.999115311,6 1,1.00292933 1,1.00292933 C1,0.995284586 14.9991283,1 14.9991283,1 Z"></path>
										</g>
									</g>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>align-self: baseline;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="item" transform="translate(-27.000000, -687.000000)">
								<g id="align-self_baseline" transform="translate(27.000000, 687.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<path
											d="M2,2.99895656 L2,4.00104344 C2,4.55275191 2.4463114,5 2.99754465,5 L10.0024554,5 C10.553384,5 11,4.55733967 11,4.00104344 L11,2.99895656 C11,2.44724809 10.5536886,2 10.0024554,2 L2.99754465,2 C2.44661595,2 2,2.44266033 2,2.99895656 Z M10.0024554,3 C10.0009345,3 10,4.00104344 10,4.00104344 C10,4.00307541 2.99754465,4 2.99754465,4 C2.99906549,4 3,2.99895656 3,2.99895656 C3,2.99692459 10.0024554,3 10.0024554,3 Z"
											id="Rectangle-14" fill="#75715E" mask="url(#mask-2)"></path>
									<path
											d="M29,2.99980749 L29,6.00019251 C29,6.55237094 29.4509752,7 29.990778,7 L34.009222,7 C34.5564136,7 35,6.55628335 35,6.00019251 L35,2.99980749 C35,2.44762906 34.5490248,2 34.009222,2 L29.990778,2 C29.4435864,2 29,2.44371665 29,2.99980749 Z M34.009222,3 C33.9984093,3 34,6.00019251 34,6.00019251 C34,6.00406733 29.990778,6 29.990778,6 C30.0015907,6 30,2.99980749 30,2.99980749 C30,2.99593267 34.009222,3 34.009222,3 Z"
											id="Rectangle-17" fill="#75715E" mask="url(#mask-2)"></path>
									<path
											d="M12,8.00292933 L12,12.9970707 C12,13.5509732 12.4446309,14 13.0008717,14 L26.9991283,14 C27.5518945,14 28,13.5621186 28,12.9970707 L28,8.00292933 C28,7.44902676 27.5553691,7 26.9991283,7 L13.0008717,7 C12.4481055,7 12,7.43788135 12,8.00292933 Z M26.9991283,8 C27.0008847,8 27,12.9970707 27,12.9970707 C27,13.0047154 13.0008717,13 13.0008717,13 C12.9991153,13 13,8.00292933 13,8.00292933 C13,7.99528459 26.9991283,8 26.9991283,8 Z"
											id="selector" fill="#A6E22D" mask="url(#mask-2)"></path>
									<path d="M2,9.5 L35,9.5" id="value" stroke="#66D9EF" mask="url(#mask-2)"></path>
									<polygon id="value" fill="#66D9EF" mask="url(#mask-2)" points="2 10 35 10 35 9 2 9"></polygon>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="row">
					<div>align-self: stretch;</div>
					<svg width="74px" height="42px" viewBox="0 0 37 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<rect id="path-1" x="0" y="0" width="37" height="21"></rect>
						</defs>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="item" transform="translate(-27.000000, -657.000000)">
								<g id="align-self_stretch" transform="translate(27.000000, 657.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<use id="mask" xlink:href="#path-1"></use>
									<g id="elements" mask="url(#mask-2)" fill="#75715E">
										<path
												d="M2,2.99895656 L2,4.00104344 C2,4.55275191 2.4463114,5 2.99754465,5 L10.0024554,5 C10.553384,5 11,4.55733967 11,4.00104344 L11,2.99895656 C11,2.44724809 10.5536886,2 10.0024554,2 L2.99754465,2 C2.44661595,2 2,2.44266033 2,2.99895656 Z M10.0024554,3 C10.0009345,3 10,4.00104344 10,4.00104344 C10,4.00307541 2.99754465,4 2.99754465,4 C2.99906549,4 3,2.99895656 3,2.99895656 C3,2.99692459 10.0024554,3 10.0024554,3 Z"
												id="Rectangle-16"></path>
										<path
												d="M29,2.99980749 L29,6.00019251 C29,6.55237094 29.4509752,7 29.990778,7 L34.009222,7 C34.5564136,7 35,6.55628335 35,6.00019251 L35,2.99980749 C35,2.44762906 34.5490248,2 34.009222,2 L29.990778,2 C29.4435864,2 29,2.44371665 29,2.99980749 Z M34.009222,3 C33.9984093,3 34,6.00019251 34,6.00019251 C34,6.00406733 29.990778,6 29.990778,6 C30.0015907,6 30,2.99980749 30,2.99980749 C30,2.99593267 34.009222,3 34.009222,3 Z"
												id="Rectangle-19"></path>
									</g>
									<g id="selector" mask="url(#mask-2)" fill="#A6E22D">
										<g transform="translate(12.000000, 2.000000)">
											<path
													d="M0,0.999960201 L0,16.0000398 C0,16.5523026 0.444630861,17 1.00087166,17 L14.9991283,17 C15.5518945,17 16,16.5452911 16,16.0000398 L16,0.999960201 C16,0.447697432 15.5553691,0 14.9991283,0 L1.00087166,0 C0.448105505,0 0,0.454708934 0,0.999960201 Z M14.9991283,1 C15.0015506,1 15,16.0000398 15,16.0000398 C15,15.9963036 1.00087166,16 1.00087166,16 C0.998449432,16 1,0.999960201 1,0.999960201 C1,1.00369637 14.9991283,1 14.9991283,1 Z"></path>
										</g>
									</g>
								</g>
							</g>
						</g>
					</svg>
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
