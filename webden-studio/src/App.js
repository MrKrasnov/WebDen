import React from 'react';
// Connection styles

import './fonts/FontStyle/stylesheet.css'
import './style/App.sass';
// Connection components
import Header from "./components/header";
import Main from "./components/main";
import Dist from "./components/dist/dist";


function App(props) {
  
  return (
    <div>
      <Header />
      <Main text={props.appState.main[0]} />
      <Dist content={props.appState.dist[0]}/>
    </div>
  );
}

export default App;
