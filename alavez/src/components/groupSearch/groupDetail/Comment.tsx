import React from "react";
import * as S from "./style/style";

const comment = (comments: any, index: number) => {
  return (
    <S.Comment key={index}>
      <div className="user-info">
        <img src={comments.comments.ImagePath} alt="사용자 프로필 사진" />
        <span>{comments.comments.UserName}</span>
        <span>{comments.comments.CreatedAt}</span>
      </div>
      <div className="content">{comments.comments.Content}</div>
    </S.Comment>
  );
};

export default comment;
