import Axios from "axios";

const MAINURL = "";

export function request(
  method: String | any,
  url: String | any,
  header: String | any,
  data: String | any
) {
  return Axios({
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
