import React, { useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import { inputsState } from "../../interfaces/login";
import axios from "axios";
import { useMutation } from "react-query";

const SignUp = () => {
  const [fileUrl, setFileUrl] = useState("");
  const [user, serUser] = useState<object>({});

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
    nick: "",
    email: "",
    password: "",
    re_password: "",
    file: "",
  });

  const { nick, email, password, re_password, file } = inputs;

  const onChange = (e: React.InputHTMLAttributes<HTMLInputElement> | any) => {
    const { value, name } = e.target;

    console.log(value);

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const mutation = useMutation((inputs) =>
    axios.post("https://qovh.herokuapp.com/auth/join", inputs).then((res) => {
      serUser(res.data);
    })
  );

  const handleSubmit = async (
    e: any | React.FormEventHandler<HTMLFormElement>,
    data: any
  ) => {
    e.preventDefault();

    setInputs({
      nick: "",
      email: "",
      password: "",
      re_password: "",
      file: "",
    });

    mutation.mutate(data);
  };

  return (
    <S.MainWrapper>
      <S.Main>
        <S.LoginWrapper onSubmit={(e) => handleSubmit(e, inputs)}>
          <S.Title>
            <span>SIGN IN</span>
            <Link to="/login">로그인 &gt; </Link>
          </S.Title>
          <div className="sign-wrapper">
            {/* 프로필 사진  */}
            <label>
              <img src={fileUrl} alt="프로필 사진" className="profile-img" />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  processImage(e);
                  onChange(e);
                  console.log(e.target.files);
                }}
                className="profile-item"
                name="file"
                value={file}
              ></input>
            </label>

            {/* 회원가입 입력창 */}
            <div className="input-wrapper">
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
