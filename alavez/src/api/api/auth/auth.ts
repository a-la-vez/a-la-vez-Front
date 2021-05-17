import { inputsState } from "../../../interfaces/interfaces";
import { request } from "../../axios/axios";

export function auth(data: inputsState) {
  console.log(data);
  return request("POST", "auth/join", {}, data);
}
