import { Delete } from "../../../assets";
import { CommentType } from "../../../interfaces/group";
import * as S from "./style/style";

const CommentItem = (comments: any, index: number) => {
  return (
    <S.Comment key={index}>
      <div className="user-info">
        <img src={comments.imagePath} alt="사용자 프로필 사진" />
        <span>{comments.userId}</span>
        <span>{comments.createdAt}</span>
        <img src={Delete} alt="댓글삭제아이콘"></img>
      </div>
      <div className="content">{comments.content}</div>
    </S.Comment>
  );
};

export default CommentItem;
