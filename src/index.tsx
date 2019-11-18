import React, {Reducer} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'

//store
import {createStore, compose, combineReducers} from "redux";
import {Provider} from 'react-redux'
//reducers
import favouriteReducer from './store/reducers/favorite'
import filterReducer from './store/reducers/filter'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer: Reducer<any,any> = combineReducers<any>({
    filterReducer: filterReducer,
    favoriteReducer: favouriteReducer
});

const store = createStore(rootReducer, composeEnhancers());


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
