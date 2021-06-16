import React, { useState } from "react";
import { useRef } from "react";
import { cancel } from "../../assets";
import { inputComfirm, modal } from "../../interfaces/login";
import * as S from "./style";

const ConfirmModal = ({ modal, setModal }: modal) => {
  const [btnColor, setBtnColor] = useState<boolean>(false);

  const [inputs, setInputs] = useState<inputComfirm>({
    confirm: "",
  });

  const { confirm } = inputs;

  const onChange = (e: React.InputHTMLAttributes<HTMLInputElement> | any) => {
    const { value, name } = e.target;

    if (value !== "") {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }

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

  const closeModal = () => {
    setModal(!modal);
  };

  return (
    <S.ModalWrapper modal={modal}>
      <S.ConfirmWrapper onSubmit={handleSubmit}>
        <S.Title>
          <span>인증번호 확인</span>
          <img src={cancel} alt="닫기 버튼" onClick={closeModal}></img>
        </S.Title>
        <S.ConfirmText>이메일 인증번호를 입력해주세요.</S.ConfirmText>
        <div className="sign-wrapper">
          <input
            className="confirm-input"
            onChange={onChange}
            placeholder="인증번호를 입력해주세요"
            type="text"
            name="confirm"
            value={confirm}
          />
        </div>
        <button
          type="submit"
          className="confirm-button"
          style={{ backgroundColor: btnColor ? "#6f2dff" : "pink" }}
          onClick={closeModal}
        >
          가입하기
        </button>
      </S.ConfirmWrapper>
    </S.ModalWrapper>
  );
};

export default ConfirmModal;
