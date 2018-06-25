# plastic-diff-redirect

Client side build selection for Polymer, like prpl-server-node, but on client

Lllows you to serve different Polymer builds based on the capability of the browser, even on a static server.  The function chooses a 'build' from an array of 'builds' in polymer.json which is compatable with the current browser (like prpl-server-node) and redirects the client to that build.

## Install
Install with `npm` or `yarn`:
```
npm install --save plastic-diff-redirect
```
```
yarn add plastic-diff-redirect
```
## Usage
### Folder Structure
Your folder structure will look something like this if you use `basePath` in each build definition (see polymer.json section below):
```
/
|--index.html (copy sample-index.html)
|--polymer.json (copy from your polymer project)
|--build (copy in your polymer build folder)
   |--build1
   |--build2
   |--build3
```
or if you use `autoBasePath` in the root of `polymer.json`:
```
/
|--index.html (copy sample-index.html)
|--polymer.json (copy from your polymer project)
|--build1 (copy all the folders inside your polymer project build folder)
|--build2
|--build3
```
### index.html
Create an index.html file in the root of your project (you can copy sample-index.html):
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes">
    <title></title>
    <script src="node_modules/ua-parser-js/src/ua-parser.js"></script>
    <script src="node_modules/plastic-diff-redirect/plastic-diff-redirect.js"></script>
</head>
<body>    
</body>
</html>
```
### polymer.json
You will copy the polymer.json file from your project.  You may need to use the `basePath` property for each build if you are using the first folder structure above **or** if you will be serving from other than the root folder (e.g. `https://someone.github.io/my-project-name`).  If you are not using `basePath` in each build set `autoBasePath` to `true`.

See [polymer.json specification](https://www.polymer-project.org/3.0/docs/tools/polymer-json) for more details.

#### Example
For a github project page for `some-project-name`
```
"builds": [
    {
      "name": "esm-bundled",
      "browserCapabilities": ["es2015","modules"],
      "js": { "minify": true },
      "css": { "minify": true },
      "html": {"minify": true },
      "bundle": true,
      "addServiceWorker": true,
      "basePath": "some-project-name/build/esm-bundled/"
    },
    {
      "name": "es6-bundled",
      "browserCapabilities": ["es2015"],
      "js": {
        "minify": true,
        "transformModulesToAmd": true,
        "compile": "es2015" // new feature, see https://github.com/Polymer/tools/pull/270
      },
      "css": { "minify": true },
      "html": { "minify": true },
      "bundle": true,
      "addServiceWorker": true,
      "basePath": "some-project-name/build/es6-bundled/"
    },
    {
      "name": "es5-bundled",
      "js": {
        "minify": true,
        "compile": true,
        "transformModulesToAmd": true
      },
      "css": { "minify": true },
      "html": { "minify": true },
      "bundle": true,
      "addServiceWorker": true,
      "basePath": "some-project-name/build/es5-bundled/"
    }
```
### Thats It
When the user hits the index.html file they will be redirected to the build folder matching their browser capabilities.

## About the Code
The code here is based on tools from the Polymer team:

* browser-capabilities  https://github.com/Polymer/tools/tree/master/packages/browser-capabilities
* prpl-server-node  https://github.com/Polymer/prpl-server-node

The functions used were just modified to run in the browser and downleveled to ES5.

## Issues
Problems or questions can be submitted as issue in the github repository.  Every effort is made to respond the same day.

## Contributions
Contributions via pull request are always welcome and appreciated.

## License
MIT
