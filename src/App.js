import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';

export const wholeContext = createContext();

function App() {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [sideBar,setSideBar] = useState(true);
  const [template,setTemplate] = useState({name : '' , textareaValue:""});
  const [temp,setTemp] = useState(false);
  const [Templates, setTemplates] = useState(localStorage.getItem('templates'));
  const [theme, setTheme] = useState(true);
  useEffect(() => { 
    console.log(template);
    if(!localStorage.getItem('templates')){
      localStorage.setItem('templates',JSON.stringify([]));
      setTemplates(localStorage.getItem('templates'))  
    }
    setTemplates(localStorage.getItem('templates'))  
  },[temp,template,theme])
  return (
    <wholeContext.Provider value={{textAreaValue,setTextAreaValue,sideBar,setSideBar,Templates, setTemplates,template,setTemplate,temp,setTemp,theme, setTheme}}>
    <div className="App">
    <Header />
    <Body />
    </div>
    </wholeContext.Provider>
  );
}

export default App;
