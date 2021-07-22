import { groupImg2 } from "../../assets";
import { CommentType } from "../../interfaces/group";
import { CommentAction } from "../action/actionType";

const initialState: CommentType[] = [
  {
    id: 1,
    ImagePath: groupImg2,
    Content: "Sdfsdfsdf",
    CreatedAt: "2020-20-20",
    UserName: "은빈",
  },
  {
    id: 2,
    ImagePath: groupImg2,
    Content: "Sdfsdfsdf",
    CreatedAt: "2020-20-20",
    UserName: "은빈",
  },
  {
    id: 3,
    ImagePath: groupImg2,
    Content: "Sdfsdfsdf",
    CreatedAt: "2020-20-20",
    UserName: "은빈",
  },
];

type commentType = CommentType[];

const comments = (
  state: commentType = initialState,
  action: CommentAction
): commentType => {
  switch (action.type) {
    case "DELETE_COMMENT":
      return state.filter((comment) => comment.id !== action.payload);
    default:
      return state;
  }
};

export default comments;
