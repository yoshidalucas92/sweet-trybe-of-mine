import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}
function App() {
  const compromissos = [
    '13h - pantão',
    '14h - avisos e alinhamentos',
    '16:30 - aula com cacique',
    '19:30 - forms',
    '19:40 - fechamento'
  ];
  return (compromissos.map(index => task(index)));
}

export default App;
