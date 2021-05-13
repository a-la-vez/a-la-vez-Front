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

const MyPage = () => {
  const [fileUrl, setFileUrl] = useState("");

  function processImage(e: React.ChangeEventHandler<HTMLInputElement> | any) {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
  }

  return (
    <>
      <S.MainWrapper>
        <Header />
        <S.Main className="container">
          <S.ProfileWrapper>
            <S.ProfileImg>
              <label>
                <img src={fileUrl} alt="프로필 사진" />
                <input
                  type="file"
                  onChange={processImage}
                  placeholder="프로필 수정하기"
                />
              </label>
              <div className="profile-intro">
                <div className="profile-text">강은빈</div>
                <div className="profile-text">열심히 하겠습니다!!</div>
              </div>
            </S.ProfileImg>
            <S.ProfileItem>
              <div className="profile-item">
                <div className="title">
                  <h3>나의 그룹</h3>
                  <span> | 즐겨 찾기</span>
                </div>

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
          </S.ProfileWrapper>
        </S.Main>
      </S.MainWrapper>
    </>
  );
};

export default MyPage;
