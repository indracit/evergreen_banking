
import styled from 'styled-components';
import { Link } from 'react-router';

const Container = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  //background: linear-gradient(120deg, #e0eafc, #cfdef3);
`;

const Box = styled.div`
  background: #fff;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
    max-width: 95vw;
  }
`;

const Title = styled.h1`
  color: #1A70E5;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #333;
  font-size: 1.1rem;
  text-align: center;
`;

const GetStartedButton = styled(Link)`
  margin-top: 1.5rem;
  padding: 0.75rem 2rem;
  background: #1A70E5;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #145bb5;
  }
`;

export default function GetStartedPage() {
  return (
    <Container>
      <Box>
        <Title>Welcome to Evergreen Banking</Title>
        <Subtitle>
          Experience modern, secure, and convenient banking.<br />
          Get started with your journey today!
        </Subtitle>
        <GetStartedButton to="/login">Get Started</GetStartedButton>
      </Box>
    </Container>
  );
}
