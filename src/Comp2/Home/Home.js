import React from 'react'
// import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'

 const Home = () => {
  return (
    <div>
        <Con>
            
            <Wrap>
                <Des>
                    <Name>Lucia Chidera</Name>
                    <Contact>08121759954</Contact>
                    <Company>Lucia Autograph</Company>
                    <Icon>
                        <Pic>i</Pic>
                        <Pic>i</Pic>
                        <Pic>i</Pic>
                    </Icon>
                    
                </Des>
                <First>
                <FirstLetter>L</FirstLetter> 
                <But >button</But>              
                </First>
            </Wrap>
            {/* <SecondCard>

            </SecondCard> */}
        </Con>
    </div>
  )
}

export default Home
const Icon = styledComponents.div`
    margin-top:16px;

    width:170px;
    // background-color:red;
    height:50px;
    display:flex;
    justify-content:space-between;
`
const Pic = styledComponents.div`
background-color:pink;
height:50px;
width:50px;
border-radius:100%;
display:flex;
justify-content:center;
align-items:center;

`

const Name = styledComponents.div`
    font-size:27px;
    font-weight:800;
    font-style:italic;
    // margin-top:20px
`
const Contact = styledComponents.div`
font-size:23px;
font-weight:600;
// font-style:italic;
margin-top:10px
`
const Company = styledComponents.div`
font-size:17px;
font-weight:500;
font-style:italic;
margin-top:10px
`

const Des = styledComponents.div`

height:200px;
width:100%;
background-color:gray;
display:flex;
align-items:center;
flex-direction:column;
padding-top:10px;
padding-bottom:10px;
`

const First = styledComponents.div`
height:100%;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
align-self:center;
padding-top:10px;
padding-bottom:10px;

`

const FirstLetter = styledComponents.div`
    height:150px;
    width:150px;
display:flex;
align-items:center;
justify-content:center;
font-size:80px;
font-weight:800;
font-style:italic;
    border-radius:100%;
    background-color:cyan;
    
`

const But = styledComponents.div`
display:flex;
justify-content:center;
align-items:center;
align-self:center;
border-radius:100%;
background-color:red;
height:70px;
    width:70px;
    margin-top:15px
`

const Con = styledComponents.div`
    height:100vh;
    width:100vw;
    background-color:dodgerblue;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    
`
const Wrap = styledComponents.div`
    height:55%;
    width:50%;
    background-color:white;
    display:flex;
    flex-direction:column;
`
// const SecondCard = styledComponents.div`
// height:55%;
// width:50%;
// background-color:green;
// display:flex;
// flex-direction:column;  
// margin-top:20px;
// `