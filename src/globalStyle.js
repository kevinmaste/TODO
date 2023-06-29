import styled from "@emotion/styled";
import {Link} from "react-router-dom";

export const GlobalLink = styled(Link)`
  text-decoration: none;

`

//Pensez a mettre une transition avec un ease pour le button
export const ButtonAuthStyled = styled.button`
  display: flex;
  align-items: center;
  background: #71aa71;
  color: #373737;
  /* outline: none; */
  margin-top: 0.2rem;
  border: 1px solid white;
  height: 25px;
  border-radius: 1rem;
  font-weight: bold;
  
  &:hover{
    cursor: pointer;
    background: aqua;
  }
`