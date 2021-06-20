import React, { useState } from "react";
import * as S from "./style";
import { groupImg2, heart, heartCheck } from "../../assets";

const GroupList = (e: any) => {
  const [heartClick, setHeartClick] = useState(heart);
  const [count, setCount] = useState<boolean>(false);

  // 하트 채우기
  const heartClickhandler = () => {
    if (count) {
      setHeartClick(heart);
    } else {
      setHeartClick(heartCheck);
    }
    setCount(!count);
  };

  return (
    <S.Group key={e.index}>
      <img src={groupImg2} alt="#" />
      <S.GroupTitle className="group-title">
        <span>{e.e.title}</span>
        <div className="list-sub">
          <span>{e.e.describe}</span>
          <span>{e.e.period}</span>
        </div>
      </S.GroupTitle>
      <img src={heartClick} alt="하트" onClick={heartClickhandler} />
    </S.Group>
  );
};

export default GroupList;
