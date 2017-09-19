// Get createStore, compose, and applyMiddleware(allows 3rd party middleware to
// improve redux) from redux
import {createStore, compose} from 'redux';
import rootReducers from './reducers/index';

// Check for chrome -
const enhancers = compose(
// if windows devToolsExtension exists use devToolsExtension : or return a blank
// function.
window.devToolsExtension
  ? window.devToolsExtension()
  : f => f)
// createStore with rootReducer, {initial state}, enhancers(middleware, devtools
// extensions)
const store = createStore(rootReducers, {}, enhancers);

//checking to see if hot module is present, if it is, it will run the code
if (module.hot) {
  module
    .hot
    .accept('./reducers/', () => {
      //grab the changes and update.
      const nextRootReducer = require('./reducers/index').default;
      store.replaceReducer(nextRootReducer);
    })
}

export default store;
