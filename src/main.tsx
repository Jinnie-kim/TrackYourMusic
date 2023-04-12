import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Global } from '@emotion/react';
import App from './App';
import store from './store/store';
import { GlobalStyle } from './style/Global.styled';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <>
    <Global styles={GlobalStyle} />
    <Provider store={store}>
      <App />
    </Provider>
  </>
  // </React.StrictMode>
);
