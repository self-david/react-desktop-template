# React Desktop template

This template is the basis for building desktop applications using electron and React, transpiled by webpack.

![Screenshot](./resources/documentation/app.png 'Screenshot')

## How to get started

download the project
```
git clone https://github.com/self-david/react-desktop-template
```

You must first install all the required dependencies

```
yarn
```
or
```
npm install
```

to run the project just type the following in the terminal

```
npm run dev
```
or
```
yarn dev
```

## Build

when you want to generate the binary to distribute you just have to do the following,at the moment I have only tried with win, so you can do a quick search and see how to generate the binaries for lin and mac

```
yarn deploy:win
```
or
```
npm run deploy:win
```

## Features

* if you want to build a desktop application, but you have only worked with web, this template will be very useful, since it works under react
* the application is borderless, so you should not worry because it does not look modern
* a builder was built to use the menubar in a simple way, you just have to add your options to `./builders/menubar.json` and create a function with the same name in the file `./functions/MenuActions.js`
* It has a configuration file to save the state of the application, you can find it in `builders/BuilderConfig.js`, with this you can maintain the state of the application in a simple way, the state is saved in the root `./config. json`

## Included frameworks

* [react](https://reactjs.org/)
* [electron](https://www.electronjs.org/)
* [electron-builder](https://www.electron.build/)  (for packaging up your app)
* [eslint](https://eslint.org/) (with [standard](https://www.npmjs.com/package/eslint-config-standard) preset and some other rules added by me)
* [prettier](https://prettier.io/)
* [styled-components](https://styled-components.com/)
* [babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/) (with [webpack-dev-server](https://github.com/webpack/webpack-dev-server))


## Contributors

* [self-david](https://github.com/self-david)


If you are interested in making a contribution, or find an error, do not hesitate to clone the repository and make a `pull requests`


## Licencia

[MIT](./LICENCE)
