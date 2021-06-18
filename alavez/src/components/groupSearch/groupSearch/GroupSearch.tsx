import React from "react";
import * as S from "./style";
import { useState } from "react";
import { glass, groupImg, groupImg2 } from "../../../assets";
import { ButtonType, ListDummyType } from "../../../interfaces/group";

const button: ButtonType[] = [
  {
    id: 1,
    name: "전체",
  },
  {
    id: 2,
    name: "영어",
  },
  {
    id: 3,
    name: "프로젝트",
  },
  {
    id: 4,
    name: "전공",
  },
  {
    id: 5,
    name: "헬스",
  },
  {
    id: 6,
    name: "프론트",
  },
  {
    id: 7,
    name: "백엔드",
  },
  {
    id: 8,
    name: "안드로이드",
  },
  {
    id: 9,
    name: "IOS",
  },
];

const listDummy: ListDummyType[] = [
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    period: "2020202",
  },
];

const GroupSearch = () => {
  const [selected, setSelected] = useState<number>(1);
  const [input, setInput] = useState<boolean>(false);

  const categoryClickHandler = (button: any) => {
    setSelected(button.id);
  };

  const inputClickHandler = () => {
    console.log("클릭");
    setInput(!input);
  };

  return (
    <S.MainWrapper>
      <S.Search>
        <S.InputWrapper style={{ width: input ? "43%" : "" }}>
          <input
            type="text"
            placeholder="검색을 해주세요"
            onClick={inputClickHandler}
          />
          <div className="glass-item">
            <img src={glass} alt="검색 아이콘" />
          </div>
        </S.InputWrapper>

        <S.Post>
          <button>그룹 만들기</button>
        </S.Post>
      </S.Search>
      <div
        className="input-infomation"
        style={{
          width: input ? "30%" : " 0",
        }}
      >
        <p>다양한 그룹을 검색하실 수 있습니다.</p>
      </div>
      <S.Category>
        {button.map((button, index) => (
          <button
            key={index}
            style={{
              backgroundColor:
                button.id === selected
                  ? "#6f2dff"
                  : "rgba(128, 128, 128, 0.16)",
              color: button.id === selected ? "white" : "black",
            }}
            onClick={() => categoryClickHandler(button)}
          >
            {button.name}
          </button>
        ))}
      </S.Category>
      <S.GroupWrapper>
        {listDummy.map((list, index) => (
          <S.GroupItem key={index}>
            <div className="group-img">
              <img src={groupImg2} alt="그룹 베너 사진"></img>
            </div>
            <S.GroupDescribe>
              <a href="/group-detail/1">{list.Title}</a>
              <span>{list.describe}</span>
              <span>{list.period}</span>
            </S.GroupDescribe>
          </S.GroupItem>
        ))}
      </S.GroupWrapper>
    </S.MainWrapper>
  );
};

export default GroupSearch;
