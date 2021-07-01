import * as S from "./style";
import { useState } from "react";
import { glass, groupImg2 } from "../../../assets";
import { button, listDummy } from "../../../interfaces/group";
import { ApplyForm } from "../../index";
import { useRef } from "react";

const GroupSearch = () => {
  const [selected, setSelected] = useState<number>(1);
  const [input, setInput] = useState<boolean>(false);
  const test = useRef<HTMLInputElement>(null);

  const inputClick = () => {
    if (test.current?.focus) {
      test.current.focus();
      console.log(test);
      setInput(!input);
    }
  };

  const categoryClickHandler = (button: any) => {
    setSelected(button.id);
  };

  const inputClickHandler = () => {
    setInput(!input);
  };

  return (
    <>
      <S.MainWrapper>
        <S.Search>
          <S.InputWrapper style={{ width: input ? "43%" : "" }}>
            <input
              ref={test}
              type="text"
              placeholder="검색을 해주세요"
              onClick={inputClick}
            />
            <div className="glass-item">
              <img src={glass} alt="검색 아이콘" />
            </div>
          </S.InputWrapper>
          <S.Post>
            <button>그룹 만들기</button>
          </S.Post>
        </S.Search>
        <div
          className="input-infomation"
          style={{
            width: input ? "30%" : " 0",
          }}
        >
          <p>다양한 그룹을 검색하실 수 있습니다.</p>
        </div>
        <S.Category>
          {button.map((button, index) => (
            <button
              className="default-button"
              key={index}
              style={{
                backgroundColor:
                  button.id === selected
                    ? "#6f2dff"
                    : "rgba(128, 128, 128, 0.16)",
                color: button.id === selected ? "white" : "black",
              }}
              onClick={() => categoryClickHandler(button)}
            >
              {button.name}
            </button>
          ))}
        </S.Category>
        <S.GroupWrapper>
          {listDummy.map((list, index) => (
            <S.GroupItem key={index}>
              <div className="group-img">
                <img src={groupImg2} alt="그룹 베너 사진"></img>
              </div>
              <S.GroupDescribe>
                <a href="/group-detail/1">{list.Title}</a>
                <span>{list.describe}</span>
                <span>{list.Period}</span>
              </S.GroupDescribe>
            </S.GroupItem>
          ))}
        </S.GroupWrapper>
      </S.MainWrapper>
    </>
  );
};

export default GroupSearch;
