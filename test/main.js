require('mocha');
var should = require('should');

var Mock = require('component-mock');

var redux = require('redux');
var createStore = redux.createStore;

var element = require('virtual-element');
var deku = require('deku');
var tree = deku.tree;

var dekuRedux = require('../dist/commonjs');
var storePlugin = dekuRedux.storePlugin;
var connect = dekuRedux.connect;

var store = createStore(function(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        default:
            return state;
    }
}, { count: 0 });

function increment() {
    return {
        type: 'INCREMENT'
    };
}

function render(component) {
    return element('div', component.props.count);
}

describe('deku-redux', function() {
    it('should add store and storeState to a deku tree', function() {
        var app = tree()
            .use(storePlugin(store))
            .mount(element({ render: render}));

        app.sources.store.should.equal(store);
        app.sources.storeState.should.eql({ count: 0 });

        store.dispatch(increment());

        app.sources.storeState.should.eql({ count: 1 });
    });

    it('should connect components', function() {
        var Component = { render: render };
        function mapStateToProps(state) {
            return state;
        }

        var app = tree()
            .use(storePlugin(store))
            .mount(element(connect(mapStateToProps)(Component)));

        var mock = Mock(app.element.type);
        console.log(mock.render());
    });
});
