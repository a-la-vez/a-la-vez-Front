import styled from "styled-components";

/* interface contentProps {
  width: boolean;
} */

export const PostWrapper = styled.form`
  margin: 100px auto;
  width: 50%;
  min-width: 600px;
`;

export const PostHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #80808054;

  & input {
    margin-right: 10px;
    width: 25%;
    height: 30px;
    border: 2px solid #6f2dff;
    padding: 3px;
    outline: none;
  }
`;

export const Category = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 580px;
`;

export const ContentWrapper = styled.div`
  width: 100%auto;
  padding: 2% 0;
  height: 600px;
  display: flex;
  flex-direction: column;
`;

export const ContentTitle = styled.input`
  padding: 0 2%;
  width: 96%;
  height: 40px;
  border-radius: 3px;
  background-color: #8080801a;
  border: 1px solid #8080801a;
  outline: none;
  transition: all 0.3s;
`;

export const Content = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentSub = styled.textarea`
  padding: 2%;
  min-width: 55%;
  max-width: 55%;
  min-height: 280px;
  max-height: 280px;
  outline: none;
  border: none;
  border-radius: 3px;
  background-color: #8080801a;
  border: 1px solid #8080801a;
`;

export const ContentSide = styled.div`
  padding: 1%;
  width: 35%;
  height: 300px;
  border: 1px solid #80808042;
  box-shadow: 0 2px 5px #80808030;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  font-size: 15px;

  .content-side {
    margin-bottom: 20px;
    color: gray;
    width: 100%;
    display: flex;
    justify-content: space-between;

    & select,
    input {
      outline: none;
      padding: 0 5px;
      border: 2px solid #6f2dff;
    }
  }

  & label {
    .profile-img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }
  }
`;

export const PostButton = styled.button`
  margin: 50px auto;
  width: 300px;
  height: 30px;
  color: white;
  background-color: #6f2dff;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
`;
