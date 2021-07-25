import axios from "axios";
import { inputsState } from "../../../interfaces/login";
import { request, MAINURL } from "../../axios/axios";

export function auth(data: inputsState) {
  console.log(data);
  return request("POST", "auth/join", {}, data);
}

export const joinPost = async (data: inputsState) => {
  const { data: response } = await axios.post(`${MAINURL}/auth/join`, data);
  return response.data;
};
