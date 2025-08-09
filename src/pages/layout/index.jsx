import styled from 'styled-components';
import bank from '../../assets/bank.svg';
import { Outlet } from 'react-router';
import { Link } from 'react-router';

const Nav = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 3px;
border-bottom: 1px solid #ccc;
 `;

const Div = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;
const Img = styled.img`
padding : 10px;`;

const H4 = styled.h4`
padding:10px;
// color: #333;`;

const P = styled.p`
padding:10px;
// color: #333;`;


const Button = styled.button`
 margin:10px;
width : 60px;
height : 25px; 
background-color:#1A70E5;
border: none;
color: white;
border-radius: 5px;
cursor: pointer;
&:hover {
  background-color: #145bb5;
}`;




const Footer = styled.footer`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
position: fixed;
bottom: 0;
left: 0;
background-color: #f1f1f1;
color: #333;
height: 50px;
width: 100%;
`;

const NavBar = () =>{
  return (
    <Nav>
      <Div>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <Img src={bank} alt="Logo" />
          <H4>Evergreen banking</H4>
        </Link>
      </Div>
      <Div>
        <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}><H4>Services</H4></Link>
        <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}><H4>About Us</H4></Link>
        <Link to="/login" style={{ textDecoration: 'none' }}><Button>Login</Button></Link>
      </Div>
    </Nav>
  );
}

const Layout = () => {
  return (
    <>
      <NavBar />
    
    <Outlet/>

    <Footer>
      <P>© 2023 Evergreen Banking. All rights reserved.</P>
    </Footer>
      </>
  )
}

export default Layout