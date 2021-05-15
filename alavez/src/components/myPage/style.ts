import styled from "styled-components";

export const MainWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 100vh;
`;

export const Main = styled.div`
  height: 960px;
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProfileImg = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    min-height: 150px;
    min-width: 150px;
    width: 150px;
    height: 150px;
    border: 1px solid #80808073;
    border-radius: 100%;
    object-fit: cover;
  }

  input {
    display: none;
  }

  .profile-intro {
    padding-left: 30px;
    margin: 30px;
    width: 30%;
    display: flex;
    flex-direction: column;

    .profile-text {
      margin: 10px;
      padding-bottom: 3px;
      border-bottom: 2px solid #6f2dff;
      width: 100%auto;
    }
  }
`;

export const ProfileItem = styled.div`
  width: 100%;

  .profile-item {
    width: 100%;
    margin-top: 70px;
    display: flex;
    align-items: center;
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
    overflow: auto;
  }

  .group-list {
    width: 70%;
  }

  .group {
    margin-top: 20px;
    width: 98%;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid gray;
    border-radius: 5px;

    .group-title {
      display: flex;
      flex-direction: column;
      margin-right: auto;
    }

    img {
      margin-right: 20px;
      margin-left: 20px;
      width: 30px;
      height: 30px;
      color: white;
    }
  }
`;

export const ProfileChange = styled.div`
  display: flex;
  flex-direction: column;

  & button {
    outline: none;
    margin: 10px;
  }
`;
