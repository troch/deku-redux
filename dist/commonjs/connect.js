'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _virtualElement = require('virtual-element');

var _virtualElement2 = _interopRequireDefault(_virtualElement);

var _redux = require('redux');

var _isEqualShallow = require('is-equal-shallow');

var _isEqualShallow2 = _interopRequireDefault(_isEqualShallow);

var _isPlainObject = require('is-plain-object');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

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
        return (0, _redux.bindActionCreators)(actionCreators, dispatch);
    };
};

function connect() {
    var mapStateToProps = arguments.length <= 0 || arguments[0] === undefined ? defaultMapStateToProps : arguments[0];
    var mapDispatchToProps = arguments.length <= 1 || arguments[1] === undefined ? defaultMapDispatchToProps : arguments[1];
    var mergeProps = arguments.length <= 2 || arguments[2] === undefined ? defaultMergeProps : arguments[2];

    if ((0, _isPlainObject2['default'])(mapDispatchToProps)) {
        mapDispatchToProps = wrapActionCreators(mapDispatchToProps);
    }

    var mappedStateUseProps = mapStateToProps.length > 1;
    var mappedDispatchUseProps = mapDispatchToProps.length > 1;

    var computeStateProps = function computeStateProps(props) {
        var state = props.store.getState();
        var stateProps = mapStateToProps(state, props);

        (0, _invariant2['default'])((0, _isPlainObject2['default'])(stateProps), '[deku-redux][connect] mapStateToProps must return an object. Instead received %s', stateProps);

        return stateProps;
    };

    var computeDispatchProps = function computeDispatchProps(props) {
        var dispatch = props.store.dispatch;
        var dispatchProps = mapDispatchToProps(dispatch, props);

        (0, _invariant2['default'])((0, _isPlainObject2['default'])(dispatchProps), '[deku-redux][connect] mapDispatchToProps must return an object. Instead received %s', dispatchProps);

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

            afterMount: function afterMount(_ref, elm, setState) {
                var id = _ref.id;
                var props = _ref.props;

                (0, _invariant2['default'])(props.store, '[deku-redux][connect] Could not find store. Did you use `storePlugin` on your deku tree?');
                (0, _invariant2['default'])(props.store.getState && props.store.subscribe && props.store.subscribe, '[deku-redux][connect] Could not recognise store. Did you use `storePlugin` with a valid redux store?');

                connectRegistry[id] = {};
                setStateProps(id, computeStateProps(props));
                setDispatchProps(id, computeDispatchProps(props));
            },

            shouldUpdate: function shouldUpdate(_ref2, nextProps) {
                var id = _ref2.id;
                var props = _ref2.props;

                var storeChanged = nextProps.storeState !== props.storeState;
                var propsChanged = !(0, _isEqualShallow2['default'])(nextProps, props);

                var computeNewStateProps = storeChanged || propsChanged && mappedStateUseProps;
                var computeNewDispatchProps = propsChanged && mappedDispatchUseProps;

                var statePropsChanged = false;
                var dispatchPropsChanged = false;

                if (computeNewStateProps) {
                    var _stateProps = computeStateProps(props);
                    statePropsChanged = !(0, _isEqualShallow2['default'])(_stateProps, getStateProps(id));
                    if (statePropsChanged) {
                        setStateProps(id, _stateProps);
                    }
                }

                if (computeNewDispatchProps) {
                    var dispatchProps = computeDispatchProps(props);
                    dispatchPropsChanged = !(0, _isEqualShallow2['default'])(dispatchProps, getDispatchProps(id));
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

                if (!props.store) {
                    return null;
                }

                // TODO: use _.omit or similar
                var parentProps = Object.keys(props).filter(function (prop) {
                    return prop !== 'store' || prop !== 'storeState';
                }).reduce(function (acc, prop) {
                    acc[prop] = props[prop];
                    return acc;
                }, {});

                var componentProps = mergeProps(parentProps, getStateProps(id), getDispatchProps(id));

                (0, _invariant2['default'])((0, _isPlainObject2['default'])(componentProps), '[deku-redux][connect] `mergeProps` function didn\'t return a plain object.');

                return (0, _virtualElement2['default'])(Component, componentProps);
            }
        };

        return ConnectedComponent;
    };
}

exports['default'] = connect;
module.exports = exports['default'];