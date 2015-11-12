'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _connect = require('./connect');

var _connect2 = _interopRequireDefault(_connect);

var _storePlugin = require('./storePlugin');

var _storePlugin2 = _interopRequireDefault(_storePlugin);

exports['default'] = { connect: _connect2['default'], storePlugin: _storePlugin2['default'] };
module.exports = exports['default'];