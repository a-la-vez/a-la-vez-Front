import { addComment, deleteComment, deletePosting, rejectApply } from ".";

export type ApplyAction = ReturnType<typeof rejectApply>;
export type postAction = ReturnType<typeof deletePosting>;
export type CommentAction =
  | ReturnType<typeof deleteComment>
  | ReturnType<typeof addComment>;
