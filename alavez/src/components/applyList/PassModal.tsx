import React from "react";
import { close } from "../../assets";
import { ToastContainer } from "react-toastify";
import * as S from "./style";
import { ToastSuccess } from "../../hook/toastHook";

interface PassModalProps {
  openModal: boolean;
  setOpenModal: any;
  userId: number;
}

const PassModal = ({ openModal, setOpenModal, userId }: PassModalProps) => {
  
  return (
    <S.PassModalWrapper style={{ display: openModal ? "flex" : "none" }}>
      <ToastContainer />
      <S.PassModal>
        <img
          src={close}
          alt="닫기 아이콘"
          onClick={() => setOpenModal(false)}
        />
        <h2>음음음음 스터디</h2>
        <p>
          강은빈 지원자를 승인 하시게되면 스터디에 참가할 수 있고, 카카오톡
          채팅방에 초대 할 수 있습니다.
        </p>
        <div className="button-item">
          <button
            onClick={() => {
              setOpenModal(false);
              ToastSuccess("승인되었습니다.");
            }}
          >
            승인
          </button>
          <button>거부</button>
        </div>
      </S.PassModal>
    </S.PassModalWrapper>
  );
};

export default PassModal;
