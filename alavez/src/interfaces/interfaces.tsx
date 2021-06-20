import { Method } from "axios";

export interface requestParams {
  method: Method;
  url: String;
  header: Object;
  data: any;
}

export interface button {
  id: number;
  button: string;
}

export interface LinkListType {
  id: number;
  to: string;
  name: string;
}
