
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 24px;
  background: #1A70E5;
  color: #fff;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 700;
`;

const LogoutButton = styled.button`
  background: #fff;
  color: #1A70E5;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #145bb5;
    color: #fff;
  }
`;

const Content = styled.div`
  padding: 2rem;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth/session here if implemented
    navigate('/login');
  };

  return (
    <>
      <Nav>
        <Brand>Evergreen Dashboard</Brand>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Nav>
      <Content>
        <h2>Welcome to your Dashboard</h2>
        <p>This is your secure banking dashboard. More features coming soon!</p>
      </Content>
    </>
  );
}
