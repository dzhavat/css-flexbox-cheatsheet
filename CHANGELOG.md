# Changelog

## 3.0.0 (2020-09-09)

#### Added

- Interactive demos to most properties
- Adopt `asWebviewUri` API so the extension will work properly in future versions of VS Code
- Content security policy (CSP) when loading local resources

#### Changed

- Set the minimum supported VS Code version to 1.44.0
- Update dependencies

#### Fixed

- Decrease package size

## 2.0.1 (2020-03-19)

#### Fixed

- Fix broken image in hover popup

#### Changed

- Update dependencies

## 2.0.0 (2020-03-16)

#### Added

- Show an image for each flexbox property in the hover popup

#### Changed

- Set the minimum supported VS Code version to 1.33.0

## 1.2.1 (2019-11-16)

#### Changed

- Set the minimum supported VS Code version to 1.31.0
- Add title to command link
- Update resources

## 1.2.0 (2019-09-23)

#### Added

- Adjust colors based on the selected theme
- Use the user’s preferred font family

## 1.1.0 (2019-09-16)

#### Added

- Add icon before `flex` value
- Add `space-evently` to `justify-content`
- Add two more links to resources

#### Security

- Add [Content security policy](https://code.visualstudio.com/api/extension-guides/webview#content-security-policy)

## 1.0.0 (2019-09-04)

- Initial release

#### Added

The cheatsheet can be opened in two ways:

- Press `Ctrl+Shift+P` (Win, Linux) / `Cmd+Shift+P` (Mac) and search for the `Open Flexbox Cheatsheet` command.
- Hover any `display: flex` declaration and click the `Open Flexbox Cheatsheet` link in the popup.
