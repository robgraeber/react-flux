var Dispatchr = require('dispatchr')();

['./stores/ApiStore'].forEach(function (modulePath) {
    Dispatchr.registerStore(require(modulePath));
});

module.exports = new Dispatchr({});