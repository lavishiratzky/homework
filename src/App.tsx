import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Menu from './Components/Menu/Menu';
import Routing from './Components/Routing/Routing';
function App(): JSX.Element {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
