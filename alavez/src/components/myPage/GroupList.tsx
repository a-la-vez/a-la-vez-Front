import React, { useState } from "react";
import * as S from "./style";
import { heart, heartCheck } from "../../assets";

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
      <img src="" alt="#" />
      <S.GroupTitle className="group-title">
        <span>{e.e.title}</span>
        <span>{e.e.describe}</span>
      </S.GroupTitle>
      <img src={heartClick} alt="하트" onClick={heartClickhandler} />
    </S.Group>
  );
};

export default GroupList;
