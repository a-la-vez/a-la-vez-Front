import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 55%;
  height: 100%;
  margin: 85px auto;
  border: 1px solid red;
`;

export const GroupDetailContent = styled.div`
  width: 100%;
  border: 1px solid red;
`;

export const TopContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  .group-img {
    width: 55%;
    height: 500px;

    & img {
      width: 100%;
      object-fit: cover;
    }
  }

  .side-detail {
    margin-left: 5%;
    width: 40%;
    height: 500px;
    border: 1px solid red;
  }
`;

export const BottomContent = styled.div``;
