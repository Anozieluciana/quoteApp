
import React from "react";
import styled from "styled-components"; 
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { v4 as uuid } from "uuid";
// import {GiCancel} from 'react-icons/gi'
import { Link } from "react-router-dom";

const LocalQuote = () => {
  const [quote, setQuote] = React.useState("");
  const [quoteAut, setQuoteAut] = React.useState("");

  const [viewQuote, setViewQuote] = React.useState([]);
   

  const pushQuote = () => {
    const uid = uuid();  
    const data = { id: uid, quoteTitie: quote, autor: quoteAut };
    setViewQuote([...viewQuote, data]);
    setQuote("")
    setQuoteAut("")
  };

  React.useEffect(() => {
    const ref = JSON.parse(localStorage.getItem("view"));
    setViewQuote(ref);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("view", JSON.stringify(viewQuote));
  }, [viewQuote]);

  const del = () =>{
    setQuoteAut(quoteAut - 1)
  }

  

  return (
    <Container>
      <Uploade>
        <span>
          <div>What's Your Favourite Quote ??</div>
          <input
            placeholder="Input Quote"
            value={quote}
            onChange={(e) => {
              setQuote(e.target.value);
            }}
          />
        </span>
        <span>
          <div>Autor Name ??</div>
          <input
            value={quoteAut}
            onChange={(e) => {
              setQuoteAut(e.target.value);
            }}
            placeholder="Autor of this Quote"
          />
        </span>
        <button
          onClick={() => {
            pushQuote()
          }}
        >
          Post a Quote
        </button>
      </Uploade>
      <ViewUpload>
        <h2>Let's Get Your Motivated</h2>
        {viewQuote?.map((props) => (
          <UpCard key={props.id}>
            <Hold>
              <Title>
                {" "}
                <FaQuoteLeft /> {props.quoteTitie} <FaQuoteRight />
              </Title>
                <Wrap>
              <SubT> {props.autor}  </SubT>
              {/* <GiCancel onClick={del} /> */}
             
              </Wrap>
             
            </Hold>
            
          </UpCard>
        ))}
        <Back to='/'>Previous</Back>
      </ViewUpload>
      
    </Container>
  );
};

export default LocalQuote;


const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const Uploade = styled.div`
  height: 100%;
  width: 40%;
  min-height: 100vh;
  background-color: dodgerblue;
  opacity: 0.83;
  font-family: poppins;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  
  background: -webkit-linear-gradient(
    to right,
    #0083b0,
    #00b4db
  );

  @media (max-width: 600px) {
    width: 100%;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div {
      font-size: small;
      font-weight: 600;
    }

    input {
      height: 30px;
      width: 300px;
      font-family: poppins;
      border: none;
      outline: none;
      margin-bottom: 25px;
      border-radius: 3px;
    }
  }

  button {
    padding: 12px 38px;
    background-color: darkcyan;
    border: none;
    outline: none;
    font-family: poppins;
    border-radius: 5px;
    font-weight: 600;
    color: #fff;
    border: 1px solid #fff;
    cursor: pointer;

  }
`;
const ViewUpload = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 60%;
  flex-wrap: wrap;
  background-color: darkcyan;
  font-family: "Fredoka One", cursive;
  display: flex;
  flex-direction: column;
  opacity: 0.83;
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const UpCard = styled.div`
  width: 85%;
  border-radius: 6px;
  margin: 10px 0px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fff;
  transition: all 300ms;

  :hover {
    transform: scale(1.04);
    cursor: pointer;
    color: #fff;
    background: darkcyan; 
    background: -webkit-linear-gradient(
      to right,
      #0083b0,
      #00b4db
    ); 
    background: linear-gradient(
      to right,
      #0083b0,
      #00b4db
    );
  }
`;
const Hold = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
  cursor: pointer;
`;
const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    /* background-color: red; */
    width: 70px;
    align-items: center;
`
const Title = styled.div``;
const SubT = styled.div`
  font-family: "Freehand", cursive;
  font-size: 17px;
`;

const Back = styled(Link)`
    padding: 12px 38px;
    background-color: dodgerblue;
    border: none;
    outline: none;
    font-family: poppins;
    border-radius: 5px;
    font-weight: 600;
    color: #fff;
    border: 1px solid #fff;
    text-decoration: none;

    :hover{
        transform: scale(1.04);
    cursor: pointer;
    color: black;
    background-color: white;
    }
`