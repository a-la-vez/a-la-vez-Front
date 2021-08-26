import * as S from "./style/style";
import { Delete } from "../../../assets";
import { groupDetailProps } from "../../../interfaces/group";
import { useMutation, useQuery } from "react-query";
import axios from "axios";

const GroupDetailHeader = (
  { groupDetail }: groupDetailProps,
  { match }: any
) => {
  /* const { isLoading, data, error } = useQuery("postDetail", () => {
    axios(`https://qovh.herokuapp.com/post${id}`);
  }); */

  console.dir(match);

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
