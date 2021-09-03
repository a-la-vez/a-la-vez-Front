import * as S from "./style/style";
import { Delete } from "../../../assets";
import { groupDetailProps } from "../../../interfaces/group";

const GroupDetailHeader = ({
  groupDetail,
  postDelete,
  history,
}: groupDetailProps) => {
  return (
    <S.GroupDetailHeader>
      <div className="category">
        <div className="category-item">{groupDetail?.category}</div>
      </div>
      <div className="date">
        <div
          onClick={() => history.push(`/post/modify?id=${groupDetail.id}`)}
          className="modify-group"
        >
          스터디 수정
        </div>
        <span>작성일 : {groupDetail.createdAt}</span>
        <span>수정일 : {groupDetail.UpdatedAt}</span>
        <img
          src={Delete}
          onClick={() => postDelete(groupDetail.id)}
          alt="삭제아이콘"
        />
      </div>
    </S.GroupDetailHeader>
  );
};

export default GroupDetailHeader;
