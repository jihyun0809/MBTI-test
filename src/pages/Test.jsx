import React, { useContext, useState } from "react";
import TestForm from "../components/TestForm";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiDescriptions";
import { UserContext } from "../context/UserContext";

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
    <div>
      {!result ? (
        <>
          <h1>MBTI 테스트</h1>
          <TestForm onSubmit={handleTestSubmit} />
        </>
      ) : (
        <>
          <h1>테스트 결과: {result}</h1>
          <p>{mbtiDescriptions[result]}</p>
          <button onClick={handleNavigateToResults}>결과 목록으로 이동</button>
        </>
      )}
    </div>
  );
};

export default TestPage;
