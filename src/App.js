import './App.css';
import React from 'react';
import ReactDOM  from 'react-dom/client';
import { LoginComponent } from './components/login/LoginComponent';

function App() {
  return (
    <>
    <LoginComponent/>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

export default App;
