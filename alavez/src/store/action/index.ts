export const ADD_POSTING = "ADD_POSTING"; // 게시글 등록
export const EDIT_POSTING = "EDIT_POSTING"; // 게시글 수정
export const DELETE_POSTING = "DELETE_POSTING"; // 게시글 삭제
export const ADMISSION_APPLY = "ADMISSION_APPLY"; // 신청 승인
export const REJECT_APPLY = "REJECT_APPLY"; // 신청 거절

//승인 거부 리스트 삭제
export const deletePosting = (id: number) => {
  return {
    type: DELETE_POSTING,
    id,
  };
};

export const rejectApply = (id: number) => {
  return {
    type: "REJECT_APPLY",
    payload: id,
  };
};
