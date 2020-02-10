import React from 'react';
// Connection styles
import './fonts/FontStyle/stylesheet.css'
import './style/App.sass';
// Connection components
import Header from "./components/header";
import Main from "./components/main";
import Dist from "./components/dist/dist";
import Footer from "./components/dist/footer";


function App() {
  return (
    <div>
      <Header />
      <Main />
      <Dist />
      <Footer />
    </div>
  );
}

export default App;
