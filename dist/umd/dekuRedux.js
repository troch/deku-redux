(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define('dekuRedux', ['exports'], factory) :
	(factory((global.dekuRedux = global.dekuRedux || {})));
}(this, function (exports) { 'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}

	function interopDefault(ex) {
		return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _overArg = createCommonjsModule(function (module) {
	  /**
	   * Creates a function that invokes `func` with its first argument transformed.
	   *
	   * @private
	   * @param {Function} func The function to wrap.
	   * @param {Function} transform The argument transform.
	   * @returns {Function} Returns the new function.
	   */
	  function overArg(func, transform) {
	    return function (arg) {
	      return func(transform(arg));
	    };
	  }

	  module.exports = overArg;
	});

	var _overArg$1 = interopDefault(_overArg);

var require$$0 = Object.freeze({
	  default: _overArg$1
	});

	var _getPrototype = createCommonjsModule(function (module) {
	  var overArg = interopDefault(require$$0);

	  /* Built-in method references for those with the same name as other `lodash` methods. */
	  var nativeGetPrototype = Object.getPrototypeOf;

	  /**
	   * Gets the `[[Prototype]]` of `value`.
	   *
	   * @private
	   * @param {*} value The value to query.
	   * @returns {null|Object} Returns the `[[Prototype]]`.
	   */
	  var getPrototype = overArg(nativeGetPrototype, Object);

	  module.exports = getPrototype;
	});

	var _getPrototype$1 = interopDefault(_getPrototype);

var require$$2$1 = Object.freeze({
	  default: _getPrototype$1
	});

	var _isHostObject = createCommonjsModule(function (module) {
	  /**
	   * Checks if `value` is a host object in IE < 9.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	   */
	  function isHostObject(value) {
	    // Many host objects are `Object` objects that can coerce to strings
	    // despite having improperly defined `toString` methods.
	    var result = false;
	    if (value != null && typeof value.toString != 'function') {
	      try {
	        result = !!(value + '');
	      } catch (e) {}
	    }
	    return result;
	  }

	  module.exports = isHostObject;
	});

	var _isHostObject$1 = interopDefault(_isHostObject);

var require$$1$1 = Object.freeze({
	  default: _isHostObject$1
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	};

	var _extends = Object.assign || function (target) {
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

	var isObjectLike = createCommonjsModule(function (module) {
	  /**
	   * Checks if `value` is object-like. A value is object-like if it's not `null`
	   * and has a `typeof` result of "object".
	   *
	   * @static
	   * @memberOf _
	   * @since 4.0.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	   * @example
	   *
	   * _.isObjectLike({});
	   * // => true
	   *
	   * _.isObjectLike([1, 2, 3]);
	   * // => true
	   *
	   * _.isObjectLike(_.noop);
	   * // => false
	   *
	   * _.isObjectLike(null);
	   * // => false
	   */
	  function isObjectLike(value) {
	    return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	  }

	  module.exports = isObjectLike;
	});

	var isObjectLike$1 = interopDefault(isObjectLike);



	var require$$0$1 = Object.freeze({
	  default: isObjectLike$1
	});

	var isPlainObject = createCommonjsModule(function (module) {
	  var getPrototype = interopDefault(require$$2$1),
	      isHostObject = interopDefault(require$$1$1),
	      isObjectLike = interopDefault(require$$0$1);

	  /** `Object#toString` result references. */
	  var objectTag = '[object Object]';

	  /** Used for built-in method references. */
	  var objectProto = Object.prototype;

	  /** Used to resolve the decompiled source of functions. */
	  var funcToString = Function.prototype.toString;

	  /** Used to check objects for own properties. */
	  var hasOwnProperty = objectProto.hasOwnProperty;

	  /** Used to infer the `Object` constructor. */
	  var objectCtorString = funcToString.call(Object);

	  /**
	   * Used to resolve the
	   * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	   * of values.
	   */
	  var objectToString = objectProto.toString;

	  /**
	   * Checks if `value` is a plain object, that is, an object created by the
	   * `Object` constructor or one with a `[[Prototype]]` of `null`.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.8.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a plain object,
	   *  else `false`.
	   * @example
	   *
	   * function Foo() {
	   *   this.a = 1;
	   * }
	   *
	   * _.isPlainObject(new Foo);
	   * // => false
	   *
	   * _.isPlainObject([1, 2, 3]);
	   * // => false
	   *
	   * _.isPlainObject({ 'x': 0, 'y': 0 });
	   * // => true
	   *
	   * _.isPlainObject(Object.create(null));
	   * // => true
	   */
	  function isPlainObject(value) {
	    if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
	      return false;
	    }
	    var proto = getPrototype(value);
	    if (proto === null) {
	      return true;
	    }
	    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
	  }

	  module.exports = isPlainObject;
	});

	var isPlainObject$1 = interopDefault(isPlainObject);

var require$$1 = Object.freeze({
	  default: isPlainObject$1
	});

	var ponyfill = createCommonjsModule(function (module) {
		'use strict';

		module.exports = function symbolObservablePonyfill(root) {
			var result;
			var _Symbol = root.Symbol;

			if (typeof _Symbol === 'function') {
				if (_Symbol.observable) {
					result = _Symbol.observable;
				} else {
					result = _Symbol('observable');
					_Symbol.observable = result;
				}
			} else {
				result = '@@observable';
			}

			return result;
		};
	});

	var ponyfill$1 = interopDefault(ponyfill);

var require$$0$3 = Object.freeze({
		default: ponyfill$1
	});

	var index$2 = createCommonjsModule(function (module) {
	  /* global window */
	  'use strict';

	  module.exports = interopDefault(require$$0$3)(commonjsGlobal || window || commonjsGlobal);
	});

	var index$3 = interopDefault(index$2);

var require$$0$2 = Object.freeze({
	  default: index$3
	});

	var createStore$1 = createCommonjsModule(function (module, exports) {
	  'use strict';

	  exports.__esModule = true;
	  exports.ActionTypes = undefined;
	  exports["default"] = createStore;

	  var _isPlainObject = interopDefault(require$$1);

	  var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	  var _symbolObservable = interopDefault(require$$0$2);

	  var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { "default": obj };
	  }

	  /**
	   * These are private action types reserved by Redux.
	   * For any unknown actions, you must return the current state.
	   * If the current state is undefined, you must return the initial state.
	   * Do not reference these action types directly in your code.
	   */
	  var ActionTypes = exports.ActionTypes = {
	    INIT: '@@redux/INIT'
	  };

	  /**
	   * Creates a Redux store that holds the state tree.
	   * The only way to change the data in the store is to call `dispatch()` on it.
	   *
	   * There should only be a single store in your app. To specify how different
	   * parts of the state tree respond to actions, you may combine several reducers
	   * into a single reducer function by using `combineReducers`.
	   *
	   * @param {Function} reducer A function that returns the next state tree, given
	   * the current state tree and the action to handle.
	   *
	   * @param {any} [initialState] The initial state. You may optionally specify it
	   * to hydrate the state from the server in universal apps, or to restore a
	   * previously serialized user session.
	   * If you use `combineReducers` to produce the root reducer function, this must be
	   * an object with the same shape as `combineReducers` keys.
	   *
	   * @param {Function} enhancer The store enhancer. You may optionally specify it
	   * to enhance the store with third-party capabilities such as middleware,
	   * time travel, persistence, etc. The only store enhancer that ships with Redux
	   * is `applyMiddleware()`.
	   *
	   * @returns {Store} A Redux store that lets you read the state, dispatch actions
	   * and subscribe to changes.
	   */
	  function createStore(reducer, initialState, enhancer) {
	    var _ref2;

	    if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	      enhancer = initialState;
	      initialState = undefined;
	    }

	    if (typeof enhancer !== 'undefined') {
	      if (typeof enhancer !== 'function') {
	        throw new Error('Expected the enhancer to be a function.');
	      }

	      return enhancer(createStore)(reducer, initialState);
	    }

	    if (typeof reducer !== 'function') {
	      throw new Error('Expected the reducer to be a function.');
	    }

	    var currentReducer = reducer;
	    var currentState = initialState;
	    var currentListeners = [];
	    var nextListeners = currentListeners;
	    var isDispatching = false;

	    function ensureCanMutateNextListeners() {
	      if (nextListeners === currentListeners) {
	        nextListeners = currentListeners.slice();
	      }
	    }

	    /**
	     * Reads the state tree managed by the store.
	     *
	     * @returns {any} The current state tree of your application.
	     */
	    function getState() {
	      return currentState;
	    }

	    /**
	     * Adds a change listener. It will be called any time an action is dispatched,
	     * and some part of the state tree may potentially have changed. You may then
	     * call `getState()` to read the current state tree inside the callback.
	     *
	     * You may call `dispatch()` from a change listener, with the following
	     * caveats:
	     *
	     * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	     * If you subscribe or unsubscribe while the listeners are being invoked, this
	     * will not have any effect on the `dispatch()` that is currently in progress.
	     * However, the next `dispatch()` call, whether nested or not, will use a more
	     * recent snapshot of the subscription list.
	     *
	     * 2. The listener should not expect to see all state changes, as the state
	     * might have been updated multiple times during a nested `dispatch()` before
	     * the listener is called. It is, however, guaranteed that all subscribers
	     * registered before the `dispatch()` started will be called with the latest
	     * state by the time it exits.
	     *
	     * @param {Function} listener A callback to be invoked on every dispatch.
	     * @returns {Function} A function to remove this change listener.
	     */
	    function subscribe(listener) {
	      if (typeof listener !== 'function') {
	        throw new Error('Expected listener to be a function.');
	      }

	      var isSubscribed = true;

	      ensureCanMutateNextListeners();
	      nextListeners.push(listener);

	      return function unsubscribe() {
	        if (!isSubscribed) {
	          return;
	        }

	        isSubscribed = false;

	        ensureCanMutateNextListeners();
	        var index = nextListeners.indexOf(listener);
	        nextListeners.splice(index, 1);
	      };
	    }

	    /**
	     * Dispatches an action. It is the only way to trigger a state change.
	     *
	     * The `reducer` function, used to create the store, will be called with the
	     * current state tree and the given `action`. Its return value will
	     * be considered the **next** state of the tree, and the change listeners
	     * will be notified.
	     *
	     * The base implementation only supports plain object actions. If you want to
	     * dispatch a Promise, an Observable, a thunk, or something else, you need to
	     * wrap your store creating function into the corresponding middleware. For
	     * example, see the documentation for the `redux-thunk` package. Even the
	     * middleware will eventually dispatch plain object actions using this method.
	     *
	     * @param {Object} action A plain object representing “what changed”. It is
	     * a good idea to keep actions serializable so you can record and replay user
	     * sessions, or use the time travelling `redux-devtools`. An action must have
	     * a `type` property which may not be `undefined`. It is a good idea to use
	     * string constants for action types.
	     *
	     * @returns {Object} For convenience, the same action object you dispatched.
	     *
	     * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	     * return something else (for example, a Promise you can await).
	     */
	    function dispatch(action) {
	      if (!(0, _isPlainObject2["default"])(action)) {
	        throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	      }

	      if (typeof action.type === 'undefined') {
	        throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	      }

	      if (isDispatching) {
	        throw new Error('Reducers may not dispatch actions.');
	      }

	      try {
	        isDispatching = true;
	        currentState = currentReducer(currentState, action);
	      } finally {
	        isDispatching = false;
	      }

	      var listeners = currentListeners = nextListeners;
	      for (var i = 0; i < listeners.length; i++) {
	        listeners[i]();
	      }

	      return action;
	    }

	    /**
	     * Replaces the reducer currently used by the store to calculate the state.
	     *
	     * You might need this if your app implements code splitting and you want to
	     * load some of the reducers dynamically. You might also need this if you
	     * implement a hot reloading mechanism for Redux.
	     *
	     * @param {Function} nextReducer The reducer for the store to use instead.
	     * @returns {void}
	     */
	    function replaceReducer(nextReducer) {
	      if (typeof nextReducer !== 'function') {
	        throw new Error('Expected the nextReducer to be a function.');
	      }

	      currentReducer = nextReducer;
	      dispatch({ type: ActionTypes.INIT });
	    }

	    /**
	     * Interoperability point for observable/reactive libraries.
	     * @returns {observable} A minimal observable of state changes.
	     * For more information, see the observable proposal:
	     * https://github.com/zenparsing/es-observable
	     */
	    function observable() {
	      var _ref;

	      var outerSubscribe = subscribe;
	      return _ref = {
	        /**
	         * The minimal observable subscription method.
	         * @param {Object} observer Any object that can be used as an observer.
	         * The observer object should have a `next` method.
	         * @returns {subscription} An object with an `unsubscribe` method that can
	         * be used to unsubscribe the observable from the store, and prevent further
	         * emission of values from the observable.
	         */

	        subscribe: function subscribe(observer) {
	          if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object') {
	            throw new TypeError('Expected the observer to be an object.');
	          }

	          function observeState() {
	            if (observer.next) {
	              observer.next(getState());
	            }
	          }

	          observeState();
	          var unsubscribe = outerSubscribe(observeState);
	          return { unsubscribe: unsubscribe };
	        }
	      }, _ref[_symbolObservable2["default"]] = function () {
	        return this;
	      }, _ref;
	    }

	    // When a store is created, an "INIT" action is dispatched so that every
	    // reducer returns their initial state. This effectively populates
	    // the initial state tree.
	    dispatch({ type: ActionTypes.INIT });

	    return _ref2 = {
	      dispatch: dispatch,
	      subscribe: subscribe,
	      getState: getState,
	      replaceReducer: replaceReducer
	    }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
	  }
	});

	var createStore$2 = interopDefault(createStore$1);
	var ActionTypes = createStore$1.ActionTypes;



	var require$$2 = Object.freeze({
	  default: createStore$2,
	  ActionTypes: ActionTypes
	});

	var warning = createCommonjsModule(function (module, exports) {
	  'use strict';

	  exports.__esModule = true;
	  exports["default"] = warning;
	  /**
	   * Prints a warning in the console if it exists.
	   *
	   * @param {String} message The warning message.
	   * @returns {void}
	   */
	  function warning(message) {
	    /* eslint-disable no-console */
	    if (typeof console !== 'undefined' && typeof console.error === 'function') {
	      console.error(message);
	    }
	    /* eslint-enable no-console */
	    try {
	      // This error was thrown as a convenience so that if you enable
	      // "break on all exceptions" in your console,
	      // it would pause the execution at this line.
	      throw new Error(message);
	      /* eslint-disable no-empty */
	    } catch (e) {}
	    /* eslint-enable no-empty */
	  }
	});

	var warning$1 = interopDefault(warning);

var require$$0$4 = Object.freeze({
	  default: warning$1
	});

	var combineReducers$1 = createCommonjsModule(function (module, exports) {
	  'use strict';

	  exports.__esModule = true;
	  exports["default"] = combineReducers;

	  var _createStore = interopDefault(require$$2);

	  var _isPlainObject = interopDefault(require$$1);

	  var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	  var _warning = interopDefault(require$$0$4);

	  var _warning2 = _interopRequireDefault(_warning);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { "default": obj };
	  }

	  function getUndefinedStateErrorMessage(key, action) {
	    var actionType = action && action.type;
	    var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	    return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	  }

	  function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	    var reducerKeys = Object.keys(reducers);
	    var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	    if (reducerKeys.length === 0) {
	      return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	    }

	    if (!(0, _isPlainObject2["default"])(inputState)) {
	      return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	    }

	    var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	      return !reducers.hasOwnProperty(key);
	    });

	    if (unexpectedKeys.length > 0) {
	      return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	    }
	  }

	  function assertReducerSanity(reducers) {
	    Object.keys(reducers).forEach(function (key) {
	      var reducer = reducers[key];
	      var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	      if (typeof initialState === 'undefined') {
	        throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	      }

	      var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	      if (typeof reducer(undefined, { type: type }) === 'undefined') {
	        throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	      }
	    });
	  }

	  /**
	   * Turns an object whose values are different reducer functions, into a single
	   * reducer function. It will call every child reducer, and gather their results
	   * into a single state object, whose keys correspond to the keys of the passed
	   * reducer functions.
	   *
	   * @param {Object} reducers An object whose values correspond to different
	   * reducer functions that need to be combined into one. One handy way to obtain
	   * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	   * undefined for any action. Instead, they should return their initial state
	   * if the state passed to them was undefined, and the current state for any
	   * unrecognized action.
	   *
	   * @returns {Function} A reducer function that invokes every reducer inside the
	   * passed object, and builds a state object with the same shape.
	   */
	  function combineReducers(reducers) {
	    var reducerKeys = Object.keys(reducers);
	    var finalReducers = {};
	    for (var i = 0; i < reducerKeys.length; i++) {
	      var key = reducerKeys[i];
	      if (typeof reducers[key] === 'function') {
	        finalReducers[key] = reducers[key];
	      }
	    }
	    var finalReducerKeys = Object.keys(finalReducers);

	    var sanityError;
	    try {
	      assertReducerSanity(finalReducers);
	    } catch (e) {
	      sanityError = e;
	    }

	    return function combination() {
	      var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	      var action = arguments[1];

	      if (sanityError) {
	        throw sanityError;
	      }

	      if (process.env.NODE_ENV !== 'production') {
	        var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	        if (warningMessage) {
	          (0, _warning2["default"])(warningMessage);
	        }
	      }

	      var hasChanged = false;
	      var nextState = {};
	      for (var i = 0; i < finalReducerKeys.length; i++) {
	        var key = finalReducerKeys[i];
	        var reducer = finalReducers[key];
	        var previousStateForKey = state[key];
	        var nextStateForKey = reducer(previousStateForKey, action);
	        if (typeof nextStateForKey === 'undefined') {
	          var errorMessage = getUndefinedStateErrorMessage(key, action);
	          throw new Error(errorMessage);
	        }
	        nextState[key] = nextStateForKey;
	        hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	      }
	      return hasChanged ? nextState : state;
	    };
	  }
	});

	var combineReducers$2 = interopDefault(combineReducers$1);

var require$$4 = Object.freeze({
	  default: combineReducers$2
	});

	var bindActionCreators$1 = createCommonjsModule(function (module, exports) {
	  'use strict';

	  exports.__esModule = true;
	  exports["default"] = bindActionCreators;
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

	    if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
	      throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	    }

	    var keys = Object.keys(actionCreators);
	    var boundActionCreators = {};
	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];
	      var actionCreator = actionCreators[key];
	      if (typeof actionCreator === 'function') {
	        boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	      }
	    }
	    return boundActionCreators;
	  }
	});

	var bindActionCreators$2 = interopDefault(bindActionCreators$1);



	var require$$3 = Object.freeze({
	  default: bindActionCreators$2
	});

	var compose$1 = createCommonjsModule(function (module, exports) {
	  "use strict";

	  exports.__esModule = true;
	  exports["default"] = compose;
	  /**
	   * Composes single-argument functions from right to left. The rightmost
	   * function can take multiple arguments as it provides the signature for
	   * the resulting composite function.
	   *
	   * @param {...Function} funcs The functions to compose.
	   * @returns {Function} A function obtained by composing the argument functions
	   * from right to left. For example, compose(f, g, h) is identical to doing
	   * (...args) => f(g(h(...args))).
	   */

	  function compose() {
	    for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	      funcs[_key] = arguments[_key];
	    }

	    if (funcs.length === 0) {
	      return function (arg) {
	        return arg;
	      };
	    } else {
	      var _ret = function () {
	        var last = funcs[funcs.length - 1];
	        var rest = funcs.slice(0, -1);
	        return {
	          v: function v() {
	            return rest.reduceRight(function (composed, f) {
	              return f(composed);
	            }, last.apply(undefined, arguments));
	          }
	        };
	      }();

	      if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	    }
	  }
	});

	var compose$2 = interopDefault(compose$1);



	var require$$0$5 = Object.freeze({
	  default: compose$2
	});

	var applyMiddleware$1 = createCommonjsModule(function (module, exports) {
	  'use strict';

	  exports.__esModule = true;

	  var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }return target;
	  };

	  exports["default"] = applyMiddleware;

	  var _compose = interopDefault(require$$0$5);

	  var _compose2 = _interopRequireDefault(_compose);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { "default": obj };
	  }

	  /**
	   * Creates a store enhancer that applies middleware to the dispatch method
	   * of the Redux store. This is handy for a variety of tasks, such as expressing
	   * asynchronous actions in a concise manner, or logging every action payload.
	   *
	   * See `redux-thunk` package as an example of the Redux middleware.
	   *
	   * Because middleware is potentially asynchronous, this should be the first
	   * store enhancer in the composition chain.
	   *
	   * Note that each middleware will be given the `dispatch` and `getState` functions
	   * as named arguments.
	   *
	   * @param {...Function} middlewares The middleware chain to be applied.
	   * @returns {Function} A store enhancer applying the middleware.
	   */
	  function applyMiddleware() {
	    for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	      middlewares[_key] = arguments[_key];
	    }

	    return function (createStore) {
	      return function (reducer, initialState, enhancer) {
	        var store = createStore(reducer, initialState, enhancer);
	        var _dispatch = store.dispatch;
	        var chain = [];

	        var middlewareAPI = {
	          getState: store.getState,
	          dispatch: function dispatch(action) {
	            return _dispatch(action);
	          }
	        };
	        chain = middlewares.map(function (middleware) {
	          return middleware(middlewareAPI);
	        });
	        _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);

	        return _extends({}, store, {
	          dispatch: _dispatch
	        });
	      };
	    };
	  }
	});

	var applyMiddleware$2 = interopDefault(applyMiddleware$1);

var require$$2$2 = Object.freeze({
	  default: applyMiddleware$2
	});

	var index = createCommonjsModule(function (module, exports) {
	  'use strict';

	  exports.__esModule = true;
	  exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	  var _createStore = interopDefault(require$$2);

	  var _createStore2 = _interopRequireDefault(_createStore);

	  var _combineReducers = interopDefault(require$$4);

	  var _combineReducers2 = _interopRequireDefault(_combineReducers);

	  var _bindActionCreators = interopDefault(require$$3);

	  var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	  var _applyMiddleware = interopDefault(require$$2$2);

	  var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	  var _compose = interopDefault(require$$0$5);

	  var _compose2 = _interopRequireDefault(_compose);

	  var _warning = interopDefault(require$$0$4);

	  var _warning2 = _interopRequireDefault(_warning);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { "default": obj };
	  }

	  /*
	  * This is a dummy function to check if the function name has been altered by minification.
	  * If the function has been minified and NODE_ENV !== 'production', warn the user.
	  */
	  function isCrushed() {}

	  if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	    (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	  }

	  exports.createStore = _createStore2["default"];
	  exports.combineReducers = _combineReducers2["default"];
	  exports.bindActionCreators = _bindActionCreators2["default"];
	  exports.applyMiddleware = _applyMiddleware2["default"];
	  exports.compose = _compose2["default"];
	});

	interopDefault(index);
	var bindActionCreators = index.bindActionCreators;

	var index$5 = createCommonjsModule(function (module) {
	  /*!
	   * is-primitive <https://github.com/jonschlinkert/is-primitive>
	   *
	   * Copyright (c) 2014-2015, Jon Schlinkert.
	   * Licensed under the MIT License.
	   */

	  'use strict';

	  // see http://jsperf.com/testing-value-is-primitive/7

	  module.exports = function isPrimitive(value) {
	    return value == null || typeof value !== 'function' && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object';
	  };
	});

	var index$6 = interopDefault(index$5);



	var require$$0$6 = Object.freeze({
	  default: index$6
	});

	var index$4 = createCommonjsModule(function (module) {
	  /*!
	   * is-equal-shallow <https://github.com/jonschlinkert/is-equal-shallow>
	   *
	   * Copyright (c) 2015, Jon Schlinkert.
	   * Licensed under the MIT License.
	   */

	  'use strict';

	  var isPrimitive = interopDefault(require$$0$6);

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

	var shallowEquals = interopDefault(index$4);

	var index$8 = createCommonjsModule(function (module) {
	  /*!
	   * isobject <https://github.com/jonschlinkert/isobject>
	   *
	   * Copyright (c) 2014-2015, Jon Schlinkert.
	   * Licensed under the MIT License.
	   */

	  'use strict';

	  module.exports = function isObject(val) {
	    return val != null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && !Array.isArray(val);
	  };
	});

	var index$9 = interopDefault(index$8);



	var require$$0$7 = Object.freeze({
	  default: index$9
	});

	var index$7 = createCommonjsModule(function (module) {
	  /*!
	   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	   *
	   * Copyright (c) 2014-2015, Jon Schlinkert.
	   * Licensed under the MIT License.
	   */

	  'use strict';

	  var isObject = interopDefault(require$$0$7);

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

	var isPlainObject$2 = interopDefault(index$7);

	var invariant = createCommonjsModule(function (module) {
	  /**
	   * Copyright 2013-2015, Facebook, Inc.
	   * All rights reserved.
	   *
	   * This source code is licensed under the BSD-style license found in the
	   * LICENSE file in the root directory of this source tree. An additional grant
	   * of patent rights can be found in the PATENTS file in the same directory.
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

	  var NODE_ENV = process.env.NODE_ENV;

	  var invariant = function invariant(condition, format, a, b, c, d, e, f) {
	    if (NODE_ENV !== 'production') {
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
	        error = new Error(format.replace(/%s/g, function () {
	          return args[argIndex++];
	        }));
	        error.name = 'Invariant Violation';
	      }

	      error.framesToPop = 1; // we don't care about invariant's own frame
	      throw error;
	    }
	  };

	  module.exports = invariant;
	});

	var invariant$1 = interopDefault(invariant);

	var defaultMapStateToProps = function defaultMapStateToProps() {
	    return {};
	};
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	    return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	    return _extends({}, parentProps, stateProps, dispatchProps);
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

	    if (isPlainObject$2(mapDispatchToProps)) {
	        mapDispatchToProps = wrapActionCreators(mapDispatchToProps);
	    }

	    var mappedStateUseProps = mapStateToProps.length > 1;
	    var mappedDispatchUseProps = mapDispatchToProps.length > 1;

	    var computeStateProps = function computeStateProps(props) {
	        var state = props.store.getState();
	        var stateProps = mapStateToProps(state, props);

	        invariant$1(isPlainObject$2(stateProps), '[deku-redux][connect] mapStateToProps must return an object. Instead received %s', stateProps);

	        return stateProps;
	    };

	    var computeDispatchProps = function computeDispatchProps(props) {
	        var dispatch = props.store.dispatch;
	        var dispatchProps = mapDispatchToProps(dispatch, props);

	        invariant$1(isPlainObject$2(dispatchProps), '[deku-redux][connect] mapDispatchToProps must return an object. Instead received %s', dispatchProps);

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
	                    var stateProps = computeStateProps(props);
	                    statePropsChanged = !shallowEquals(stateProps, getStateProps(id));
	                    if (statePropsChanged) {
	                        setStateProps(id, stateProps);
	                    }
	                }

	                if (computeNewDispatchProps) {
	                    var dispatchProps = computeDispatchProps(props);
	                    dispatchPropsChanged = !shallowEquals(dispatchProps, getDispatchProps(id));
	                    if (dispatchPropsChanged) {
	                        setDispatchProps(id, dispatchProps);
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

	                invariant$1(isPlainObject$2(componentProps), '[deku-redux][connect] `mergeProps` function didn\'t return a plain object.');

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

	Object.defineProperty(exports, '__esModule', { value: true });

}));