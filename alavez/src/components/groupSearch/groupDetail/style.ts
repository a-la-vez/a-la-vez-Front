import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 55%;
  height: 100%;
  margin: 85px auto;
`;

export const GroupDetailContent = styled.div`
  width: 100%;
`;

export const GroupDetailHeader = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #4a4a4a;
  font-weight: 300;
  margin-bottom: 20px;

  .category {
    .category-item {
      padding: 6px;
      background-color: #6f2dff;
      color: white;
      border-radius: 10px;
    }
  }

  .date {
    span {
      margin: 0 10px;
    }
  }
`;

export const TopContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;

  .group-img {
    width: 55%;

    & img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
  }

  .side-detail {
    margin-left: 5%;
    width: 40%;
  }

  .side-detail-top {
    width: 100%;
    height: 110px;
    border-top: 1px solid #80808069;
    border-bottom: 1px solid #80808069;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p:nth-child(1) {
      font-weight: 500;
      font-size: 20px;
      margin-top: 10px;
    }

    p:nth-child(2) {
      float: right;
      margin-bottom: 10px;
    }
  }

  .side-detail-mid {
    border-bottom: 1px solid #80808069;
    height: 285px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & p {
      margin-top: 10px;
    }
  }

  .button-item {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    //즐겨찾기 아이콘
    & img {
      cursor: pointer;
      width: 30px;
      margin: 5px;
    }

    //신청하기 버튼
    & button {
      margin-bottom: 5px;
      padding: 8px;
      cursor: pointer;
      width: 100%;
      outline: none;
      border: none;
      background-color: #ff9aac94;
      color: white;
      border-radius: 4px;

      :hover {
        background-color: #6f2dff;
        transition: all 0.6s ease-out;
      }
    }
  }
`;

export const BottomContent = styled.div`
  width: 100%;
  border-top: 1px solid #80808069;
`;

export const CommentWrapper = styled.div`
  width: 100%;
  height: 100%;

  //더보기 버튼
  .comment-more {
    cursor: pointer;
    margin-top: 20px;
    width: 100%;
    height: 40px;
    padding: 5px;
    border: 1px solid #e4e5ed;
    background: #fff;
    color: #9a9ba7;
    outline: none;
    font-size: 15px;
  }
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #80808069;

  & span {
    margin: 0 5px;
  }
`;

export const CommentInput = styled.div`
  width: 50%;
  margin-top: 10px;

  & input {
    padding: 3px 10px;
    width: 90%;
    height: 30px;
    outline: none;
    border: 1px solid #80808047;
    border-radius: 11px;
    background-color: #b5b3b314;
  }
`;

export const Comment = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #80808069;

  .user-info {
    display: flex;
    flex-direction: row;
    align-items: center;

    & img {
      width: 40px;
      height: 40px;
      border-radius: 50px;
    }
    & span {
      margin: 0 8px;
      font-size: 15px;
      color: #9a9ba7;
    }
  }

  .content {
    margin-top: 20px;
    color: #555969;
    line-height: 1.5;
  }
`;
