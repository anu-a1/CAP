import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";

import App from './scripts/components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import reducers from './scripts/reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
