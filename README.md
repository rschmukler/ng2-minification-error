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
open localhost:8080
```

# Breaking with minification:

edit `webpack.prod.config.js` and switch the following lines in UglifyJsPlugin.

```js
mangle: { screw_ie8 : true }, // enable me to watch me break
// mangle: false,
```

then rebuild... Make sure caching is disabled and re-open page

```
npm run build:prod
http-server dist/
open localhost:8080
```
