import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Main = styled.div`
  height: 960px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const ProfileWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .profile-img {
    cursor: pointer;
    min-height: 230px;
    min-width: 230px;
    width: 240px;
    height: 240px;
    border: 1px solid #80808073;
    border-radius: 100%;
    object-fit: cover;
  }

  input {
    display: none;
  }
`;

export const ProfileIntro = styled.div`
  margin-top: 10px;
  width: 93%;
  display: flex;
  flex-direction: column;
  padding: 5px;

  .profile-name {
    font-size: 24px;
    line-height: 1.25;
    margin-top: 10px;
  }

  .profile-text {
    margin-top: 10px;
    padding-bottom: 7px;
    border-bottom: 2px solid #6f2dff;
    width: 100%;
    color: #464444bd;
  }

  .profile-sub {
    margin-top: 10px;
    display: flex;
    align-items: center;

    img {
      width: 20px;
      margin-right: 10px;
    }
  }
`;

export const ProfileItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  // 나의 그룹 리스트
  ul {
    width: 100%;
    padding-left: 20px;
    max-height: 500px;

    & li {
      margin: 5px;
      cursor: pointer;
      padding: 3px;
    }
  }

  img {
    cursor: pointer;
    margin-right: 20px;
    margin-left: 20px;
    width: 30px;
    height: 30px;
    color: white;
  }
`;

export const Group = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #80808047;
  border-radius: 5px;

  & img:nth-child(1) {
    border-radius: 50px;
    width: 45px;
    height: 45px;
  }

  :hover {
    background-color: #d6d2d21a;
    transition: all 0.3s;
  }
`;

export const GroupTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  width: 100%;

  .list-sub {
    color: #464444bd;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  span:nth-child(1) {
    cursor: pointer;
  }
`;

export const ProfileChange = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;

  & button {
    margin: 10px;
    outline: none;
    background-color: #6f2dff;
    color: white;
    box-shadow: 2px 2px 2px #80808063;
    border-radius: 5px;
    padding: 3px;
    border: none;
  }
`;

export const SubMeun = styled.div`
  & ul {
    list-style: none;
    display: flex;
    flex-direction: row;
  }
`;
