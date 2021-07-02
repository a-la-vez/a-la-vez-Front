import { useState } from "react";
import * as S from "./style";
import "./Paging.css";
import { applyListDummy } from "../../interfaces/applyList";
import { PassModal } from "../index";
import Pagination from "react-js-pagination";

const ApplyList = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [page, setPage] = useState(1);

  const handlePageChange = (page: number) => {
    setPage(page);
    console.log(page);
  };

  return (
    <>
      <PassModal openModal={openModal} setOpenModal={setOpenModal} />
      <S.ApplyListWrapper>
        <S.ApplyHeader>
          <ul>
            <li>스터디이름</li>
            <li>이름</li>
            <li>생년월일</li>
            <li>각오 한마디</li>
            <li>모집 여부</li>
          </ul>
        </S.ApplyHeader>
        <S.ApplyList>
          {applyListDummy.map((i) => (
            <ul>
              <li>{i.groupName}</li>
              <li>{i.name}</li>
              <li>{i.date}</li>
              <li>{i.reason}</li>
              <button
                onClick={() => setOpenModal(true)}
                className="default-button"
              >
                승인여부
              </button>
            </ul>
          ))}
        </S.ApplyList>
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
