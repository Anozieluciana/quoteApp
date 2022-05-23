import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";

 const Card = () => {

        const [count, setCount] = useState(0);
        
      
      const bgTextColor = [
        {
          bg: 'cyan',
          text: 'Have',
          cl:'white'
        },
        {
          bg: '#fff',
          text: 'A',
          cl:'black'
        },
        {
          bg: 'hotpink',
          text: 'Feel',
          cl:'cyan'
        },
        {
          bg: 'blue',
          text: 'Of',
          cl:'white'
        },
        {
            bg: '#08215a',
            text: 'Lucia_s',
            cl:'cyan'
          },
          {
            bg: '#123456',
            text: 'Quote',
            cl:'white'
          },
          {
            bg: 'black',
            text: 'App',
            cl:'hotpink'
          }
      ]
    
    useEffect(()=>{
          setInterval(()=>{
           setCount((el)=>el +1);
        },5000)
      }, []);    
      
  return (
    <div>
        <Con>
            <Wrap>
                <Img>
                    <Hold style={{
   backgroundColor:bgTextColor[count %  bgTextColor.length].bg, color:bgTextColor[count %  bgTextColor.length].cl}}> 
   {bgTextColor[count % bgTextColor.length].text}</Hold>  
              
                </Img>
                <Word>
                    <Lu>Lucia's <span>Quote</span>  App</Lu>
                
                <Button to="/create">Create A Quote</Button>
                </Word>
            </Wrap>
        </Con>
    </div>
  )
}


export default Card

const Con = styled.div`
    height: 100%;
    width:100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: dodgerblue;
`

const   Wrap = styled.div`
    height: 600px;
    width: 500px;
    background-color: darkblue;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 40px 3px 40px 3px;
    border: solid 2px cyan;

    :hover {
    transform: scale(1.04);
    cursor: pointer;
    color: #fff;
    /* background: darkcyan;  */
    background: -webkit-linear-gradient(
      to right,
      #0083b0,
      #00b4db
    ); 
   
  }
`
const Word = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        height: 400px;
        width: 100%;
        color:cyan;

        :hover {
    transform: scale(1.04);
    cursor: pointer;
        }

`
const Button = styled(Link)`
       height: 50px;
            width: 150px;
            background-color: dodgerblue ;
            border: solid 2px cyan;
            border-radius: 15px;
            font-size: 15px;
            font-weight: 600;
            font-style: italic;
            box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            cursor: pointer;
            
            :hover{
                background-color: cyan;
                color:dodgerblue;
                cursor: pointer;
            }
`
const Lu = styled.div`
        font-size: 40px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-style: italic;
        font-weight: 900;
        margin-bottom: 120px;

        span{
            color: dodgerblue;
        }
`
const Img = styled.div`
    height: 170px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
    

`
const Hold = styled.div`
    
    height: 120px;
        width: 120px;
        border-radius: 100%;
        background-color: pink;
        border: solid 2px cyan;
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: 700;
        font-style: italic;
`