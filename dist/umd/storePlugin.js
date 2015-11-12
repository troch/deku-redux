(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod);
        global.storePlugin = mod.exports;
    }
})(this, function (exports, module) {
    'use strict';

    var storePlugin = function storePlugin(store) {
        return function (app) {
            // TODO: check store is a store indeed
            app.set('store', store);
            app.set('storeState', store.getState());
            store.subscribe(function () {
                return app.set('storeState', store.getState());
            });
        };
    };

    module.exports = storePlugin;
});