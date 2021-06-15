import styled from "styled-components";

export const MainWrapper = styled.div`
  margin-top: 50px;
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
`;

export const ProfileImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    cursor: pointer;
    min-height: 200px;
    min-width: 200px;
    width: 150px;
    height: 150px;
    border: 1px solid #80808073;
    border-radius: 100%;
    object-fit: cover;
  }

  input {
    display: none;
  }
`;

export const ProfileIntro = styled.div`
  padding-left: 30px;
  margin-top: 10px;
  width: 80%;
  display: flex;
  flex-direction: column;

  .profile-text {
    margin: 10px;
    padding-bottom: 3px;
    border-bottom: 2px solid #6f2dff;
    width: 100%;
  }
`;

export interface a {
  font: string;
}

export const ProfileItem = styled.div`
  width: 100%;

  .profile-item {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .title {
      display: flex;
      flex-direction: row;
    }
  }

  ul {
    width: 100%;
    max-height: 500px;

    & li {
      margin: 5px;
      cursor: pointer;
      padding: 3px;
    }
  }

  .group-list {
    width: 100%;
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
  box-shadow: 2px 1px 4px #8080802e;
`;

export const GroupTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

export const ProfileChange = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  width: 70%;

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
