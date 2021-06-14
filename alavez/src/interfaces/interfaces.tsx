import { Method } from "axios";

export interface requestParams {
  method: Method;
  url: String;
  header: Object;
  data: any;
}

export interface inputsState {
  name: string;
  nick: string;
  email: string;
  confirm: string;
  password: string;
  re_password: string;
  file: string;
}

export interface a {
  data: inputsState;
}

export interface button {
  id: number;
  button: string;
}
