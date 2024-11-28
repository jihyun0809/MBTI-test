import React, { useContext, useState } from "react";
import TestForm from "../components/TestForm";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiDescriptions";
import { UserContext } from "../context/UserContext";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fef9f9; /* 부드러운 파스텔톤 배경 */
  font-family: "Arial", sans-serif;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #5d5dff; /* 파스텔 블루 */
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #707070;
  margin-bottom: 2rem;
`;

const ResultText = styled.p`
  font-size: 1.5rem;
  color: #ff6b6b;
  margin-bottom: 1.5rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #5d5dff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4a4aff;
  }

  &:active {
    background-color: #3a3abf;
  }
`;

const TestPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult);

    try {
      await createTestResult({
        userId: user.id,
        nickname: user.nickname,
        result: mbtiResult,
        visibility: true,
      });
    } catch (error) {
      console.error("결과 저장 실패:", error);
    }
  };

  const handleNavigateToResults = () => {
    navigate("/result");
  };

  return (
    <PageContainer>
      {!result ? (
        <>
          <Title>MBTI 테스트</Title>
          <TestForm onSubmit={handleTestSubmit} />
        </>
      ) : (
        <>
          <Title>테스트 결과: {result}</Title>
          <ResultText>{mbtiDescriptions[result]}</ResultText>
          <Button onClick={handleNavigateToResults}>결과 목록으로 이동</Button>
        </>
      )}
    </PageContainer>
  );
};

export default TestPage;
