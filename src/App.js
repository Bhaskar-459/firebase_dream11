import React from 'react';
import { RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import router from './Routes';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
