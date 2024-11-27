import React from "react";
import AuthForm from "../components/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/auth";

const Signup = () => {
  const navigate = useNavigate();


  const handleSignup = async (formData) => {
    try {
      const data = await register(formData);
      if(data.success){
        navigate("/login");//회원가입시 로그인으로 가시오
      }
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <div>
        <h1>회원가입</h1>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <div>
          <p>
            이미 계정이 있으신가요? <Link to="/login">로그인</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;