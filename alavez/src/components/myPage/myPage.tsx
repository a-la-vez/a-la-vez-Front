import { useState } from "react";
import * as S from "./style";
import { company, location } from "../../assets";
import GroupList from "./GroupList";
import { dummyList } from "../../interfaces/myPage";

export const dummy: dummyList[] = [
  {
    title: "대덕마이스터고등학교 공부 할 사람 구해여!!",
    describe: "총 인원 10명",
    period: "2021-06-04 ~ 2021-06-04",
  },
  {
    title: "대마고",
    describe: "열심히 화이팅 !!",
    period: "2021-06-04 ~ 2021-06-04",
  },
  {
    title: "대마고",
    describe: "열심히 화이팅 !!",
    period: "2021-06-04 ~ 2021-06-04",
  },
  {
    title: "대마고",
    describe: "열심히 화이팅 !!",
    period: "2021-06-04 ~ 2021-06-04",
  },
  {
    title: "대마고",
    describe: "열심히 화이팅 !!",
    period: "2021-06-04 ~ 2021-06-04",
  },
  {
    title: "대마고",
    describe: "열심히 화이팅 !!",
    period: "2021-06-04 ~ 2021-06-04",
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
  const [selected, setSelected] = useState<number>(1);

  function processImage(e: React.ChangeEventHandler<HTMLInputElement> | any) {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
  }

  const buttonClickHandler = (list: any) => {
    console.log("클릭");
    setSelected(list.id);
  };

  return (
    <>
      <S.MainWrapper>
        <S.Main className="profile-container">
          {/* 프로필 싸개 */}
          <S.ProfileWrapper>
            {/* 프로필 사진 / 수정  */}
            <label>
              <img className="profile-img" src={fileUrl} alt="프로필 사진" />
              <input
                type="file"
                onChange={processImage}
                placeholder="프로필 수정하기"
              />
            </label>
            <S.ProfileIntro>
              <div className="profile-name">강은빈</div>
              <div className="profile-text">
                안녕하세요. 저는 현재 대덕소프트웨어 마이스터고등학교에 재학중
                입니다.
              </div>
              <div className="profile-sub">
                <img src={location} alt="위치 아이콘" />
                <span>대덕소프트웨어마이스터고등학교</span>
              </div>
              <div className="profile-sub">
                <img src={company} alt="소속 아이콘" />
                <span>대덕소프트웨어마이스터고등학교</span>
              </div>
            </S.ProfileIntro>
            <S.ProfileChange>
              <button>프로필 수정하기</button>
            </S.ProfileChange>
            {/* 프로필 소개 */}
          </S.ProfileWrapper>
          {/* 속해있는 그룹 */}
          <S.ProfileItem>
            <S.SubMeun>
              <ul>
                {buttonList.map((list) => (
                  <li
                    style={{
                      borderBottom:
                        list.id === selected ? "2px solid #6f2dff" : "none",
                    }}
                    onClick={() => buttonClickHandler(list)}
                    key={list.id}
                  >
                    {list.name}
                  </li>
                ))}
              </ul>
            </S.SubMeun>
            <ul>
              {dummy.map((e: dummyList, index: number): any => (
                <>
                  <GroupList key={index} e={e} />
                </>
              ))}
            </ul>
          </S.ProfileItem>
        </S.Main>
      </S.MainWrapper>
    </>
  );
};

export default MyPage;
