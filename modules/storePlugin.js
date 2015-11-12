const storePlugin = store => app => {
    // TODO: check store is a store indeed
    app.set('store', store);
    app.set('storeState', store.getState());
    store.subscribe(() => app.set('storeState', store.getState()));
};

export default storePlugin;
