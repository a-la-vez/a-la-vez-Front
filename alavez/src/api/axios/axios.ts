import axios, { Method } from "axios";

const MAINURL = "http://localhost:3000/";

export function request(
  method: Method,
  url: String,
  header: Object,
  data: any
) {
  return axios({
    method,
    url: MAINURL + url,
    headers: header,
    data: data,
  })
    .then((res) => {
      // 성공
      console.log("다 받기 성공");
      console.log(res);
      return res;
    })
    .catch((e) => {
      // 오류
      console.error(e);
    });
}