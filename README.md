# Realistic Structured Clone 

![39837](https://img.shields.io/badge/compiled%20bundle-40k-yellowgreen) ![9311](https://img.shields.io/badge/gzipped%20bundle-9k-green)

This is a fork of https://github.com/dumbmatter/realistic-structured-clone with Node.js support removed in order
to bring down the bundle size in the browser. Recent versions of Node.js have a much better/faster way to do
deep clones using v8 serialize/deserialize.

This is a pure JS implementation of the [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm) (or at least something pretty close to that).

## Use

[Install through npm:](https://www.npmjs.com/package/realistic-structured-clone)

    $ npm install @mikeal/realistic-structured-clone

Then use it:

    // First load the module
    // (Use Browserify or something if you're targeting the web)
    var structuredClone = require('@mikeal/realistic-structured-clone');

    // Clone a variable (will throw a DataCloneError for invalid input)
    var clonedX = structuredClone(x);

## License

Apache 2.0
