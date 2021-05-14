import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 920px;
  display: flex;
  align-items: center;
`;

export const Main = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;
`;

export const MainCover = styled.div`
  width: 100%;
  height: 600px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  background-color: white;
`;

export const LoginWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  // 회원가입 스타일
  .sign-wrapper {
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .profile-item {
      display: none;
    }

    .profile-img {
      min-width: 100px;
      min-height: 100px;
      object-fit: cover;
      width: 100px;
      height: 100px;
      border: 1px solid #8080807a;
      border-radius: 100%;
    }
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      padding-left: 10px;
      margin-bottom: 15px;
      width: 100%;
      height: 30px;
      outline: none;
      border-radius: 5px;
      border: 1px solid #8080807a;
    }
  }

  // 로그인 스타일
  .login {
    margin-top: 30px;
  }

  .login-button {
    width: 52%;
  }

  button {
    width: 90%;
    height: 30px;
    outline: none;
    border-radius: 10px;
    margin-top: 30px;
    background-color: #6f2dff;
    color: white;
    border: none;
    box-shadow: 2px 3px 8px #80808075;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 25px;
  }

  a {
    text-decoration: none;
    color: #6f2dff;
    margin: 6px;
  }
`;
