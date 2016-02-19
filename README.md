# ng2-minification-error

# Start

```
git clone https://github.com/rschmukler/ng2-minification-error.git
npm install
```

# No minification test:

```
npm run build:prod
http-server dist/
```

# Breaking with minification:

edit `webpack.prod.config.js` and switch the following lines in UglifyJsPlugin.

```js
mangle: { screw_ie8 : true }, // enable me to watch me break
// mangle: false,
```
