import React, { useContext, useState } from "react";
import { updateProfile } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fef9f9; 
  font-family: "Arial", sans-serif;
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #5d5dff;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #555555;
  text-align: left;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #5d5dff;
    box-shadow: 0 0 5px rgba(93, 93, 255, 0.3);
  }
`;

const SubmitButton = styled.button`
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

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [nickname, setNickname] = useState(user?.nickname || "");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await updateProfile({ nickname }, user.accessToken);
      if (data.success) {
        alert("프로필 수정에 성공했습니다~!");
        setUser({ ...user, nickname, avatar: data.avatar });
        navigate("/");
      }
    } catch (error) {
      alert("프로필 수정에 실패하였습니다~!", error.message);
    }
  };

  return (
    <PageContainer>
      <FormContainer>
        <Title>프로필 수정</Title>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label>닉네임</Label>
            <Input value={nickname} onChange={handleNicknameChange} />
          </div>
          <SubmitButton type="submit">프로필 업데이트</SubmitButton>
        </Form>
      </FormContainer>
    </PageContainer>
  );
};

export default Profile;
