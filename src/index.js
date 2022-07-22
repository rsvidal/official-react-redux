import React from 'react';
import { createRoot } from 'react-dom/client';
/* REDUX. El Provider nos posibilita que el STORE este accesible desde cualquier componente 'hijo'. 
   En nuestro caso, hemos envuelto el componente <App> con el Provider. Por lo tanto, <App> y cualquier 
   componente hijo de <App> tendr� acceso al STORE */
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* REDUX. Todos los componentes hijos de <App> tienen acceso al STORE */}
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
