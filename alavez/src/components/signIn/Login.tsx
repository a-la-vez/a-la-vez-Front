import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import { Header } from "../index";

const LogIn = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e: any) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setInputs({ 
      email: "",
      password: "",
    });

    console.log(inputs);
  };

  return (
    <S.MainWrapper>
      <Header></Header>
      <S.Main>
        <S.LoginWrapper onSubmit={handleSubmit}>
          <S.Title>
            <span>LOGIN</span>
            <Link to="/sign-up">회원가입</Link>
          </S.Title>
          <div className="input-wrapper">
            <input
              onChange={onChange}
              placeholder="이메일을 입력해주세요"
              type="text"
              name="email"
              value={email}
            />
            <input
              onChange={onChange}
              placeholder="비밀번호를 입력해주세요"
              type="password"
              name="password"
              value={password}
            />
          </div>

          <button type="submit">가입하기</button>
        </S.LoginWrapper>
      </S.Main>
    </S.MainWrapper>
  );
};

export default LogIn;