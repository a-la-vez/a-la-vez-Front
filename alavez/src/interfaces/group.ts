export interface ButtonType {
  id: number;
  name: string;
}

export interface ListDummyType {
  Title: string;
  describe: string;
  Period: string;
}

export interface GroupDetailType extends ListDummyType {
  Id: number;
  ImagePath: string;
  Content: string;
  CreatedAt: string;
  UpdatedAt: string;
  Category: string;
}

export interface CommentType {
  ImagePath: string;
  Content: string;
  CreatedAt: string;
  UserName: string;
}

export interface CommentPropsState extends CommentType {
  comment: [];
}

export const button: ButtonType[] = [
  {
    id: 1,
    name: "전체",
  },
  {
    id: 2,
    name: "수학",
  },
  {
    id: 3,
    name: "영어",
  },
  {
    id: 4,
    name: "프로젝트",
  },
  {
    id: 5,
    name: "프론트",
  },
  {
    id: 6,
    name: "백엔드",
  },
  {
    id: 7,
    name: "안드로이드",
  },
  {
    id: 10,
    name: "IOS",
  },
  {
    id: 11,
    name: "AI",
  },
  {
    id: 12,
    name: "게임",
  },
  {
    id: 13,
    name: "기타",
  },
];

export const listDummy: ListDummyType[] = [
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
];
