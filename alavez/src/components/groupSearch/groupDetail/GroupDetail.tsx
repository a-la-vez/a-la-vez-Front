import axios from "axios";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import {
  ApplyForm,
  GroupDetailHeader,
  Content,
  BottomComment,
} from "../../index";
import * as S from "./style/style";

const GroupDetail = ({ match }: any) => {
  const [apply, setApply] = useState<boolean>(false);

  const { isLoading, error, data } = useQuery("postDetail", () =>
    axios(`https://qovh.herokuapp.com/post/${match.params.id}`)
  );

  const postDelete = useMutation(() =>
    axios
      .delete(`https://qovh.herokuapp.com/post/${match.params.id}`)
      .then(() => {
        console.log("삭제되었습니다.");
      })
  );

  postDelete.mutate();

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
            <GroupDetailHeader
              groupDetail={data?.data.post}
              postDelete={postDelete}
            />
            <Content setApply={setApply} groupDetail={data?.data.post} />
            <BottomComment />
          </S.GroupDetailContent>
        )}
      </S.MainWrapper>
    </>
  );
};

export default GroupDetail;
