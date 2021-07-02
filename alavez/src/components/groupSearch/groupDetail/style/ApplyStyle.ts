import styled from "styled-components";

export const ApplyWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #00000042;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 4;
`;

export const ApplyForm = styled.form`
  width: 20%;
  height: 450px;
  background-color: white;
  margin: auto;
  border-radius: 3px;
  box-shadow: 0px 1px 8px #808080c4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;

  & img {
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
  }
  & h2 {
    margin: 20px;
  }

  & button {
    width: 74%;
    background-color: pink;
    color: white;
    transition: all 0.3s;
  }
`;

export const InputWrapper = styled.div`
  width: 74%;

  .question {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    & span {
      font-weight: 500;
      margin: 7px 0;
    }

    & input {
      border: none;
      border-bottom: 2px solid #6f2dff;
      outline: none;
      padding: 5px;
      transition: all 0.3s;
    }
  }
`;
