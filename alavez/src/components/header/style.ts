import styled from "styled-components";

interface HeaderProps {
  select: boolean;
}
//헤더
export const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  background: white;
  top: 0;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 12px;

  .container {
    .menu-list {
      display: flex;
      width: 800px;
      font-size: 14px;
      flex-direction: row;
      justify-content: space-around;
      margin: 0 auto;
      list-style: none;
      text-align: center;

      //호버시 밑줄
      li {
        width: 100%;
        transition: all 0.3s ease;
      }

      li > a {
        position: relative;
        text-decoration: none;
        color: black;
      }

      li > a::after {
        content: "";
        width: 0%;
        left: 50%;
        height: 1px;
        display: block;
        position: absolute;
        margin-top: 3px;
        border-bottom: 2px solid #6f2dff;
        transition: all 0.3s ease;
      }

      li:hover > a::after {
        content: "";
        width: 100%;
        left: 0px;
        height: 1px;
        display: block;
        position: absolute;
        margin-top: 3px;
        border-bottom: 2px solid #6f2dff;
        transition: all 0.3s ease;
      }
    }
  }
`;
