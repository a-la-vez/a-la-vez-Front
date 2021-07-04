export const ADD_POSTING = "ADD_POSTING";
export const EDIT_POSTING = "EDIT_POSTING";
export const DELETE_POSTING = "DELETE_POSTING";

//승인 거부 리스트 삭제
export const deletePosting = (id: number) => {
  return {
    type: DELETE_POSTING,
    id,
  };
};
