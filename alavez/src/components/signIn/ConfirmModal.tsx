import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../api/api/auth/auth";
import { inputComfirm, inputsState } from "../../interfaces/interfaces";
import { Header } from "../index";
import * as S from "./style";

const ConfirmModal = () => {
  // input 상태 정리
  const [inputs, setInputs] = useState<inputComfirm>({
    confirm: "",
  });

  const { confirm } = inputs;

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
      confirm: "",
    });

    console.log(inputs);
  };

  return (
    <S.ModalWrapper>
      <S.ConfirmModal className="">
        <S.LoginWrapper onSubmit={handleSubmit}>
          <S.Title>
            <span>SIGN IN</span>
            <Link to="/sign-up">로그인 &gt; </Link>
          </S.Title>
          <div className="sign-wrapper">
            <input
              onChange={onChange}
              placeholder="인증번호를 입력해주세요"
              type="text"
              name="confirm"
              value={confirm}
            />
          </div>
          <button type="submit">가입하기</button>
        </S.LoginWrapper>
      </S.ConfirmModal>
    </S.ModalWrapper>
  );
};

export default ConfirmModal;
