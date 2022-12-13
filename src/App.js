import './App.css';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import AppContextProvider from './AppContext';
import './styles/styles.css';

function App() {
  return (
    <React.StrictMode>
      <AppContextProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AppContextProvider>
    </React.StrictMode>
  );
}

export default App;
