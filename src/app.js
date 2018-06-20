import React from 'react';

import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware, combineReducers } from 'redux';

import { createLogger } from 'redux-logger';

import {toDoAppService} from './redux/modules/toDoApp';

import {Router, browserHistory,hashHistory} from 'react-router';

import {appRoute} from './route';

import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger(); // initialize logger

const createStoreWithMiddleware = applyMiddleware( thunkMiddleware,loggerMiddleware)(createStore);

const reducer = combineReducers({
    toDoAppService:make_service(toDoAppService)
});

let store = createStoreWithMiddleware(reducer);

class App extends React.Component {
    render(){ // Every react component has a render method.
        return( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
            <Provider store={store}>
                <Router routes={appRoute} history={hashHistory}/>
            </Provider>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));

//这个方法很重要，就是因为会报错，返回值必须是个函数
function make_service(service) {
    return function () {
        return service.get_state();
    }
}


