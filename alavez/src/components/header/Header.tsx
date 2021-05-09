import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const Header = () => {
  return (
    <S.Header>
      <div className="container">
        <img src="#" alt="logo" />
        <ul className="menu-list">
          <li>
            <Link to="#">그룹 찾기</Link>
          </li>
          <li>
            <Link to="#">가입된 그룹</Link>
          </li>
          <li>
            <Link to="#">즐겨찾기</Link>
          </li>
          <li>
            <Link to="#">마이페이지</Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
        </ul>
      </div>
    </S.Header>
  );
};

export default Header;
