import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../header/style";
import * as S from "./style";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    name: "",
    nickName: "",
    email: "",
    password: "",
    rePassword: "",
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
      name: "",
      nickName: "",
      email: "",
      password: "",
      rePassword: "",
    });

    console.log(inputs);
  };

  return (
    <S.MainWrapper>
      <Header></Header>
      <S.Main>
        <S.LoginWrapper onSubmit={handleSubmit}>
          <S.Title>
            <span>SIGN IN</span>
            <Link to="/sign-up">로그인</Link>
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

export default SignUp;
