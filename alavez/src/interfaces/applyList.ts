export interface ApplyListType {
  id: number;
  groupName: string;
  name: string;
  phone: string;
  reason: string;
  pass: boolean;
}

export interface StudyMemberListType extends ApplyListType {}

export interface ListProps {
  count: any;
  setOpenModal?: any;
  setUserId?: any;
}

export const studyMemberListDummy: StudyMemberListType[] = [
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
    groupName: "스터디인데용",
    name: "강은빈",
    phone: "01044380803",
    reason: "열심히 하겠습니다!!",
    pass: true,
  },
];
