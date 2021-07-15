import { groupImg2 } from "../../assets";
import { GroupDetailType } from "../../interfaces/group";
import { postAction } from "../action/actionType";

export const initialState: GroupDetailType = {
  Id: 1,
  Title: "대덕소프트웨어마이스터고등학교를 소개해요!",
  describe: "모집해요!!!",
  Period: "3일간",
  ImagePath: groupImg2,
  Content: "같이 공부할 사람 모집합니다.",
  CreatedAt: "2020-20-20",
  UpdatedAt: "2020-20-20",
  Category: "전공",
  Hire: true,
};

export type groupDetailTypes = GroupDetailType;

const posts = (state: groupDetailTypes = initialState, action: postAction) => {
  switch (action.type) {
    case "DELETE_POSTING":
      return state;
    default:
      return state;
  }
};

export default posts;
