import { useState } from "react";
import * as S from "./style";
import "./Paging.css";
import { PassModal } from "../index";
import Pagination from "react-js-pagination";
import { useEffect } from "react";
import List from "./List";

const ApplyList = () => {
  const [page, setPage] = useState<number>(1);
  const [wait, setWait] = useState<boolean>(true);
  const [member, setMember] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handlePageChange = (page: number) => {
    setPage(page);
    console.log(page);
  };

  return (
    <>
      <S.ApplyListWrapper>
        <S.ApplySubMenu>
          <ul>
            <li
              onClick={() => {
                setWait(!wait);
                setMember(false);
                setCount(1);
              }}
              style={{ fontWeight: wait ? "bold" : "normal" }}
            >
              신청 대기 목록
            </li>
            <li
              onClick={() => {
                setMember(!member);
                setWait(false);
                setCount(2);
              }}
              style={{ fontWeight: member ? "bold" : "normal" }}
            >
              스터디 팀원 목록
            </li>
          </ul>
        </S.ApplySubMenu>
        <S.ApplyHeader>
          <ul>
            <li>스터디이름</li>
            <li>이름</li>
            <li>전화번호</li>
            <li>각오 한마디</li>
            <li>모집 여부</li>
          </ul>
        </S.ApplyHeader>
        <List count={count} />
        <S.PageNumber>
          <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={100}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
          />
        </S.PageNumber>
      </S.ApplyListWrapper>
    </>
  );
};

export default ApplyList;
