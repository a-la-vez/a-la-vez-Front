import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { heart, heartCheck } from "../../../assets";
import { groupDetailProps } from "../../../interfaces/group";
import * as S from "./style/style";

const Content = ({ setApply, groupDetail, postId }: groupDetailProps) => {
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

  /*  const { isSuccess } = useQuery("heartClick", () =>
    axios(`https://qovh.herokuapp.com/heart/${postId}`)
  ); */

  return (
    <S.TopContent>
      <div className="group-img">
        <img src={groupDetail.imagePath} alt="그룹이미지" />
      </div>
      <div className="side-detail">
        <div className="side-detail-top">
          <p>{groupDetail.title}</p>
          <p>모집기간 : {groupDetail.period}</p>
        </div>
        <div className="side-detail-mid">
          <p>{groupDetail.content}</p>
          <div className="button-item">
            <img
              src={heartClick}
              alt="즐겨찾기 아이콘"
              onClick={() => {
                heartClickhandler();
              }}
            />
            <button onClick={() => setApply(true)}>신청하기</button>
          </div>
        </div>
      </div>
    </S.TopContent>
  );
};

export default Content;
