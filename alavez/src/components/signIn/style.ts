import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const ModalWrapper = styled(MainWrapper)`
  background-color: #00000087;
  z-index: 3;
`;

export const Main = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;
`;

export const ConfirmModal = styled(Main)`
  width: 300px;
  background-color: white;
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
      cursor: pointer;
      min-width: 150px;
      min-height: 150px;
      object-fit: cover;
      width: 100px;
      height: 100px;
      border: 1px dotted #8080807a;
      border-radius: 100%;
    }
  }

  .input-wrapper {
    width: 53%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    input {
      padding-left: 10px;
      margin-bottom: 15px;
      width: 95%;
      height: 30px;
      outline: none;
      border-radius: 5px;
      border: 1px solid #8080807a;
    }

    & span {
      margin-bottom: 5px;
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
    cursor: pointer;
    width: 100%;
    height: 33px;
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
