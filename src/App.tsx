import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Menu from './Components/Menu/Menu';
import Routing from './Components/Routing/Routing';
function App(): JSX.Element {
  const [theme, setTheme] = useState<string>('light')
  const changeTheme =() =>{
    if  (theme =='light'){
      setTheme('dark');
    }
    else{
      setTheme('light');
    }
  }
  return (
    <div className={"App ${theme}"}>
      <button onClick={changeTheme}>{ theme==='dark'? 'MdLightMode' : 'MdDarkMode' }</button>
      <Header/>
      <Menu/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
