import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { ToastContainer } from 'react-toastify';
import { Authprovider } from './Authcheck/Context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider >
      <App />
      <ToastContainer />
    </Authprovider>
  </StrictMode>,
)
