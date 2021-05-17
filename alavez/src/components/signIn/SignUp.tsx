import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../api/api/auth/auth";
import { inputsState } from "../../interfaces/interfaces";
import { Header } from "../index";
import * as S from "./style";

const SignUp = () => {
  const [fileUrl, setFileUrl] = useState("");

  //이미지 파일 선택시 미리보기
  function processImage(
    event: React.ChangeEventHandler<HTMLInputElement> | any
  ) {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
  }

  // input 상태 정리
  const [inputs, setInputs] = useState<inputsState>({
    name: "",
    nick: "",
    email: "",
    confirm: "",
    password: "",
    re_password: "",
    file: "",
  });

  const { name, nick, email, confirm, password, re_password, file } = inputs;

  const onChange = (e: React.InputHTMLAttributes<HTMLInputElement> | any) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e: any | React.FormEventHandler<HTMLFormElement>) => {
    e.preventDefault();

    setInputs({
      name: "",
      nick: "",
      email: "",
      confirm: "",
      password: "",
      re_password: "",
      file: "",
    });

    auth(inputs);
    console.log(inputs);
  };

  return (
    <S.MainWrapper>
      <Header></Header>
      <S.Main>
        <S.LoginWrapper onSubmit={handleSubmit}>
          <S.Title>
            <span>SIGN IN</span>
            <Link to="/sign-up">로그인 &gt; </Link>
          </S.Title>
          <div className="sign-wrapper">
            {/* 프로필 사진  */}
            <label>
              <img src={fileUrl} alt="프로필 사진" className="profile-img" />
              <input
                type="file"
                accept="image/*"
                onChange={processImage}
                className="profile-item"
                name="file"
                value={file}
              ></input>
            </label>

            {/* 회원가입 입력창 */}
            <div className="input-wrapper">
              <input
                onChange={onChange}
                placeholder="이름을 입력해주세요"
                type="text"
                name="name"
                value={name}
              />
              <input
                onChange={onChange}
                placeholder="닉네임을 입력해주세요"
                type="text"
                name="nick"
                value={nick}
              />
              <input
                onChange={onChange}
                placeholder="이메일을 입력해주세요"
                type="text"
                name="email"
                value={email}
              />
              <input
                onChange={onChange}
                placeholder="인증번호를 입력해주세요"
                type="text"
                name="confirm"
                value={confirm}
              />
              <input
                onChange={onChange}
                placeholder="비밀번호를 입력해주세요"
                type="password"
                name="password"
                value={password}
              />
              <input
                onChange={onChange}
                placeholder="비밀번호를 다시 입력해주세요"
                type="password"
                name="re_password"
                value={re_password}
              />
            </div>
          </div>

          <button type="submit">가입하기</button>
        </S.LoginWrapper>
      </S.Main>
    </S.MainWrapper>
  );
};

export default SignUp;
