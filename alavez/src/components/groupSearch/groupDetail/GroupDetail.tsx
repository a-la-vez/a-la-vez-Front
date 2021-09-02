import axios from "axios";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { ToastSuccess } from "../../../hook/toastHook";
import {
  ApplyForm,
  GroupDetailHeader,
  Content,
  BottomComment,
} from "../../index";
import * as S from "./style/style";

const GroupDetail = ({ match }: any) => {
  const [apply, setApply] = useState<boolean>(false);
  const history = useHistory();

  const { isLoading, error, data } = useQuery("postDetail", async () =>
    axios(`https://qovh.herokuapp.com/post/${match.params.id}`)
  );

  const postDelete = useMutation(() =>
    axios
      .delete(`https://qovh.herokuapp.com/post/${match.params.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        ToastSuccess("스터디 그룹이 삭제되었습니다.");

        setTimeout(() => {
          history.push("/");
        }, 3000);
      })
  );

  const deleteClickHandler = (id: any) => {
    postDelete.mutate(id);
  };

  return (
    <>
      <ApplyForm apply={apply} setApply={setApply} postId={match.params.id} />
      <S.MainWrapper>
        {error && <>데이터를 불러올 수 없습니다.</>}
        {isLoading ? (
          <>잠시만 기달려주세요.</>
        ) : (
          <S.GroupDetailContent>
            <GroupDetailHeader
              groupDetail={data?.data.post}
              postDelete={deleteClickHandler}
              history={history}
            />
            <Content
              setApply={setApply}
              groupDetail={data?.data.post}
              postId={match.params.id}
            />
            <BottomComment postId={match.params.id} />
          </S.GroupDetailContent>
        )}
      </S.MainWrapper>
    </>
  );
};

export default GroupDetail;
