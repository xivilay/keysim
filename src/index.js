import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

serviceWorker.unregister();
