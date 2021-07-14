import { useState } from "react";
import {
  ApplyForm,
  GroupDetailHeader,
  Content,
  BottomComment,
} from "../../index";
import * as S from "./style/style";

const GroupDetail = () => {
  const [apply, setApply] = useState<boolean>(false);

  return (
    <>
      <ApplyForm apply={apply} setApply={setApply} />
      <S.MainWrapper>
        <S.GroupDetailContent>
          <GroupDetailHeader />
          <Content setApply={setApply} />
          <BottomComment />
        </S.GroupDetailContent>
      </S.MainWrapper>
    </>
  );
};

export default GroupDetail;
