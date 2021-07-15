import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import {
  ApplyForm,
  GroupDetailHeader,
  Content,
  BottomComment,
} from "../../index";
import * as S from "./style/style";

const GroupDetail = () => {
  const [apply, setApply] = useState<boolean>(false);
  const groupDetail = useSelector((state: RootState) => state.posts);

  return (
    <>
      <ApplyForm apply={apply} setApply={setApply} />
      <S.MainWrapper>
        <S.GroupDetailContent>
          <GroupDetailHeader groupDetail={groupDetail} />
          <Content setApply={setApply} groupDetail={groupDetail} />
          <BottomComment />
        </S.GroupDetailContent>
      </S.MainWrapper>
    </>
  );
};

export default GroupDetail;
