import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App/App';
import './index.css';
import { persistor, store } from './redux/store';

const script = document.createElement('script');
script.innerHTML = `
  (function(c,a,r,i){c.CI_API_KEY=i;var s=a.createElement('script');
  s.async=1;s.src=r+'?v='+new Date().toISOString().slice(0,10).replace(/-/g,'');
  a.head.appendChild(s)})(window,document,'https://carimagesapi.com/assets/js/carimages.js',
  '${process.env.REACT_APP_CAR_IMAGES_API_KEY}');
`;
document.head.appendChild(script);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/car-rental">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
