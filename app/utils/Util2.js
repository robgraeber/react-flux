var createStore = require('dispatchr/utils/createStore');

var Util2 = module.exports = {
    createStore: function (spec) {
        var Store = createStore(spec);
        Store.prototype.get = function (prop) {
            return this[prop];
        }
        return Store;
    }
};