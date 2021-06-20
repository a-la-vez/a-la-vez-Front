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
