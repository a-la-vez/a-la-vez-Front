import { useState } from "react";
import { heart, heartCheck } from "../../../assets";
import { groupDetailProps } from "../../../interfaces/group";
import * as S from "./style/style";

const Content = ({ setApply, groupDetail }: groupDetailProps) => {
  const [heartClick, setHeartClick] = useState(heart);
  const [count, setCount] = useState<boolean>(false);

  const heartClickhandler = () => {
    if (count) {
      setHeartClick(heart);
    } else {
      setHeartClick(heartCheck);
    }
    setCount(!count);
  };

  return (
    <S.TopContent>
      <div className="group-img">
        <img src={groupDetail.ImagePath} alt="그룹이미지" />
      </div>
      <div className="side-detail">
        <div className="side-detail-top">
          <p>{groupDetail.Title}</p>
          <p>모집기간 : {groupDetail.Period}</p>
        </div>
        <div className="side-detail-mid">
          <p>{groupDetail.Content}</p>
          <div className="button-item">
            <img
              src={heartClick}
              alt="즐겨찾기 아이콘"
              onClick={heartClickhandler}
            />
            {groupDetail.Hire ? (
              <button onClick={() => setApply(true)}>신청하기</button>
            ) : (
              <button onClick={() => alert("모집기간이 지났습니다.")}>
                신청불가
              </button>
            )}
          </div>
        </div>
      </div>
    </S.TopContent>
  );
};

export default Content;
