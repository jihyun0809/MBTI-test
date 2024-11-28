import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fef9f9; 
  font-family: "Arial", sans-serif;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #5d5dff; 
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #707070;
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: #ffb3b3; /* 부드러운 핑크 */
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff8585; 
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>무료 성격 테스트</Title>
      <Description>
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </Description>
      <StyledLink to="/login">로그인하기</StyledLink>
    </HomeContainer>
  );
};

export default Home;
