import React from 'react';
import './App.css';


import InputText from './Componentes/InputText';
import NumberFilter from './Componentes/NumberFilter';
import Table from './Componentes/Table';

function App() {
  document.title = 'Projeto Trybe - Star Wars';
  return (
    <div className="background-app">
      <img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-0.png" alt="Logo star Wars" className="img" />
      <span>
        <InputText />
        <NumberFilter />
        <Table />
      </span>

    </div>
  );
}

export default App;
