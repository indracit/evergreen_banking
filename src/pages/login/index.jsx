
import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import useSWRMutation from "swr/mutation";

 const loginRequest =  async (url, { arg }) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(arg),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      return response.json();
    }

const BackLink = styled(Link)`
  display: block;
  margin: 1.5rem auto 0 auto;
  text-align: center;
  color: #1A70E5;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s;
  &:hover {
    color: #145bb5;
    text-decoration: underline;
  }
`;

const Container = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  // background: linear-gradient(120deg, #e0eafc, #cfdef3);
`;

const LoginBox = styled.div`
  background: #fff;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
    max-width: 95vw;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #1A70E5;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: #1A70E5;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1rem;
  background: #1A70E5;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #145bb5;
  }
`;

const Error = styled.p`
  color: #e74c3c;
  text-align: center;
  margin: 0;
`;


export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  const { trigger, isMutating, error, data } = useSWRMutation(
    "/login",
    loginRequest
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      // return alert('Please enter both email and password.');
    }

    console.log('Email:', email, 'Password:', password);

    try {
      const result = await trigger({ email, password }); // POST request
      localStorage.setItem("jwtToken", result.token);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <LoginBox>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="username"
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            {error && <Error>{error}</Error>}
            <Button type="submit" disabled={isMutating} >
                {isMutating ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>
         {error && <p style={{ color: "red" }}>{error.message}</p>}
      {data && <p style={{ color: "green" }}>Welcome!</p>}
        <BackLink to="/">← Back to Home</BackLink>
      </LoginBox>
    </Container>
  );
}
