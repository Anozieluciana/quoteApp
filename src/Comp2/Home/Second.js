import React from 'react'
// import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'

 

const Second = () => {
  return (
    <div>
        <Con>
            <Wrap>
                <Input>Name :</Input>
                <Input>Contact :</Input>
                <Input>Company Name :</Input>
                <Input></Input>
                <Save>Save</Save>
            </Wrap>
        </Con>
    </div>
  )
}

export  default Second

const Con = styledComponents.div`
    height:100vh;
    width:100vw;
    background-color:dodgerblue;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
   border-radius:20px;

`
const Wrap = styledComponents.div`
    height:55%;
    width:50%;
    background-color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center
`

const Input = styledComponents.div`
height:60px;
width:85%;
background-color:cyan;
margin:10px;
border:radius:10px;
display:flex;
// flex-direction:column;
justify-content:center;
align-items:center;

`
const Save = styledComponents.div`
height:60px;
width:150px;
background-color:green;
display:flex;
// flex-direction:column;
justify-content:center;
align-items:center;
`