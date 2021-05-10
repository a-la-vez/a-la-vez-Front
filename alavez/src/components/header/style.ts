import styled from "styled-components";

//헤더
export const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;

  .container {
    margin: 0 auto;
    width: 65%;
    height: 50px;
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    align-items: center;

    .menu-list {
      display: flex;
      width: 50%;
      font-size: 13px;
      flex-direction: row;
      justify-content: space-around;
      margin: 0 auto;
      list-style: none;

      //호버시 밑줄
      li {
        width: 100%;
      }
      li:hover {
        color: #6f2dff;
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
