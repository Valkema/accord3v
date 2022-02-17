import React, { useState } from 'react';
import Switch from './components/Switch/Switch.jsx';
import List from './components/List/List.jsx';
import './App.scss';


function App() {
  const [mode, setMode] = useState('multiple');

  const modeToggler = () => {
    mode === 'multiple' ? setMode('single') : setMode('multiple');
  }

  return (
    <section className="menu">
      <Switch modeToggler={modeToggler} mode={mode}/>
      <List mode={mode}/>
    </section>
  );
}


export default App;
