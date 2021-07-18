import { groupImg2 } from "../../assets";
import { CommentType } from "../../interfaces/group";
import { CommentAction } from "../action/actionType";

export type comment = {
  id: number;
  content: string | number;
};

const initialState: comment[] = [
  {
    id: 1,
    content: "Sdfsdfsdf",
  },
  {
    id: 2,
    content: "Sdfsdfsdf",
  },
];

type commentType = comment[];

const comments = (
  state: commentType = initialState,
  action: CommentAction
): commentType => {
  switch (action.type) {
    case "ADD_COMMENT":
      const todo = {
        id: Date.now().toString(),
        content: action.payload,
      };
      return [...state, todo];
    case "DELETE_COMMENT":
      return state.filter((comment) => comment.id !== action.payload);
    default:
      return state;
  }
};

export default comments;
