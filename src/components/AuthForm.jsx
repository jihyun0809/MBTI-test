import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  font-size: 1rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #5d5dff; /* 파스텔 블루 */
    box-shadow: 0 0 5px rgba(93, 93, 255, 0.3);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #5d5dff; /* 파스텔 블루 */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4a4aff; /* 더 진한 블루 */
  }

  &:active {
    background-color: #3a3abf;
  }
`;

const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="아이디"
        required
      />
      <Input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="비밀번호"
        required
      />
      {mode === "signup" && (
        <Input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="닉네임"
          required
        />
      )}
      <Button type="submit">{mode === "login" ? "로그인" : "회원가입"}</Button>
    </Form>
  );
};

export default AuthForm;
