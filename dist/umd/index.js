(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', './connect', './storePlugin'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('./connect'), require('./storePlugin'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.connect, global.storePlugin);
    global.index = mod.exports;
  }
})(this, function (exports, module, _connect, _storePlugin) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _connect2 = _interopRequireDefault(_connect);

  var _storePlugin2 = _interopRequireDefault(_storePlugin);

  module.exports = { connect: _connect2['default'], storePlugin: _storePlugin2['default'] };
});