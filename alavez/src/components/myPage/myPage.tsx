import React, { useState } from "react";
import * as S from "./style";
import { Header } from "../index";
import { heart, heartCheck } from "../../assets";

const MyPage = () => {
  const [fileUrl, setFileUrl] = useState("");
  const [heartClick, setHeartClick] = useState("");

  function processImage(e: React.ChangeEventHandler<HTMLInputElement> | any) {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
  }

  const heartClickhandler = () => {
    console.log("클릭");
    setHeartClick("heartCheck");
  };

  return (
    <>
      <S.MainWrapper>
        <Header />
        <S.Main className="container">
          <S.ProfileWrapper>
            <S.ProfileImg>
              <label>
                <img src={fileUrl} alt="#" />
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
                    <div className="group">
                      <img src="#" alt="#" />
                      <div className="group-title">
                        <span>title</span>
                        <span>대덕마이스터고등학교</span>
                      </div>
                      <img src={heart} alt="하트" onClick={heartClickhandler} />
                    </div>
                    <div className="group">
                      <img src="#" alt="#" />
                      <div className="group-title">
                        <span>title</span>
                        <span>대덕마이스터고등학교</span>
                      </div>
                      <img src={heart} alt="하트" />
                    </div>
                    <div className="group">
                      <img src="#" alt="#" />
                      <div className="group-title">
                        <span>title</span>
                        <span>대덕마이스터고등학교</span>
                      </div>
                      <img src={heart} alt="하트" />
                    </div>
                    <div className="group">
                      <img src="#" alt="#" />
                      <div className="group-title">
                        <span>title</span>
                        <span>대덕마이스터고등학교</span>
                      </div>
                      <img src={heart} alt="하트" />
                    </div>
                    <div className="group">
                      <img src="#" alt="#" />
                      <div className="group-title">
                        <span>title</span>
                        <span>대덕마이스터고등학교</span>
                      </div>
                      <img src={heart} alt="하트" />
                    </div>
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
