import { useEffect } from "react";
import { useState } from "react";
import * as S from "./style/ApplyStyle";
import { close } from "../../../assets";
import { ToastError, ToastSuccess } from "../../../hook/toastHook";
import { useMutation } from "react-query";
import axios from "axios";

interface ApplyFormProps {
  apply: boolean;
  setApply: any;
  postId: number;
}

const ApplyForm = ({ apply, setApply, postId }: ApplyFormProps) => {
  const [lineColor, setLineColor] = useState<boolean>(false);
  const [phoneLineColor, setPhoneLineColor] = useState<boolean>(false);
  const [sentenceLineColor, setsentenceLineColor] = useState<boolean>(false);
  const [buttonColor, setButtonColor] = useState<boolean>(false);

  const mutation = useMutation((inputs) =>
    axios.post(`https://qovh.herokuapp.com/application/${postId}`, inputs, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
  );

  const [inputs, setInputs] = useState({
    nick: "",
    phone_number: "",
    sentence: "",
  });

  const { nick, sentence, phone_number } = inputs;

  const onChange = (e: any) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e: any, data: any) => {
    e.preventDefault();

    mutation.mutate(data);

    if (nick === "" || phone_number === "" || sentence === "") {
      ToastError("항목을 모두 채워주세요");
    } else {
      ToastSuccess("스터디 신청이 되었습니다.");
      setApply(false);
      setLineColor(false);
      setPhoneLineColor(false);
      setsentenceLineColor(false);
      setButtonColor(false);

      setInputs({
        nick: "",
        phone_number: "",
        sentence: "",
      });
    }

    console.log(inputs);
  };

  useEffect(() => {
    if (nick.length > 0 && sentence.length > 0 && phone_number !== "") {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }

    if (nick.length > 0) {
      setLineColor(true);
    } else {
      setLineColor(false);
    }

    if (phone_number !== "") {
      setPhoneLineColor(true);
    } else {
      setPhoneLineColor(false);
    }

    if (sentence.length > 0) {
      setsentenceLineColor(true);
    } else {
      setsentenceLineColor(false);
    }
  }, [nick, sentence, phone_number]);

  return (
    <S.ApplyWrapper style={{ display: apply ? "flex" : "none" }}>
      <S.ApplyForm onSubmit={(e) => handleSubmit(e, inputs)}>
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
              type="phone_number"
              onChange={onChange}
              value={phone_number}
              name="phone_number"
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
              value={sentence}
              name="sentence"
              style={{
                borderBottom: sentenceLineColor
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
