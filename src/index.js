import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import appReducer from './reducer';

const store = createStore(appReducer);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root"));

registerServiceWorker();