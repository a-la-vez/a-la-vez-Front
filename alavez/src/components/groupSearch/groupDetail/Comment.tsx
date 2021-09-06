import { useState, useEffect } from "react";
import * as S from "./style/style";
import { CommentType } from "../../../interfaces/group";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CommentItem from "./CommentItem";
import { useMutation, useQuery } from "react-query";
import axios from "axios";

interface Props {
  postId: number;
}

const BottomComment = ({ postId }: Props) => {
  const [comments, setComments] = useState<any>([]);
  const [content, setContent] = useState<any>({ content: "" });

  const { data } = useQuery("comments", async () =>
    axios(`https://qovh.herokuapp.com/comment/findAll/${postId}`)
  );

  const commentWrite = useMutation(async (content) =>
    axios.post(`https://qovh.herokuapp.com/comment/write/${postId}`, content, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
  );

  const commentKeyPress = (e: any, content: any) => {
    if (e.key === "Enter") {
      commentWrite.mutate(content);
      setContent({ content: content });
      setComments(comments.concat(content));
    }
  };

  useEffect(() => {
    setComments(data?.data?.comments);
  }, [data]);

  return (
    <S.BottomContent>
      <ToastContainer />
      <S.CommentWrapper>
        <S.CommentHeader>
          <span>댓글</span>
          <span>{comments?.length}개</span>
        </S.CommentHeader>
        <S.CommentInput>
          <input
            type="text"
            placeholder="댓글을 작성해주세요"
            onChange={(e) => setContent({ content: e.target.value })}
            onKeyPress={(e) => commentKeyPress(e, content)}
          />
        </S.CommentInput>
        {comments?.length === 0 ? (
          <div className="comment-none">댓글이 없습니다.</div>
        ) : (
          <>
            {comments?.map((comment: CommentType, index: number): any => (
              <CommentItem
                key={index}
                comments={comment}
                setComments={setComments}
              />
            ))}
            {comments?.length >= 5 ? (
              <button className="comment-more">더보기</button>
            ) : null}
          </>
        )}
      </S.CommentWrapper>
    </S.BottomContent>
  );
};

export default BottomComment;
