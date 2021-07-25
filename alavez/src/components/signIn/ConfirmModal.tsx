import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { cancel } from "../../assets";
import { inputComfirm, modal } from "../../interfaces/login";
import axios from "axios";
import * as S from "./style";

const ConfirmModal = ({ modal, setModal, user }: modal) => {
  const [btnColor, setBtnColor] = useState<boolean>(false);

  const [inputs, setInputs] = useState<inputComfirm>({
    code: "",
    user: user.user,
  });

  const { code } = inputs;

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

  const mutation = useMutation((inputs) =>
    axios.post("http://192.168.137.38:3000/auth/code", inputs)
  );

  const handleSubmit = (
    e: any | React.FormEventHandler<HTMLFormElement>,
    data: any
  ) => {
    e.preventDefault();

    setInputs({
      code: "",
      user: user.user,
    });

    console.log(data);

    mutation.mutate(data);
    console.log(inputs);
  };

  const closeModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <S.ModalWrapper modal={modal}>
      <S.ConfirmWrapper onSubmit={(e) => handleSubmit(e, inputs)}>
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
            name="code"
            value={code}
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
