import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import InviteContainer from './containers/InviteContainer';
import store from './store/store';
import "./css/main.scss";

const App = (
    <Provider store={store}>
        <InviteContainer />
    </Provider>
);

ReactDOM.render(App, document.getElementById('app'));