import * as S from "./style/style";
import { Delete } from "../../../assets";
import { groupDetailProps } from "../../../interfaces/group";

const GroupDetailHeader = ({ groupDetail }: groupDetailProps) => {
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
        <img src={Delete} alt="삭제아이콘" />
      </div>
    </S.GroupDetailHeader>
  );
};

export default GroupDetailHeader;
