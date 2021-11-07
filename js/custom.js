// @ts-check
(function () {
  const interactiveFlexContainerPlaygrounds = document.querySelectorAll(
    '.interactive-playground.flex-container'
  );

  interactiveFlexContainerPlaygrounds.forEach((playground) => {
    playground.addEventListener('click', flexContainerPlayground);
  });

  const interactiveFlexItemPlaygrounds = document.querySelectorAll(
    '.interactive-playground.flex-item'
  );

  interactiveFlexItemPlaygrounds.forEach((playground) => {
    playground.addEventListener('click', flexItemPlayground);
  });

  /**
   * @type {Element}
   */
  const directionalityRadioGroup = document.querySelector(
    '[name="js-directionality-radio-group"]'
  );

  directionalityRadioGroup.addEventListener('change', (event) => {
    /**
     * @type {string}
     */
    // @ts-ignore
    const directionality = event.target.value;

    updateDirectionality(directionality);
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

    /**
     * @type {HTMLDivElement}
     */
    // @ts-ignore
    const playgroundContainer = event.currentTarget;

    const buttons = [...playgroundContainer.querySelectorAll('button')];
    buttons.forEach((button) => button.classList.remove('selected'));

    /**
     * @type {HTMLButtonElement}
     */
    // @ts-ignore
    const selectedButton = event.target;
    selectedButton.classList.add('selected');

    const selectedButtonDataClass = selectedButton.dataset.jsClass;
    const flexboxContainer =
      playgroundContainer.querySelector('.flexbox-container');

    flexboxContainer.className = 'flexbox-container js-flexbox-container';
    flexboxContainer.classList.add(selectedButtonDataClass);
  }

  /**
   * @param {Event} event
   */
  function flexItemPlayground(event) {
    // @ts-ignore
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }

    /**
     * @type {HTMLDivElement}
     */
    // @ts-ignore
    const playgroundContainer = event.currentTarget;

    const buttons = [...playgroundContainer.querySelectorAll('button')];
    buttons.forEach((button) => button.classList.remove('selected'));

    /**
     * @type {HTMLButtonElement}
     */
    // @ts-ignore
    const selectedButton = event.target;
    selectedButton.classList.add('selected');

    const selectedButtonDataClass = selectedButton.dataset.jsClass;
    const secondElement = playgroundContainer.querySelector(
      '.flexbox-container > div:nth-child(2)'
    );

    secondElement.className = '';
    secondElement.classList.add(selectedButtonDataClass);
  }

  /**
   * @param {string} selectedDirectionality
   */
  function updateDirectionality(selectedDirectionality) {
    /**
     * @type {NodeListOf<HTMLDivElement>}
     */
    const flexboxContainers = document.querySelectorAll(
      '.js-flexbox-container'
    );
    flexboxContainers.forEach(
      (element) => (element.dir = selectedDirectionality)
    );

    /**
     * @type {NodeListOf<HTMLElement>}
     */
    const directionalityCodeContainers = document.querySelectorAll(
      '.js-directionality-code'
    );
    directionalityCodeContainers.forEach(
      (element) => (element.innerHTML = `dir="${selectedDirectionality}"`)
    );
  }
})();
