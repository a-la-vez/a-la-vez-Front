import React from "react";
import { commentDummy, CommentType } from "../../../interfaces/group";
import * as S from "./style/style";

const Comment = (comments: any, index: number) => {
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

const BottomComment = () => {
  return (
    <S.BottomContent>
      <S.CommentWrapper>
        <S.CommentHeader>
          <span>댓글</span>
          <span>{commentDummy.length}개</span>
        </S.CommentHeader>
        <S.CommentInput>
          <input type="text" placeholder="댓글을 작성해주세요" />
        </S.CommentInput>
        {commentDummy.map((comment: CommentType, index: number): any => (
          <Comment key={index} comments={comment} />
        ))}
        <button className="comment-more">더보기</button>
      </S.CommentWrapper>
    </S.BottomContent>
  );
};

export default BottomComment;
