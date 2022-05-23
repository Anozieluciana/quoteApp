import React from 'react'
import styled from 'styled-components'


const Home = () => {
  return (
    <div>
        <Con>
            <Wrap>
                <FirstHold>
                    <Box1>
                        <Image/>
                        <Input>input quote :</Input>
                    </Box1>
                    <Box2>
                        <NameWrap>
                        <Name>your name :</Name>
                        </NameWrap>
                        <But>
                            <But1>Prev</But1>
                            <But2>EnterQuote</But2>
                            <But3>Next</But3>
                        </But>
                    </Box2>
                </FirstHold>
            </Wrap>
        </Con>
    </div>
  )
}

export default Home

const Con = styled.div`
    height: 100%;
    width: 100%;
    min-height: 100vh;
    background-color: teal;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

`
const Wrap = styled.div`
    height: 700px;
    width: 1000px;
    background-color: lightcyan;
    flex-wrap: wrap;
`

const FirstHold = styled.div`
    height: 220px;
    width: 100%;
    background-color: red;
    /* display: flex;
    justify-content: center; */

`

const Box1 = styled.div`
    height: 110px;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* flex-wrap: wrap; */
`
const Image = styled.img`
    height: 100px;
    width: 100px;
    background-color: black;
    border-radius: 100%;
`
const Input = styled.div`
        height: 50px;
        width: 700px;
        background-color: pink;
        display: flex;
        align-items: center;
         border-radius: 5px;
    font-size: 17px;
    font-weight: 600;
    font-style: italic;
`
const Box2 = styled.div`
        height: 110px;
        width: 100%;
        /* background-color: green; */
       display: flex;
       /* justify-content: center; */
       align-items: center;
       flex-direction: column;
`
const Name = styled.div`
        height: 50px;
        width: 520px;
        background-color: pink;
        border-radius: 5px;
        display: flex;
    align-items: center;
`
const But = styled.div`
      height: 50px;
    width: 500px;
    /* background-color: maroon; */
    margin-top: 10px ;
    display: flex;
    justify-content: space-between;
`

const NameWrap = styled.div`
    height: 50px;
    width: 500px;
    /* background-color: maroon; */
   
    font-size: 17px;
    font-weight: 600;
    font-style: italic;
`
const But1 = styled.button`
        height: 50px;
        width: 150px;
        background-color: goldenrod;
        display: flex;
        align-items: center;
        border-radius: 10px;
        border: solid 5px black;
        justify-content: center;
        font-size: 15px;
    font-weight: 400;
    font-style: italic;
`
const But2 = styled.button`
        height: 50px;
        width: 150px;
        background-color: darkgreen;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        border: solid 5px black;
        font-size: 15px;
    font-weight: 400;
    font-style: italic;
`
const But3 = styled.button`
        height: 50px;
        width: 150px;
        background-color: goldenrod;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        border: solid 5px black;
        font-size: 15px;
    font-weight: 400;
    font-style: italic;
`