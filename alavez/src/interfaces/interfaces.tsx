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
