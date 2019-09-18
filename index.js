var Typeson = require('typeson');
var structuredCloningThrowing = require('typeson-registry/dist/presets/structured-cloning-throwing');

// http://stackoverflow.com/a/33268326/786644 - works in browser, worker, and Node.js
var TSON = new Typeson().register(structuredCloningThrowing);

function realisticStructuredClone(obj) {
    return TSON.revive(TSON.encapsulate(obj));
}

module.exports = realisticStructuredClone;
