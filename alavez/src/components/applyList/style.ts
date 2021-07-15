import styled from "styled-components";

export const ApplyListWrapper = styled.div`
  margin: 100px auto;
  width: 50%;
  height: 770px;
  overflow: auto;
`;

export const ApplySubMenu = styled.div`
  width: 100%;
  margin-bottom: 20px;

  & ul {
    display: flex;
    flex-direction: row;

    & li {
      margin-right: 30px;
      cursor: pointer;
      font-size: 17px;
    }
  }
`;

export const ApplyHeader = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #8080807a;
  display: flex;
  align-items: center;

  & ul {
    width: 100%;
    display: flex;
    flex-direction: row;

    & li {
      list-style: none;
      text-align: center;
      font-size: 14px;
    }

    & li:nth-child(1) {
      width: 10%;
    }
    & li:nth-child(2) {
      width: 15%;
    }
    & li:nth-child(3) {
      width: 15%;
    }
    & li:nth-child(4) {
      width: 40%;
    }
    & li:nth-child(5) {
      width: 20%;
    }
  }
`;

export const ApplyList = styled.div`
  width: 100%;

  & ul {
    margin-top: 20px;
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;

    & li {
      list-style: none;
      text-align: center;
    }

    & li:nth-child(1) {
      width: 10%;
    }
    & li:nth-child(2) {
      width: 15%;
    }
    & li:nth-child(3) {
      width: 15%;
    }
    & li:nth-child(4) {
      width: 40%;
      overflow: auto;
    }

    & button {
      height: 30px;
      width: 18%;
      margin: 0 1%;
      box-shadow: 0 2px 3px #80808038;

      :hover {
        background-color: #6f2dff;
        color: white;
        transition: all 0.3s;
      }
    }
  }
`;

// 승인 요청/거절 모달
export const PassModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  background-color: #00000042;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PassModal = styled.div`
  width: 350px;
  height: 400px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;

  & img {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }

  & p {
    margin: 12%;
    color: #636161;
  }

  .button-item {
    display: flex;
    flex-direction: row;

    & button {
      width: 100px;
      margin: 10px;
      padding: 5px 10px;
      outline: none;
      border: none;
      border-radius: 5px;
      background-color: pink;
      color: white;

      :hover {
        background-color: #6f2dff;
        transition: all 0.3s;
      }
    }
  }
`;

export const PageNumber = styled.div`
  margin-top: 60px;
`;
