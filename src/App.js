import React from 'react';
import Header from "./components/header";
import './app.scss'
import Main from "./components/main";

const propsy = [{
   name: "Luki",
   age: 37,
   isMen: true
}];
function App() {
  return (
      <div>
        <Header/>
        <Main title="Tytuł" txt="opis jakis tam ciekawy" propsy={propsy}/>
      </div>
  );
}

export default App;
