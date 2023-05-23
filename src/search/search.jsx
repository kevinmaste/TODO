import React, {useState} from 'react';
import List from "../list/list";
import styled from "@emotion/styled";
import {Typography} from "@mui/material";

const Search = () => {
    const [name,setName]=useState('')
    //just why not here
    const [nameV2,setNameV2]=useState('')

    //the list of our to do
    let lists=[];
    const [list,setList]=useState([])
    const handleName=(e)=>{
        setName(e.target.value)
    }

    const addToTheList = ()=>{
        console.log('name in add todo is :',name)
        list.unshift(name)
        setList([...list])
        //setNameV2(name)
        setName('')
        console.log('lis is :',list)
    }

    const handleEraser =(arr,item)=>{
        console.log("here we are")
    const newList=  arr.filter((e)=>{
            console.log('e is: ',e)
            return e!==item;
        })

        setList(newList)
    }
    console.log('list data in the search is :',list)

    return (
        <>
            <div>
                <div>
                    <Typography variant={"h5"}>
                        Welcome to my Todo list
                    </Typography>
                </div>
                <div>
                    <input type="text" onChange={handleName} value={name}/>
                </div>
                <div>
                    <button onClick={addToTheList}>Add</button>
                </div>
            </div>
            <main>
                <div>
                    {
                        !list.length &&(<div>Empty Todo</div>)
                    }
                    {
                        list.map((item,index)=>(
                            <Contain key={`${item}-${index}`}>
                                <div>📍</div>
                                <div className="first_child">{item}</div>
                                <Buttons onClick={()=>handleEraser(list,item)}>Eraser</Buttons>
                            </Contain>
                        ))
                    }
                </div>
            </main>
        </>
    );
};

export default Search;






const Contain = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 28px;
  &>div{
    margin-right: 1rem;
  }
  
`
const Buttons= styled.div`
  
  &:hover {
    cursor: pointer;
    background-color: #3eca3e;
    padding: 0.1rem
  }
`