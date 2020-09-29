import React from 'react';
import Header from "./components/header";
import './app.scss'
import Main from "./components/main";


function App() {
  return (
      <div>
        <Header/>
        <Main title="Tytuł" txt="opis jakis tam ciekawy"/>
      </div>
  );
}

export default App;
