(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('dekuRedux', ['exports'], factory) :
    (factory((global.dekuRedux = {})));
}(this, function (exports) { 'use strict';

    var babelHelpers_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };

    var babelHelpers_extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    var babelHelpers_toConsumableArray = function (arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

        return arr2;
      } else {
        return Array.from(arr);
      }
    };


    function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports), module.exports; }

    /**
     * Applies a function to every key-value pair inside an object.
     *
     * @param {Object} obj The source object.
     * @param {Function} fn The mapper function that receives the value and the key.
     * @returns {Object} A new object that contains the mapped values for the keys.
     */
    function mapValues(obj, fn) {
      return Object.keys(obj).reduce(function (result, key) {
        result[key] = fn(obj[key], key);
        return result;
      }, {});
    }

    function bindActionCreator(actionCreator, dispatch) {
      return function () {
        return dispatch(actionCreator.apply(undefined, arguments));
      };
    }

    /**
     * Turns an object whose values are action creators, into an object with the
     * same keys, but with every function wrapped into a `dispatch` call so they
     * may be invoked directly. This is just a convenience method, as you can call
     * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
     *
     * For convenience, you can also pass a single function as the first argument,
     * and get a function in return.
     *
     * @param {Function|Object} actionCreators An object whose values are action
     * creator functions. One handy way to obtain it is to use ES6 `import * as`
     * syntax. You may also pass a single function.
     *
     * @param {Function} dispatch The `dispatch` function available on your Redux
     * store.
     *
     * @returns {Function|Object} The object mimicking the original object, but with
     * every action creator wrapped into the `dispatch` call. If you passed a
     * function as `actionCreators`, the return value will also be a single
     * function.
     */
    function bindActionCreators(actionCreators, dispatch) {
      if (typeof actionCreators === 'function') {
        return bindActionCreator(actionCreators, dispatch);
      }

      if ((typeof actionCreators === 'undefined' ? 'undefined' : babelHelpers_typeof(actionCreators)) !== 'object' || actionCreators === null || actionCreators === undefined) {
        // eslint-disable-line no-eq-null
        throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : babelHelpers_typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
      }

      return mapValues(actionCreators, function (actionCreator) {
        return bindActionCreator(actionCreator, dispatch);
      });
    }

    var index$3 = __commonjs(function (module) {
    /*!
     * is-primitive <https://github.com/jonschlinkert/is-primitive>
     *
     * Copyright (c) 2014-2015, Jon Schlinkert.
     * Licensed under the MIT License.
     */

    'use strict';

    // see http://jsperf.com/testing-value-is-primitive/7

    module.exports = function isPrimitive(value) {
      return value == null || typeof value !== 'function' && (typeof value === 'undefined' ? 'undefined' : babelHelpers_typeof(value)) !== 'object';
    };
    });

    var require$$0$1 = (index$3 && typeof index$3 === 'object' && 'default' in index$3 ? index$3['default'] : index$3);

    var index = __commonjs(function (module) {
    /*!
     * is-equal-shallow <https://github.com/jonschlinkert/is-equal-shallow>
     *
     * Copyright (c) 2015, Jon Schlinkert.
     * Licensed under the MIT License.
     */

    'use strict';

    var isPrimitive = require$$0$1;

    module.exports = function isEqual(a, b) {
      if (!a && !b) {
        return true;
      }
      if (!a && b || a && !b) {
        return false;
      }

      var numKeysA = 0,
          numKeysB = 0,
          key;
      for (key in b) {
        numKeysB++;
        if (!isPrimitive(b[key]) || !a.hasOwnProperty(key) || a[key] !== b[key]) {
          return false;
        }
      }
      for (key in a) {
        numKeysA++;
      }
      return numKeysA === numKeysB;
    };
    });

    var shallowEquals = (index && typeof index === 'object' && 'default' in index ? index['default'] : index);

    var index$2 = __commonjs(function (module) {
    /*!
     * isobject <https://github.com/jonschlinkert/isobject>
     *
     * Copyright (c) 2014-2015, Jon Schlinkert.
     * Licensed under the MIT License.
     */

    'use strict';

    module.exports = function isObject(val) {
      return val != null && (typeof val === 'undefined' ? 'undefined' : babelHelpers_typeof(val)) === 'object' && !Array.isArray(val);
    };
    });

    var require$$0 = (index$2 && typeof index$2 === 'object' && 'default' in index$2 ? index$2['default'] : index$2);

    var index$1 = __commonjs(function (module) {
    /*!
     * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
     *
     * Copyright (c) 2014-2015, Jon Schlinkert.
     * Licensed under the MIT License.
     */

    'use strict';

    var isObject = require$$0;

    function isObjectObject(o) {
      return isObject(o) === true && Object.prototype.toString.call(o) === '[object Object]';
    }

    module.exports = function isPlainObject(o) {
      var ctor, prot;

      if (isObjectObject(o) === false) return false;

      // If has modified constructor
      ctor = o.constructor;
      if (typeof ctor !== 'function') return false;

      // If has modified prototype
      prot = ctor.prototype;
      if (isObjectObject(prot) === false) return false;

      // If constructor does not have an Object-specific method
      if (prot.hasOwnProperty('isPrototypeOf') === false) {
        return false;
      }

      // Most likely a plain Object
      return true;
    };
    });

    var isPlainObject = (index$1 && typeof index$1 === 'object' && 'default' in index$1 ? index$1['default'] : index$1);

    var invariant = __commonjs(function (module) {
    /**
     * Copyright 2013-2015, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     *
     * @providesModule invariant
     */

    'use strict';

    /**
     * Use invariant() to assert state which your program assumes to be true.
     *
     * Provide sprintf-style format (only %s is supported) and arguments
     * to provide information about what broke and what you were
     * expecting.
     *
     * The invariant message will be stripped in production, but the invariant
     * will remain to ensure logic does not differ in production.
     */

    var __DEV__ = process.env.NODE_ENV !== 'production';

    var invariant = function invariant(condition, format, a, b, c, d, e, f) {
      if (__DEV__) {
        if (format === undefined) {
          throw new Error('invariant requires an error message argument');
        }
      }

      if (!condition) {
        var error;
        if (format === undefined) {
          error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
          }));
        }

        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
      }
    };

    module.exports = invariant;
    });

    var invariant$1 = (invariant && typeof invariant === 'object' && 'default' in invariant ? invariant['default'] : invariant);

    var defaultMapStateToProps = function defaultMapStateToProps() {
        return {};
    };
    var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
        return { dispatch: dispatch };
    };
    var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
        return babelHelpers_extends({}, parentProps, stateProps, dispatchProps);
    };

    var wrapActionCreators = function wrapActionCreators(actionCreators) {
        return function (dispatch) {
            return bindActionCreators(actionCreators, dispatch);
        };
    };

    function connect() {
        var mapStateToProps = arguments.length <= 0 || arguments[0] === undefined ? defaultMapStateToProps : arguments[0];
        var mapDispatchToProps = arguments.length <= 1 || arguments[1] === undefined ? defaultMapDispatchToProps : arguments[1];
        var mergeProps = arguments.length <= 2 || arguments[2] === undefined ? defaultMergeProps : arguments[2];

        if (isPlainObject(mapDispatchToProps)) {
            mapDispatchToProps = wrapActionCreators(mapDispatchToProps);
        }

        var mappedStateUseProps = mapStateToProps.length > 1;
        var mappedDispatchUseProps = mapDispatchToProps.length > 1;

        var computeStateProps = function computeStateProps(props) {
            var state = props.store.getState();
            var stateProps = mapStateToProps(state, props);

            invariant$1(isPlainObject(stateProps), '[deku-redux][connect] mapStateToProps must return an object. Instead received %s', stateProps);

            return stateProps;
        };

        var computeDispatchProps = function computeDispatchProps(props) {
            var dispatch = props.store.dispatch;
            var dispatchProps = mapDispatchToProps(dispatch, props);

            invariant$1(isPlainObject(dispatchProps), '[deku-redux][connect] mapDispatchToProps must return an object. Instead received %s', dispatchProps);

            return dispatchProps;
        };

        return function connectWrapper(Component) {
            var connectRegistry = {};
            var getStateProps = function getStateProps(id) {
                return connectRegistry[id] ? connectRegistry[id].stateProps : null;
            };
            var setStateProps = function setStateProps(id, stateProps) {
                return connectRegistry[id].stateProps = stateProps;
            };
            var getDispatchProps = function getDispatchProps(id) {
                return connectRegistry[id] ? connectRegistry[id].dispatchProps : null;
            };
            var setDispatchProps = function setDispatchProps(id, dispatchProps) {
                return connectRegistry[id].dispatchProps = dispatchProps;
            };

            var ConnectedComponent = {
                propTypes: {
                    store: { source: 'store' },
                    storeState: { source: 'storeState' }
                },

                beforeMount: function beforeMount(_ref, elm, setState) {
                    var id = _ref.id;
                    var props = _ref.props;

                    invariant$1(props.store, '[deku-redux][connect] Could not find store. Did you use `storePlugin` on your deku tree?');
                    invariant$1(props.store.getState && props.store.subscribe && props.store.subscribe, '[deku-redux][connect] Could not recognise store. Did you use `storePlugin` with a valid redux store?');

                    connectRegistry[id] = {};
                    setStateProps(id, computeStateProps(props));
                    setDispatchProps(id, computeDispatchProps(props));
                },
                shouldUpdate: function shouldUpdate(_ref2, nextProps) {
                    var id = _ref2.id;
                    var props = _ref2.props;

                    var storeChanged = nextProps.storeState !== props.storeState;
                    var propsChanged = !shallowEquals(nextProps, props);

                    var computeNewStateProps = storeChanged || propsChanged && mappedStateUseProps;
                    var computeNewDispatchProps = propsChanged && mappedDispatchUseProps;

                    var statePropsChanged = false;
                    var dispatchPropsChanged = false;

                    if (computeNewStateProps) {
                        var _stateProps = computeStateProps(props);
                        statePropsChanged = !shallowEquals(_stateProps, getStateProps(id));
                        if (statePropsChanged) {
                            setStateProps(id, _stateProps);
                        }
                    }

                    if (computeNewDispatchProps) {
                        var dispatchProps = computeDispatchProps(props);
                        dispatchPropsChanged = !shallowEquals(dispatchProps, getDispatchProps(id));
                        if (dispatchPropsChanged) {
                            setDispatchProps(id, stateProps);
                        }
                    }

                    return propsChanged || statePropsChanged || dispatchPropsChanged;
                },
                beforeUnmount: function beforeUnmount(_ref3) {
                    var id = _ref3.id;

                    connectRegistry[id] = undefined;
                },
                render: function render(_ref4) {
                    var id = _ref4.id;
                    var props = _ref4.props;

                    // TODO: use _.omit or similar
                    var parentProps = Object.keys(props).filter(function (prop) {
                        return prop !== 'store' || prop !== 'storeState';
                    }).reduce(function (acc, prop) {
                        acc[prop] = props[prop];
                        return acc;
                    }, {});

                    var componentProps = mergeProps(parentProps, getStateProps(id), getDispatchProps(id));

                    invariant$1(isPlainObject(componentProps), '[deku-redux][connect] `mergeProps` function didn\'t return a plain object.');

                    // <Component {...componentProps} />
                    return { type: Component, children: props.children, attributes: componentProps };
                }
            };

            return ConnectedComponent;
        };
    }

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

    exports.connect = connect;
    exports.storePlugin = storePlugin;

}));