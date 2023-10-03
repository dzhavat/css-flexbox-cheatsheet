# Changelog

## [3.3.4](https://github.com/dzhavat/css-flexbox-cheatsheet/compare/3.3.3...3.3.4) - 2023-10-03

### Changed

- Set the minimum supported VS Code version to 1.80.0
- Update dependencies

## [3.3.3](https://github.com/dzhavat/css-flexbox-cheatsheet/compare/3.3.2...3.3.3) - 2023-06-10

### Changed

- Set the minimum supported VS Code version to 1.75.0
- Remove unnecessary activation event
- Update dependencies

## [3.3.2](https://github.com/dzhavat/css-flexbox-cheatsheet/compare/3.3.1...3.3.2) - 2023-01-04

### Added

- New resource in the _Resources_ section

### Changed

- Set the minimum supported VS Code version to 1.69.0
- Update dependencies

## [3.3.1](https://github.com/dzhavat/css-flexbox-cheatsheet/compare/3.3.0...3.3.1) - 2021-12-20

### Changed

- Fix a typo
- Set the minimum supported VS Code version to 1.58.0
- Update dependencies

## [3.3.0](https://github.com/dzhavat/css-flexbox-cheatsheet/compare/3.2.4...3.3.0) - 2021-11-08

### Added

- Add `@vscode/webview-ui-toolkit` package to the project

### Changed

- Use `radio-group` and `radio` elements from “Webview UI Toolkit”
- Set the minimum supported VS Code version to 1.57.0
- Update dependencies

## [3.2.4](https://github.com/dzhavat/css-flexbox-cheatsheet/compare/3.2.3...3.2.4) - 2021-10-27

### Changed

- Set the minimum supported VS Code version to 1.56.0
- Update dependencies

## [3.2.3](https://github.com/dzhavat/css-flexbox-cheatsheet/compare/3.2.2...3.2.3) - 2021-06-17

### Changed

- Set the minimum supported VS Code version to 1.52.0
- Update dependencies

## [3.2.2](https://github.com/dzhavat/css-flexbox-cheatsheet/compare/3.2.1...3.2.2) - 2021-02-19

### Fixed

- Fix links to demo gifs

## [3.2.1](https://github.com/dzhavat/css-flexbox-cheatsheet/compare/3.2.0...3.2.1) - 2021-02-19

### Changed

- Set the minimum supported VS Code version to 1.47.0
- Update dependencies
- Rename default git branch from `master` to `main`

## [3.2.0](https://github.com/dzhavat/css-flexbox-cheatsheet/compare/3.1.0...3.2.0) - 2020-10-29

### Added

- Keyboard shortcut to open the cheatsheet - `Ctrl + K K` (Win, Linux) / `Cmd + K K` (Mac)

## [3.1.0](https://github.com/dzhavat/css-flexbox-cheatsheet/compare/3.0.2...3.1.0) - 2020-10-21

### Added

- Support for selecting directionality to be used in the interactive playgrounds

### Changed

- Rename command title used for opening the cheatsheet from `Open Flexbox Cheatsheet` to `Open CSS Flexbox Cheatsheet`
- Migrate TSLint to ESLint

## [3.0.2](https://github.com/dzhavat/css-flexbox-cheatsheet/compare/3.0.1...3.0.2) - 2020-09-24

### Changed

- Add `dir` attribute with a value of `ltr` to each playground

### Fixed

- Update the links in the _Resources_ section

## [3.0.1](https://github.com/dzhavat/css-flexbox-cheatsheet/compare/3.0.0...3.0.1) - 2020-09-12

### Changed

- Add missing headings to property groups

## [3.0.0](https://github.com/dzhavat/css-flexbox-cheatsheet/compare/2.0.1...3.0.0) - 2020-09-09

### Added

- Interactive demos to most properties
- Adopt `asWebviewUri` API so the extension will work properly in future versions of VS Code
- Content security policy (CSP) when loading local resources

### Changed

- Set the minimum supported VS Code version to 1.44.0
- Update dependencies

### Fixed

- Decrease package size

## [2.0.1](https://github.com/dzhavat/css-flexbox-cheatsheet/compare/2.0.0...2.0.1) - 2020-03-19

### Fixed

- Fix broken image in hover popup

### Changed

- Update dependencies

## [2.0.0](https://github.com/dzhavat/css-flexbox-cheatsheet/compare/1.2.1...2.0.0) - 2020-03-16

### Added

- Show an image for each flexbox property in the hover popup

### Changed

- Set the minimum supported VS Code version to 1.33.0

## [1.2.1](https://github.com/dzhavat/css-flexbox-cheatsheet/compare/1.2.0...1.2.1) - 2019-11-16

### Changed

- Set the minimum supported VS Code version to 1.31.0
- Add title to command link
- Update resources

## [1.2.0](https://github.com/dzhavat/css-flexbox-cheatsheet/compare/1.1.0...1.2.0) - 2019-09-23

### Added

- Adjust colors based on the selected theme
- Use the user’s preferred font family

## [1.1.0](https://github.com/dzhavat/css-flexbox-cheatsheet/compare/1.0.0...1.1.0) - 2019-09-16

### Added

- Add icon before `flex` value
- Add `space-evently` to `justify-content`
- Add two more links to resources
- Add [Content security policy](https://code.visualstudio.com/api/extension-guides/webview#content-security-policy)

## [1.0.0](https://github.com/dzhavat/css-flexbox-cheatsheet/releases/tag/1.0.0) - 2019-09-04

- Initial release

### Added

The cheatsheet can be opened in two ways:

- Press `Ctrl+Shift+P` (Win, Linux) / `Cmd+Shift+P` (Mac) and search for the `Open Flexbox Cheatsheet` command.
- Hover any `display: flex` declaration and click the `Open Flexbox Cheatsheet` link in the popup.
