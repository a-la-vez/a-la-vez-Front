import axios from "axios";
import { useMutation } from "react-query";
import { Delete } from "../../../assets";
import * as S from "./style/style";

const CommentItem = (comments: any, index: number, setComments: any) => {
  const commentDelete = useMutation(async (id) =>
    axios.delete(`https://qovh.herokuapp.com/comment/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
  );

  const deleteIconClick = (id: any) => {
    commentDelete.mutate(id);
    setComments(
      comments.comments.filter((id: number) => comments.comments.id !== id)
    );
    console.log("댓글 삭제");
  };

  return (
    <S.Comment key={index}>
      <div className="user-info">
        <img src={comments.comments.imagePath} alt="사용자 프로필 사진" />
        <span>{comments.comments.userId}</span>
        <span>{comments.comments.createdAt}</span>
        <img
          src={Delete}
          onClick={() => deleteIconClick(comments.comments.id)}
          alt="댓글삭제아이콘"
        ></img>
      </div>
      <div className="content">{comments.comments.content}</div>
    </S.Comment>
  );
};

export default CommentItem;
