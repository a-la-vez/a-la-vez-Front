import React from "react";
import { groupImg2 } from "../../../assets";
import * as S from "./style";

const groupDetail = [{}];

const GroupDetail = () => {
  return (
    <S.MainWrapper>
      <S.GroupDetailContent>
        <S.TopContent>
          <div className="group-img">
            <img src={groupImg2} alt="그룹이미지" />
          </div>
          <div className="side-detail">
            <div className="side-detail-top">
              <p></p>
            </div>
          </div>
        </S.TopContent>
        <S.BottomContent></S.BottomContent>
      </S.GroupDetailContent>
    </S.MainWrapper>
  );
};

export default GroupDetail;
