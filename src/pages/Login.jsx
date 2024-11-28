import { useContext } from "react";
import { login } from "../api/auth";
import AuthForm from "../components/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fef6f6; 
  font-family: "Arial", sans-serif;
`;

const LoginBox = styled.div`
  background-color: #ffffff;
  border: 1px solid #ececec;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #5d5dff;
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #707070;
  margin-top: 1.5rem;
`;

const StyledLink = styled(Link)`
  color: #ff6b6b; 
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #ff4b4b; 
  }
`;

const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const { id, password } = formData;
      const data = await login({ id, password });
      if (data.success) {
        setUser(data);
        navigate("/");
      }
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Title>로그인</Title>
        <AuthForm mode="login" onSubmit={handleLogin} setUser={setUser} />
        <Text>
          계정이 없으신가요? <StyledLink to="/signup">회원가입</StyledLink>
        </Text>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
