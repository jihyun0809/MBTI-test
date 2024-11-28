import React from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteTestResult,
  updateTestResultVisibility,
} from "../api/testResults";
import styled from "styled-components";

const ResultContainer = styled.div`
  padding: 1.5rem;
  background-color: #ffffff;
  border: 1px solid #ececec;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333333;
  margin-bottom: 0.8rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #555555;
  margin-bottom: 1.2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${(props) =>
    props.variant === "toggle"
      ? `
    background-color: #5d5dff; 
    &:hover {
      background-color: #4a4aff; 
    }
    &:active {
      background-color: #3a3abf;
    }
  `
      : `
    background-color: #ff6b6b; 
    &:hover {
      background-color: #ff4b4b;
    }
    &:active {
      background-color: #d93a3a;
    }
  `}
`;

const TestResultItem = ({ result, user, refreshResults }) => {
  const navigate = useNavigate();
  const isOwner = result.userId === user.id;

  const handleToggleVisibility = async () => {
    await updateTestResultVisibility(result.id, !result.visibility, user.token);
    refreshResults();
  };

  const handleDelete = async () => {
    await deleteTestResult(result.id, user.token);
    refreshResults();
  };

  return (
    <ResultContainer>
      <Title>{result.nickname}님의 결과</Title>
      <Text>MBTI 유형: {result.result}</Text>
      {isOwner && (
        <ButtonContainer>
          <Button variant="toggle" onClick={handleToggleVisibility}>
            {result.visibility ? "비공개로 전환" : "공개로 전환"}
          </Button>
          <Button variant="delete" onClick={handleDelete}>
            삭제
          </Button>
        </ButtonContainer>
      )}
    </ResultContainer>
  );
};

export default TestResultItem;
