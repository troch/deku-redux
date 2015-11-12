# deku-redux

> Bindings for redux in deku.

```sh
npm install deku-redux
```


### Redux

Read the docs about Redux: __[Redux docs](http://rackt.org/redux/index.html)__.
If you are familiar with [react-redux](https://github.com/rackt/react-redux), _deku-redux_ is very similar.

### storePlugin(store)

Add your store to your tree with `storePlugin`. It is required for `connect` to be able to get access to your state.

```javascript
import { tree, render } from 'deku';
import element from 'virtual-element';
import { createStore } from 'redux';
import { storePlugin } from 'deku-redux';
import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers);

const app = tree()
    .use(storePlugin(store))
    .mount(element(App));

render(app, document.getElementById('app'));
```

### connect([mapStateToProps], [mapDispatchToProps], [mergeProps])

Use `connect` higher-order component for connecting to your state, same as `connect` from [react-redux](https://github.com/rackt/react-redux).

See __[Redux with React](http://rackt.org/redux/docs/basics/UsageWithReact.html)__ for more information on how to use.
