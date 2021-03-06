import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import chartTypeFilter from './Redux/reducers/chartTypeFilter';
import dataReducer from './Redux/reducers/dataReducer'
import favoriteReducer from './Redux/reducers/favoriteReducer'
import App from './App';
// import * as serviceWorker from './serviceWorker';


const rootReducer = combineReducers(
    {
        chartType: chartTypeFilter,
        dataReducer: dataReducer,
        favoriteReducer: favoriteReducer
    }
)

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
