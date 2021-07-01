import { useState } from "react";
import * as S from "./style/ApplyStyle";

interface ApplyFormProps {
  apply: boolean;
  setApply: any;
}

const ApplyForm = ({ apply, setApply }: ApplyFormProps) => {
  const [lineColor, setLineColor] = useState<boolean>(false);
  const [dataLineColor, setDateLineColor] = useState<boolean>(false);
  const [reasonLineColor, setReasonLineColor] = useState<boolean>(false);

  const [inputs, setInputs] = useState({
    nick: "",
    date: "",
    reason: "",
  });

  const { nick, reason, date } = inputs;

  const onChange = (e: any) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });

    if (nick.length > 1) {
      setLineColor(true);
    } else {
      setLineColor(false);
    }

    if (date !== "") {
      setDateLineColor(true);
    } else {
      setDateLineColor(false);
    }

    if (reason.length > 1) {
      setReasonLineColor(true);
    } else {
      setReasonLineColor(false);
    }
  };

  const SubmitHandler = (e: any) => {
    e.preventDefault();

    if (nick === "" || date === "" || reason === "") {
      alert("항목을 모두 채워주세요");
    } else {
      alert("스터디 신청이 되었습니다.");

      setApply(false);
      setInputs({
        nick: "",
        date: "",
        reason: "",
      });
    }

    console.log(inputs);
  };

  return (
    <S.ApplyWrapper style={{ display: apply ? "flex" : "none" }}>
      <S.ApplyForm onSubmit={SubmitHandler}>
        <h2>음음음음음 제목임</h2>
        <S.InputWrapper>
          <div className="question">
            <span>이름</span>
            <input
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
            <span>생년월일</span>
            <input
              type="date"
              onChange={onChange}
              value={date}
              name="date"
              style={{
                borderBottom: dataLineColor
                  ? "2px solid #6f2dff"
                  : "2px solid pink",
              }}
            />
          </div>
          <div className="question">
            <span>신청 이유</span>
            <input
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
        <button className="default-button">신청하기</button>
      </S.ApplyForm>
    </S.ApplyWrapper>
  );
};

export default ApplyForm;
