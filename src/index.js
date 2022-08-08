import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import configureStore from "./store/configureStore"
import { Provider } from 'react-redux/es/exports';
const store=configureStore()
console.log(store.getState());
store.subscribe(()=>console.log("updated",store.getState()))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
     </Provider>
);

