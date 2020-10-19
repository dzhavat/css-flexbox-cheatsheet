// @ts-check
(function() {
  // const vscode = acquireVsCodeApi();

  const interactiveFlexContainerPlaygrounds = document.querySelectorAll('.interactive-playground.flex-container');

  interactiveFlexContainerPlaygrounds.forEach(playground => {
    playground.addEventListener('click', flexContainerPlayground);
  });

  const interactiveFlexItemPlaygrounds = document.querySelectorAll('.interactive-playground.flex-item');

  interactiveFlexItemPlaygrounds.forEach(playground => {
    playground.addEventListener('click', flexItemPlayground);
  });

  /**
   * @type NodeListOf<HTMLInputElement>
   */
  const directionalityInputs = document.querySelectorAll('input[name="directionality"]');

  directionalityInputs.forEach(input => {
    input.addEventListener('click', updateDirectionality);
  });

  /**
   * 
   * @param {Event} event 
   */
  function flexContainerPlayground(event) {
    // @ts-ignore
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }

    /** @type {HTMLDivElement} */
    // @ts-ignore
    const playgroundContainer = event.currentTarget;

    const buttons = [...playgroundContainer.querySelectorAll('button')];
    buttons.forEach(button => button.classList.remove('selected'));

    /** @type {HTMLButtonElement} */
    // @ts-ignore
    const selectedButton = event.target;
    selectedButton.classList.add('selected');

    const selectedButtonDataClass = selectedButton.dataset.jsClass;
    const flexboxContainer = playgroundContainer.querySelector('.flexbox-container');

    flexboxContainer.className = 'flexbox-container';
    flexboxContainer.classList.add(selectedButtonDataClass);
  }

  /**
   * 
   * @param {Event} event 
   */
  function flexItemPlayground(event) {
    // @ts-ignore
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }

    /** @type {HTMLDivElement} */
    // @ts-ignore
    const playgroundContainer = event.currentTarget;

    const buttons = [...playgroundContainer.querySelectorAll('button')];
    buttons.forEach(button => button.classList.remove('selected'));

    /** @type {HTMLButtonElement} */
    // @ts-ignore
    const selectedButton = event.target;
    selectedButton.classList.add('selected');

    const selectedButtonDataClass = selectedButton.dataset.jsClass;
    const secondElement = playgroundContainer.querySelector('.flexbox-container > div:nth-child(2)');

    secondElement.className = '';
    secondElement.classList.add(selectedButtonDataClass);
  }

  /**
   * 
   * @param {Event} event 
   */
  function updateDirectionality(event) {
    let selectedDirectionality = [...directionalityInputs].find(input => input.checked).value;

    /** @type NodeListOf<HTMLDivElement> */
    const flexboxContainers = document.querySelectorAll('.js-flexbox-container');
    flexboxContainers.forEach(element => element.dir = selectedDirectionality);

    /** @type NodeListOf<HTMLElement> */
    const directionalityCodeContainers = document.querySelectorAll('.js-directionality-code');
    directionalityCodeContainers.forEach(element => element.innerHTML = `dir="${selectedDirectionality}"`);
  }
}());