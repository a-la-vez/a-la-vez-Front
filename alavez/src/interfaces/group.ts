export interface ButtonType {
  id: number;
  name: string;
}

export interface ListDummyType {
  Title: string;
  describe: string;
  period: string;
}

export interface groupDetail extends ListDummyType {
  ImagePath: string;
  Content: string;
  CreatedAt: string;
  UpdatedAt: string;
  Period: string;
  Category: string;
}
