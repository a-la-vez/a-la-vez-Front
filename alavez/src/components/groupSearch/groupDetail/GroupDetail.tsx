import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import {
  ApplyForm,
  GroupDetailHeader,
  Content,
  BottomComment,
} from "../../index";
import * as S from "./style/style";

const GroupDetail = ({ match }: any) => {
  const [apply, setApply] = useState<boolean>(false);
  const groupDetail = useSelector((state: RootState) => state.posts);

  const { isLoading, error, data } = useQuery("postDetail", () =>
    axios(`https://qovh.herokuapp.com/post/${match.params.id}`)
  );

  console.log(data?.data.post);

  return (
    <>
      <ApplyForm apply={apply} setApply={setApply} />
      <S.MainWrapper>
        {error && <>데이터를 불러올 수 없습니다.</>}
        {isLoading ? (
          <>잠시만 기달려주세요.</>
        ) : (
          <S.GroupDetailContent>
            <GroupDetailHeader groupDetail={groupDetail} />
            <Content setApply={setApply} groupDetail={groupDetail} />
            <BottomComment />
          </S.GroupDetailContent>
        )}
      </S.MainWrapper>
    </>
  );
};

export default GroupDetail;
