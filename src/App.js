import './App.css';
import React from "react";
import { AppRoutes } from './navigation/app-routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <React.Fragment>
        <ToastContainer />
        <AppRoutes />
      </React.Fragment>
    </>
  );
}

export default App;
