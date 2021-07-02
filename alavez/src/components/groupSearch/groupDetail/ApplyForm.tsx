import { useEffect } from "react";
import { useState } from "react";
import * as S from "./style/ApplyStyle";
import { close } from "../../../assets";

interface ApplyFormProps {
  apply: boolean;
  setApply: any;
}

const ApplyForm = ({ apply, setApply }: ApplyFormProps) => {
  const [lineColor, setLineColor] = useState<boolean>(false);
  const [phoneLineColor, setPhoneLineColor] = useState<boolean>(false);
  const [reasonLineColor, setReasonLineColor] = useState<boolean>(false);
  const [buttonColor, setButtonColor] = useState<boolean>(false);

  const [inputs, setInputs] = useState({
    nick: "",
    phone: "",
    reason: "",
  });

  const { nick, reason, phone } = inputs;

  const onChange = (e: any) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const SubmitHandler = (e: any) => {
    e.preventDefault();

    if (nick === "" || phone === "" || reason === "") {
      alert("항목을 모두 채워주세요");
    } else {
      alert("스터디 신청이 되었습니다.");
      setApply(false);
      setLineColor(false);
      setPhoneLineColor(false);
      setReasonLineColor(false);
      setButtonColor(false);

      setInputs({
        nick: "",
        phone: "",
        reason: "",
      });
    }

    console.log(inputs);
  };

  useEffect(() => {
    if (nick.length > 0 && reason.length > 0 && phone !== "") {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }

    if (nick.length > 0) {
      setLineColor(true);
    } else {
      setLineColor(false);
    }

    if (phone !== "") {
      setPhoneLineColor(true);
    } else {
      setPhoneLineColor(false);
    }

    if (reason.length > 0) {
      setReasonLineColor(true);
    } else {
      setReasonLineColor(false);
    }
  }, [nick, reason, phone]);

  return (
    <S.ApplyWrapper style={{ display: apply ? "flex" : "none" }}>
      <S.ApplyForm onSubmit={SubmitHandler}>
        <img src={close} alt="닫기 아이콘" onClick={() => setApply(false)} />
        <h2>음음음음음 제목임</h2>
        <S.InputWrapper>
          <div className="question">
            <span>이름</span>
            <input
              placeholder="사용하실 이름을 입력해주세요"
              type="text"
              onChange={onChange}
              value={nick}
              name="nick"
              style={{
                borderBottom: lineColor
                  ? "2px solid #6f2dff"
                  : "2px solid pink",
              }}
            />
          </div>
          <div className="question">
            <span>전화번호</span>
            <input
              placeholder="'-'를 제외하고 입력해주세요"
              type="phone"
              onChange={onChange}
              value={phone}
              name="phone"
              style={{
                borderBottom: phoneLineColor
                  ? "2px solid #6f2dff"
                  : "2px solid pink",
              }}
            />
          </div>
          <div className="question">
            <span>각오 한마디</span>
            <input
              placeholder="자신을 표현해보세요!"
              type="text"
              onChange={onChange}
              value={reason}
              name="reason"
              style={{
                borderBottom: reasonLineColor
                  ? "2px solid #6f2dff"
                  : "2px solid pink",
              }}
            />
          </div>
        </S.InputWrapper>
        <button
          className="default-button"
          style={{ backgroundColor: buttonColor ? "#6f2dff" : "pink" }}
        >
          신청하기
        </button>
      </S.ApplyForm>
    </S.ApplyWrapper>
  );
};

export default ApplyForm;
