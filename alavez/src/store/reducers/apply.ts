import { ApplyAction } from "../action/actionType";

interface applyType {
  id: number;
  groupName: string;
  name: string;
  phone: string;
  reason: string;
  pass: boolean;
}

const initialState: applyType[] = [
  {
    id: 1,
    groupName: "스터디인데용",
    name: "강은빈",
    phone: "01044380803",
    reason: "열심히 하겠습니다!!",
    pass: true,
  },
  {
    id: 2,
    groupName: "스터디인데용",
    name: "강은빈",
    phone: "01044380803",
    reason: "열심히 하겠습니다!!",
    pass: true,
  },
  {
    id: 3,
    groupName: "스터디인데용",
    name: "강은빈",
    phone: "01044380803",
    reason: "열심히 하겠습니다!!",
    pass: true,
  },
  {
    id: 4,
    groupName: "스터디인데용",
    name: "강은빈",
    phone: "01044380803",
    reason: "열심히 하겠습니다!!",
    pass: true,
  },
  {
    id: 5,
    groupName: "안녕시에",
    name: "강은빈",
    phone: "01044380803",
    reason: "열심히 하겠습니다!!",
    pass: true,
  },
];

export type applyTypes = applyType[];

const apply = (state: applyTypes = initialState, action: ApplyAction) => {
  switch (action.type) {
    case "REJECT_APPLY":
      return state.filter((apply) => apply.id !== action.payload);
    default:
      return state;
  }
};

export default apply;
