import "styled-components";

declare module "styled-components" {
  // 우리가 아는 타입지정을 여기서 다해주고 불러서 쓰기
  // 1. 인터페이스 지정
  export interface myPageStyle {}

  export interface SubMeunStyle {
    bold: {
      fontWeight: string;
    };

    normal: {
      fontWeight: string;
    };
    response: {};
  }
}
