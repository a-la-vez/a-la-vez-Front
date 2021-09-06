import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import * as S from "./style";
import { glass, groupImg2 } from "../../../assets";
import { categoryList } from "../../../interfaces/group";
import axios from "axios";

const GroupSearch = () => {
  const [selected, setSelected] = useState<number>(1);
  const [input, setInput] = useState<boolean>(false);
  const test = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const { isLoading, error, data } = useQuery("post", () =>
    axios("https://qovh.herokuapp.com/post")
  );

  console.log(data?.data);

  const inputClick = () => {
    if (test.current?.focus) {
      test.current.focus();
      console.log(test);
      setInput(!input);
    }
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
            <button onClick={() => history.push("/post")}>그룹 만들기</button>
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
          {categoryList.map((category, index) => (
            <button
              className="default-button"
              key={index}
              style={{
                backgroundColor:
                  category.id === selected
                    ? "#6f2dff"
                    : "rgba(128, 128, 128, 0.16)",
                color: category.id === selected ? "white" : "black",
              }}
              onClick={() => setSelected(category.id)}
            >
              {category.name}
            </button>
          ))}
        </S.Category>
        <S.GroupWrapper>
          {error && <>데이터를 불러올 수 없어요.. ㅠ</>}
          {isLoading ? (
            <>잠시만 기달려주세요!!</>
          ) : (
            <>
              {data?.data?.items.map((post: any) => (
                <S.GroupItem href={`/group-detail/${post.id}`} key={post.id}>
                  <div className="group-img">
                    <img src={groupImg2} alt="그룹 베너 사진"></img>
                  </div>
                  <S.GroupDescribe>
                    <p>{post.title}</p>
                    <span>모집 인원 {post.personnel}명</span>
                    <span>모집 기간 {post.period}</span>
                  </S.GroupDescribe>
                </S.GroupItem>
              ))}
            </>
          )}
        </S.GroupWrapper>
      </S.MainWrapper>
    </>
  );
};

export default GroupSearch;
