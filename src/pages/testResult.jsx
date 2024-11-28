import React, { useContext, useEffect, useState } from "react";
import { getTestResults } from "../api/testResults";
import TestResultItem from "../components/TestResultItem";
import { UserContext } from "../context/UserContext";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 2rem;
  background-color: #fef9f9; 
  min-height: 100vh;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #5d5dff; 
  margin-bottom: 2rem;
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
`;

const TestResult = () => {
  const { user } = useContext(UserContext);
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    const data = await getTestResults();
    if (!Array.isArray(data)) return;
    const filteredData = data.filter(
      (item) => item.visibility || item.userId === user.id
    );
    setResults(filteredData);
  };

  useEffect(() => {
    if (user) {
      fetchResults();
    }
  }, [user]);

  return (
    <PageContainer>
      <Title>테스트 결과 목록</Title>
      <ResultsContainer>
        {results.map((result) => (
          <TestResultItem
            key={result.id}
            result={result}
            user={user}
            refreshResults={fetchResults}
          />
        ))}
      </ResultsContainer>
    </PageContainer>
  );
};

export default TestResult;
