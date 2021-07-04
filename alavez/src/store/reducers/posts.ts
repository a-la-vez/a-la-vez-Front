import { ADD_POSTING, DELETE_POSTING } from "../action";

const initialState = [
  {
    id: 1,
    title: "Sdfsdfs",
    description: "포스팅 1",
  },
];

const posts = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POSTING:
      return state.concat(action.post);
    case DELETE_POSTING:
      return state.filter((post) => post.id !== action.id);
    default:
      return state;
  }
};

export default posts;
