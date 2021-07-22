import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Delete } from "../../../assets";
import { CommentType } from "../../../interfaces/group";
import { deleteComment } from "../../../store/action";
import { RootState } from "../../../store/reducers";
import * as S from "./style/style";

const Comment = (comments: any, index: number) => {
  const dispatch = useDispatch();

  return (
    <S.Comment key={index}>
      <div className="user-info">
        <img src={comments.comments.ImagePath} alt="사용자 프로필 사진" />
        <span>{comments.comments.UserName}</span>
        <span>{comments.comments.CreatedAt}</span>
        <img
          src={Delete}
          alt="댓글삭제아이콘"
          onClick={() => {
            dispatch(deleteComment(comments.comments.id));
            alert("댓글이 삭제되었습니다.");
          }}
        ></img>
      </div>
      <div className="content">{comments.comments.Content}</div>
    </S.Comment>
  );
};

const BottomComment = () => {
  const comments = useSelector((state: RootState) => state.comments);
  const [todoInput, setTodoInput] = useState<string>("");

  return (
    <S.BottomContent>
      <S.CommentWrapper>
        <S.CommentHeader>
          <span>댓글</span>
          <span>{comments.length}개</span>
        </S.CommentHeader>
        <S.CommentInput>
          <input type="text" placeholder="댓글을 작성해주세요" />
        </S.CommentInput>
        {comments?.map((comment: CommentType, index: number): any => (
          <Comment key={index} comments={comment} />
        ))}
        <button className="comment-more">더보기</button>
      </S.CommentWrapper>
    </S.BottomContent>
  );
};

export default BottomComment;
