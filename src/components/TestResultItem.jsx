import React from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteTestResult,
  updateTestResultVisibility,
} from "../api/testResults";

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
    <div>
      <h2>{result.nickname}님의 결과</h2>
      <p>MBTI 유형: {result.result}</p>
      {isOwner && (
        <>
          <button onClick={handleToggleVisibility}>
            {result.visibility ? "비공개로 전환" : "공개로 전환"}
          </button>
          <button onClick={handleDelete}>삭제</button>
        </>
      )}
    </div>
  );
};

export default TestResultItem;
