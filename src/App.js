import './App.css';
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import Search from "./search/search";
import {Link} from "react-router-dom";
import styled from "@emotion/styled";

function App() {

  return (
    <div className="App">
      <div >
          <Nav>
              <RouterLinkContent>
                  <Link to={'register'}>
                      Register
                  </Link>
              </RouterLinkContent>
              <RouterLinkContent>
                  <Link to={'login'}>
                      Login
                  </Link>
              </RouterLinkContent>
          </Nav>
      </div>
        <main>
            <h1>Welcome to the todo sharing</h1>
        </main>
    </div>
  );
}

export default App;


//styled

const Nav = styled.nav`
  display: inline-flex;
  width: 100%;
  justify-content: center;
`

const RouterLinkContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100px;
  & a{
    text-decoration: none;
    color: black;
  } 
  &:hover{
    cursor: pointer;
    background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  }

`