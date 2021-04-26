import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger'
//Reducers
import reducers from './reducers/weatherReducer';
// import reducers from './reducers/index'

//--Middleware 
const middleware = [thunk,logger];
console.log("middleware",middleware)

//--Store
// const store = createStore(reducers, middleware);
// console.log("Store",store)
// export default store;  

const initialState ={}

const store = createStore(reducers, initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : f => f
    )
  );
  export default store;

