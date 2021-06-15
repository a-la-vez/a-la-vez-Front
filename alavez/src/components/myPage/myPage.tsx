import React, { useState } from "react";
import * as S from "./style";
import { Header } from "../index";
import GroupList from "./GroupList";

interface dummyList {
  title: String;
  describe: String;
}

const dummy: dummyList[] = [
  {
    title: "대마고",
    describe: "열심히 화이팅 !!",
  },
  {
    title: "대마고",
    describe: "열심히 화이팅 !!",
  },
  {
    title: "대마고",
    describe: "열심히 화이팅 !!",
  },
  {
    title: "대마고",
    describe: "열심히 화이팅 !!",
  },
  {
    title: "대마고",
    describe: "열심히 화이팅 !!",
  },
  {
    title: "대마고",
    describe: "열심히 화이팅 !!",
  },
];

const buttonList = [
  {
    id: 1,
    name: "My Group",
  },
  {
    id: 2,
    name: "Favorites",
  },
];

const MyPage = () => {
  const [fileUrl, setFileUrl] = useState<string>("");
  const [fontSize, setFontSize] = useState<string>("");
  const [count, setCount] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(1);

  function processImage(e: React.ChangeEventHandler<HTMLInputElement> | any) {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
  }

  const listClickHandler = () => {
    if (count) {
      setFontSize("bold");
    } else {
      setFontSize("normal");
    }
    setCount(!count);
  };

  const buttonClickHandler = (list: any) => {
    console.log("클릭");
    setSelected(list.id);
  };

  return (
    <>
      <S.MainWrapper>
        <Header />
        <S.Main className="profile-container">
          {/* 프로필 싸개 */}
          <S.ProfileWrapper>
            {/* 프로필 사진 / 수정  */}
            <S.ProfileImg>
              <label>
                <img src={fileUrl} alt="프로필 사진" />
                <input
                  type="file"
                  onChange={processImage}
                  placeholder="프로필 수정하기"
                />
              </label>
              <S.ProfileChange>
                <button>비밀번호 수정하기</button>
                <button>프로필 수정하기</button>
              </S.ProfileChange>
            </S.ProfileImg>
            {/* 프로필 소개 */}
            <S.ProfileIntro>
              <div className="profile-text">강은빈</div>
              <div className="profile-text">열심히 하겠습니다!!</div>
            </S.ProfileIntro>
          </S.ProfileWrapper>
          {/* 속해있는 그룹 */}
          <S.ProfileItem>
            <div className="profile-item">
              <S.SubMeun>
                <ul>
                  {buttonList.map((list) => (
                    <li
                      style={{
                        borderBottom: list.id === selected ? "2px solid #6f2dff" : "none",
                      }}
                      onClick={() => buttonClickHandler(list)}
                      key={list.id}
                    >
                      {list.name}
                    </li>
                  ))}
                </ul>
              </S.SubMeun>
              <div className="group-list">
                <ul>
                  {dummy.map((e: dummyList, index: number): any => (
                    <>
                      <GroupList key={index} e={e} />
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </S.ProfileItem>
        </S.Main>
      </S.MainWrapper>
    </>
  );
};

export default MyPage;
