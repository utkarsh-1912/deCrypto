import React from 'react'
import reactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux'
import App from './App'
import store from './app/store';
import 'antd/dist/antd.min.css';

const rootElement = document.getElementById("root");
const root = reactDOM.createRoot(rootElement);
 
root.render(
<Router>
<Provider store={store}>
<App/>
</Provider>
</Router>
);