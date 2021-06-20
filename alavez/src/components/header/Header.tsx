import { useState } from "react";
import { Link } from "react-router-dom";
import { LinkListType } from "../../interfaces/interfaces";
import * as S from "./style";

const linkList: LinkListType[] = [
  {
    id: 1,
    to: "/group-search",
    name: "그룹찾기",
  },
  {
    id: 2,
    to: "/post-make",
    name: "그룹 생성",
  },
  {
    id: 3,
    to: "/my-page",
    name: "마이페이지",
  },
  {
    id: 4,
    to: "/login",
    name: "로그인",
  },
];

const Header = () => {
  const [select, setSelect] = useState<number>(0);

  const haderClick = (list: any) => {
    setSelect(list.id);
  };

  return (
    <>
      <S.HeaderWrapper>
        <div className="container">
          <img src="#" alt="logo" />
          <ul className="menu-list">
            {linkList.map((list, index) => (
              <li key={index}>
                <Link
                  to={list.to}
                  style={{
                    borderBottom:
                      list.id === select ? "2px solid #6f2dff" : "none",
                  }}
                  onClick={() => haderClick(list)}
                >
                  {list.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </S.HeaderWrapper>
    </>
  );
};

export default Header;
