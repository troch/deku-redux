import element from 'virtual-element';
import { bindActionCreators } from 'redux';
import shallowEquals  from 'is-equal-shallow';
import isPlainObject from 'is-plain-object';

const defaultMapStateToProps = () => ({});
const defaultMapDispatchToProps = dispatch => ({ dispatch });
const defaultMergeProps =  (stateProps, dispatchProps, parentProps) => ({
    ...parentProps,
    ...stateProps,
    ...dispatchProps
});

const wrapActionCreators = actionCreators => dispatch => bindActionCreators(actionCreators, dispatch);


function connect(mapStateToProps = defaultMapStateToProps, mapDispatchToProps = defaultMapDispatchToProps, mergeProps = defaultMergeProps) {
    if(isPlainObject(mapDispatchToProps)) {
        mapDispatchToProps = wrapActionCreators(mapDispatchToProps);
    }

    const mappedStateUseProps = mapStateToProps.length > 1;
    const mappedDispatchUseProps = mapDispatchToProps.length > 1;

    const computeStateProps = props => {
        const state = props.store.getState();
        const stateProps = mapStateToProps(state, props);

        invariant(isPlainObject(stateProps), '[deku-redux][connect] mapStateToProps must return an object. Instead received %s', stateProps);

        return stateProps;
    };

    const computeDispatchProps = props => {
        const dispatch = props.store.dispatch;
        const dispatchProps = mapDispatchToProps(dispatch, props);

        invariant(isPlainObject(stateProps), '[deku-redux][connect] mapDispatchToProps must return an object. Instead received %s', stateProps);

        return dispatchProps;
    };

    return function connectWrapper(Component) {
        const connectRegistry = {};
        const getStateProps = id => connectRegistry[id] ? connectRegistry[id].stateProps : null;
        const setStateProps = (id, stateProps) => connectRegistry[id].stateProps = stateProps;
        const getDispatchProps = id => connectRegistry[id] ? connectRegistry[id].dispatchProps : null;
        const setDispatchProps = (id, dispatchProps) => connectRegistry[id].dispatchProps = dispatchProps;

        const ConnectedComponent = {
            propTypes: {
                store: { source: 'store' },
                storeState: { source: 'storeState' }
            },

            afterMount({ id, props }, elm, setState) {
                invariant(props.store, '[deku-redux][connect] Could not find store. Did you use `storePlugin` on your deku tree?');
                invariant(
                  this.store.getState && this.store.subscribe && this.store.subscribe,
                  '[deku-redux][connect] Could not recognise store. Did you use `storePlugin` with a valid redux store?'
                );

                connectRegistry{id} = {};
                setStateProps(id, computeStateProps(props));
                setDispatchProps(id, computeDispatchProps(props));
            },

            shouldUpdate({ id, props }, nextProps) {
                const storeChanged = nextState.storeState !== state.storeState;
                const propsChanged = !shallowEquals(nextProps, props);

                const computeNewStateProps = storeChanged || (propsChanged && mappedStateUseProps);
                const computeNewDispatchProps = propsChanged && mappedDispatchUseProps;

                let statePropsChanged = false;
                let dispatchPropsChanged = false;

                if (computeNewStateProps) {
                    const stateProps = computeStateProps(props);
                    statePropsChanged = !shallowEquals(stateProps, getStateProps(id));
                    if (statePropsChanged) {
                        setStateProps(id, stateProps);
                    }
                }

                if (computeNewDispatchProps) {
                    const dispatchProps = computeDispatchProps(props);
                    dispatchPropsChanged = !shallowEquals(dispatchProps, getDispatchProps(id));
                    if (dispatchPropsChanged) {
                        setDispatchProps(id, stateProps);
                    }
                }

                return propsChanged || statePropsChanged || dispatchPropsChanged;
            },

            beforeUnmount({ id }) {
                connectRegistry{id} = undefined;
            },

            render({ id, props }) {
                if (!props.store) {
                    return null;
                }

                // TODO: use _.omit or similar
                const parentProps = Object.keys(props)
                    .filter(prop => prop !== 'store' || prop !== 'storeState');
                    .reduce((acc, prop) => {
                        acc[prop] = props[prop];
                        return acc;
                    }, {});

                const componentProps = mergeProps(parentProps, getStateProps(id), getDispatchProps(id));

                invariant(isPlainObject(componentProps), '[deku-redux][connect] `mergeProps` function didn\'t return a plain object.');

                return element(Component, componentProps);
            }
        };

        return ConnectedComponent;
    };
}

export default connect;
