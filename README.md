
# Gulp

Depends on `gulp-babel` plugin: `npm install --save-dev gulp-babel`

To build, run `gulp`

See `gulpfile.js` for more details.


# Grunt

Depends on `grunt-babel` plugin: `npm install --save-dev grunt-babel`

To build, run `grunt`

See `Gruntfile.js` for more details.


# Browserify

Prerequisite: Browserify must be installed (globally).

Locally, `babelify` is required: `npm install --save-dev babelify`
This has been added to the package.json

To compile:

```
browserify main.js -t babelify --o dist/browserify.js
```

Or:

```
npm run browserify
```


# Webpack

Prerequisite: Webpack must be installed (globally).

Locally, `babel-loader` is required: `npm install --save-dev babel-loader`
This has been added to the package.json

And the compilation options have been set up in `webpack.config.js`

To compile and run:

```
webpack
```
