import styled from 'styled-components';
import bgImg from '../../assets/pexels-exnl-931887.jpg';
import { Link } from 'react-router';



const P = styled.p`
padding:10px;
// color: #333;`



const HomeDiv = styled.div`
background-image: url(${bgImg});
background-color: rgba(128, 128, 128, 0.5);
  background-blend-mode: multiply;
background-size: cover;
background-position: center;
height: 70vh;
width: 70vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
text-align: center;
`;

const ContainerDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 85vh;
width: 100vw;`

const GetButton = styled.button`
width: 100px;
height: 40px;
background-color: #1A70E5;
border: none;
color: white;
border-radius: 5px;
cursor: pointer;
&:hover {
  background-color: #145bb5;
}`;



const Home = () => {
  return (
    <>

      <ContainerDiv>
    <HomeDiv>
        <h1>Your Financial Features Starts Here</h1>
        <P>Your trusted partner in financial growth and security.</P>
        <Link to="/getstarted" style={{ textDecoration: 'none' }}>
          <GetButton>Get Started</GetButton>
        </Link>
    </HomeDiv>  
    </ContainerDiv>  

      </>
  )
}

export default Home