import * as S from "./style/style";
import { Delete } from "../../../assets";
import { groupDetailProps } from "../../../interfaces/group";

const GroupDetailHeader = ({ groupDetail, postDelete }: groupDetailProps) => {
  console.log(groupDetail);
  return (
    <S.GroupDetailHeader>
      <div className="category">
        <div className="category-item">{groupDetail?.category}</div>
      </div>
      <div className="date">
        <a href="/post" className="modify-group">
          스터디 수정
        </a>
        <span>작성일 : {groupDetail.createdAt}</span>
        <span>수정일 : {groupDetail.UpdatedAt}</span>
        <img src={Delete} onClick={() => postDelete()} alt="삭제아이콘" />
      </div>
    </S.GroupDetailHeader>
  );
};

export default GroupDetailHeader;
