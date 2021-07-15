export const ADD_POSTING = "ADD_POSTING"; // 게시글 등록
export const EDIT_POSTING = "EDIT_POSTING"; // 게시글 수정
export const DELETE_POSTING = "DELETE_POSTING"; // 게시글 삭제
export const ADD_COMMENT = "ADD_COMMENT"; // 댓글 작성
export const DELETE_COMMENT = "DELETE_COMMENT"; // 댓글 삭제
export const ADMISSION_APPLY = "ADMISSION_APPLY"; // 신청 승인
export const REJECT_APPLY = "REJECT_APPLY"; // 신청 거절

// 신청 승인 멤버 추가
export const admission_apply = (id: number) => {
  return {
    type: "ADMISSION_APPLY",
    payload: id,
  };
};

//승인 거부 리스트 삭제
export const rejectApply = (id: number) => {
  return {
    type: "REJECT_APPLY",
    payload: id,
  };
};

//댓글 작성
export const addComment = (id: number) => {
  return {
    type: "ADD_COMMENT",
    payload: id,
  };
};

//댓글 삭제
export const deleteComment = (id: number) => {
  return {
    type: "DELETE_COMMENT",
    payload: id,
  };
};

// 게시글 삭제
export const deletePosting = (id: number) => {
  return { type: "DELETE_POSTING", payload: id };
};
