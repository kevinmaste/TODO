import './App.css';
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import Search from "./search/search";

function App() {

  return (
    <div className="App">
      <div >
        <Search/>
      </div>
    </div>
  );
}

export default App;
