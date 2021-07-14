import { groupDetail } from "../../../interfaces/group";
import * as S from "./style/style";

const GroupDetailHeader = () => {
  return (
    <S.GroupDetailHeader>
      <div className="category">
        <div className="category-item">{groupDetail.Category}</div>
      </div>
      <div className="date">
        <a href="/post" className="modify-group">
          스터디 수정
        </a>
        <span>작성일 : {groupDetail.CreatedAt}</span>
        <span>수정일 : {groupDetail.UpdatedAt}</span>
      </div>
    </S.GroupDetailHeader>
  );
};

export default GroupDetailHeader;
