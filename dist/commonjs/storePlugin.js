'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = storePlugin;