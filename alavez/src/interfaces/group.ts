export interface CategoryType {
  id: number;
  name: string;
}

export interface ListDummyType {
  Id: number;
  Title: string;
  describe: string;
  Period: string;
}

export interface GroupDetailType extends ListDummyType {
  ImagePath: string;
  Content: string;
  CreatedAt: string;
  UpdatedAt: string;
  Category: string;
  Hire: boolean;
}

export interface CommentType {
  id: number;
  imagePath?: string;
  content: string;
  createdAt: string;
  userId: number;
  writingId: number;
}

export interface CommentPropsState extends CommentType {
  comment: [];
}

// 그룹 props type
export interface groupDetailProps {
  setApply?: any;
  groupDetail: any;
  match?: any;
  location?: any;
  postDelete?: any;
  history?: any;
  postId?: number;
}

export const categoryList: CategoryType[] = [
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
    Id: 1,
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Id: 2,
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Id: 3,
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Id: 4,
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Id: 5,
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Id: 5,
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Id: 5,
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Id: 5,
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Id: 5,
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Id: 5,
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Id: 5,
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
  {
    Id: 5,
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },

  {
    Id: 5,
    Title: "대덕마이스터고등학교 공부할 사람!!!",
    describe: "인원 6명",
    Period: "2020202",
  },
];
