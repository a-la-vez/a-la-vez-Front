import { Method } from "axios";

export interface requestParams {
  method: Method;
  url: String;
  header: Object;
  data: any;
}

export interface inputsState {
  nick: string;
  email: string;
  password: string;
  re_password: string;
  file: string;
}

export interface inputComfirm {
  confirm: string;
}

export interface a {
  data: inputsState;
}

export interface button {
  id: number;
  button: string;
}
