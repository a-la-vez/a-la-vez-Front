import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 55%;
  height: 100%;
  margin: 0 auto;

  .input-infomation {
    height: 28px;
    position: relative;
    top: -55px;
    border-radius: 5px;
    box-shadow: 0 5px 7px #77737326;
    transition: all 0.5s ease-in-out;
    overflow: hidden;

    display: flex;
    justify-content: center;

    & p {
      padding: 4px;
      font-size: 14px;
      color: black;
    }
  }
`;

export const Search = styled.div`
  margin: 70px 0 20px 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  transition: all 0.5s;
  width: 30%;
  height: 86%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #6f2dff;

  & input {
    width: 80%;
    height: 30px;
    outline: none;
    padding-left: 10px;
    border: none;
  }

  .glass-item {
    height: 100%;
    width: 16%;
    display: flex;
    justify-content: center;
    background-color: #6f2dff;

    & img {
      width: 22px;
      cursor: pointer;
    }
  }
`;

export const Post = styled.div`
  & button {
    cursor: pointer;
    color: white;
    width: 80px;
    padding: 5px;
    border-radius: 3px;
    background-color: #6f2dff;
    border: none;
    outline: none;
    box-shadow: 0 2px 8px #8080806e;
  }
`;

export const Category = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const GroupWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const GroupItem = styled.div`
  width: 23%;
  padding: 1%;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  .group-img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 4px;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;

    :hover {
      transform: scale(1.1);
    }
  }
`;

export const GroupDescribe = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & a {
    text-decoration: none;
    color: black;
    font-weight: 500;
  }

  & span {
    margin-top: 10px;
    color: #808080fa;
    font-size: 15px;
    text-align: end;
  }
`;
