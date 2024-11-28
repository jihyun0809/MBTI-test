import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #5d5dff;
  color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #ffb3b3; 
  }
`;

const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: #5d5dff; 
  background-color: #ffffff;
  border: 1px solid #5d5dff;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #5d5dff;
    color: #ffffff;
  }
`;

const Layout = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <Header>
        <NavLinks>
          <StyledLink to="/">홈</StyledLink>
          <StyledLink to="/profile">프로필</StyledLink>
          <StyledLink to="/test">테스트</StyledLink>
          <StyledLink to="/result">테스트 결과 목록</StyledLink>
          <StyledLink to="/login">로그인</StyledLink>
          <StyledLink to="/signup">회원가입</StyledLink>
        </NavLinks>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
