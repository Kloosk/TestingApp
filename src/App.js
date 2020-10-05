import React from 'react';
import Header from "./components/header";
import './app.scss'
import Main from "./components/main";
import Btn from "./components/btn";
import Posts from "./components/posts";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "./redux";
import Hooks from "./components/hooks/Hooks";

const propsy = [{
   name: "Luki",
   age: 37,
   isMen: true
}];
const App = () => {
    const posts = useSelector(state => state.test);
    const dispatch = useDispatch();
  return (
      <div data-test="appComponent">
        <Header/>
        <Main title="Tytuł" txt="opis jakis tam ciekawy" propsy={propsy}/>
        <Btn func={() => {dispatch(fetchUsers())}} txt="Pobierz posty"/>
          {posts.length > 1 &&
          posts.map((post, index) => {
              return <Posts post={post} key={index}/>
          })
          }
      </div>
  );
}

export default App;
