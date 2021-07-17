import { groupImg2 } from "../../assets";
import { CommentType } from "../../interfaces/group";
import { CommentAction } from "../action/actionType";

const initialState: CommentType[] = [
  {
    Id: 1,
    ImagePath: groupImg2,
    Content: "Sdfsdfsdf",
    CreatedAt: "2020-20-20",
    UserName: "은빈",
  },
];

const comments = (
  state: CommentType[] = initialState,
  action: CommentAction
) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [...state, state.concat({})];
    case "DELETE_COMMENT":
      return state.filter((comment) => comment.Id !== action.payload);
    default:
      return state;
  }
};

export default comments;
