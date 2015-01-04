//uses absolutes instead of relative paths for require

var Require2 = module.exports = function(moduleName) {
    var module = require('../'+moduleName);

    if(moduleName.substring(0, 7) === 'stores/')
        return require('../Dispatcher').getStore(module);

    return module;
}