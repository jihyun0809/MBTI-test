import React from "react";
import AuthForm from "../components/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import styled from "styled-components";

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fef6f6; /* 부드러운 파스텔톤 배경 */
  font-family: "Arial", sans-serif;
`;

const SignupBox = styled.div`
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
  color: #ff6b6b; /* 파스텔 핑크 */
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #707070;
  margin-top: 1.5rem;
`;

const StyledLink = styled(Link)`
  color: #5d5dff; /* 파스텔 블루 */
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #4a4aff; /* 더 진한 블루 */
  }
`;

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      const data = await register(formData);
      if (data.success) {
        navigate("/login"); // 회원가입 성공 시 로그인 페이지로 이동
      }
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <SignupContainer>
      <SignupBox>
        <Title>회원가입</Title>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <Text>
          이미 계정이 있으신가요? <StyledLink to="/login">로그인</StyledLink>
        </Text>
      </SignupBox>
    </SignupContainer>
  );
};

export default Signup;
