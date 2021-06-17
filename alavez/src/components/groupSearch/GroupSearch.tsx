import React from "react";
import * as S from "./style";
import { useState } from "react";
import { glass, groupImg } from "../../assets";

const button = [
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
    name: "운동",
  },
];

const inputClickHandler = () => {};

const GroupSearch = () => {
  const [selected, setSelected] = useState<number>(1);

  const categoryClickHandler = (button: any) => {
    setSelected(button.id);
  };

  return (
    <S.MainWrapper>
      <S.Search>
        <S.InputWrapper>
          <input type="text" placeholder="검색을 해주세요" />
          <div className="glass-item">
            <img src={glass} alt="검색 아이콘" />
          </div>
        </S.InputWrapper>

        <S.Post>
          <button>그룹 만들기</button>
        </S.Post>
      </S.Search>
      <div className="input-infomation">
        다양한 그룹을 검색하실 수 있습니다.
      </div>
      <S.Category>
        {button.map((button, index) => (
          <button
            key={index}
            style={{
              backgroundColor: button.id === selected ? "#6f2dff" : "#80808029",
              color: button.id === selected ? "white" : "black",
            }}
            onClick={() => categoryClickHandler(button)}
          >
            {button.name}
          </button>
        ))}
      </S.Category>
      <S.GroupWrapper>
        <S.GroupItem>
          <div className="group-img">
            <img src={groupImg} alt="그룹 베너 사진"></img>
          </div>
          <S.GroupDescribe>
            <p>대덕마이스터고등학교 공부할 사람!!!</p>
            <span>인원 6명 구함</span>
            <span>2021-06-17 ~ 21-06-18</span>
          </S.GroupDescribe>
        </S.GroupItem>
        <S.GroupItem>
          <div className="group-img">
            <img src={groupImg} alt="그룹 베너 사진"></img>
          </div>
          <S.GroupDescribe>
            <p>대덕마이스터고등학교 공부할 사람!!!</p>
            <span>인원 6명 구함</span>
            <span>2021-06-17 ~ 21-06-18</span>
          </S.GroupDescribe>
        </S.GroupItem>
        <S.GroupItem>
          <div className="group-img">
            <img src={groupImg} alt="그룹 베너 사진"></img>
          </div>
          <S.GroupDescribe>
            <p>대덕마이스터고등학교 공부할 사람!!!</p>
            <span>인원 6명 구함</span>
            <span>2021-06-17 ~ 21-06-18</span>
          </S.GroupDescribe>
        </S.GroupItem>
        <S.GroupItem>
          <div className="group-img">
            <img src={groupImg} alt="그룹 베너 사진"></img>
          </div>
          <S.GroupDescribe>
            <p>대덕마이스터고등학교 공부할 사람!!!</p>
            <span>인원 6명 구함</span>
            <span>2021-06-17 ~ 21-06-18</span>
          </S.GroupDescribe>
        </S.GroupItem>
        <S.GroupItem>
          <div className="group-img">
            <img src={groupImg} alt="그룹 베너 사진"></img>
          </div>
          <S.GroupDescribe>
            <p>대덕마이스터고등학교 공부할 사람!!!</p>
            <span>인원 6명 구함</span>
            <span>2021-06-17 ~ 21-06-18</span>
          </S.GroupDescribe>
        </S.GroupItem>
        <S.GroupItem>
          <div className="group-img">
            <img src={groupImg} alt="그룹 베너 사진"></img>
          </div>
          <S.GroupDescribe>
            <p>대덕마이스터고등학교 공부할 사람!!!</p>
            <span>인원 6명 구함</span>
            <span>2021-06-17 ~ 21-06-18</span>
          </S.GroupDescribe>
        </S.GroupItem>
        <S.GroupItem>
          <div className="group-img">
            <img src={groupImg} alt="그룹 베너 사진"></img>
          </div>
          <S.GroupDescribe>
            <p>대덕마이스터고등학교 공부할 사람!!!</p>
            <span>인원 6명 구함</span>
            <span>2021-06-17 ~ 21-06-18</span>
          </S.GroupDescribe>
        </S.GroupItem>
      </S.GroupWrapper>
    </S.MainWrapper>
  );
};

export default GroupSearch;
