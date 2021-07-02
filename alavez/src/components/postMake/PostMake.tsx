import { useEffect } from "react";
import { useState } from "react";
import { button } from "../../interfaces/group";
import * as S from "./style";

const PostMake = () => {
  const [fileUrl, setFileUrl] = useState<string>("");
  const [selected, setSelected] = useState<number>(1);
  const [post, setPost] = useState<boolean>(false);

  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    number: "",
    daedline: "",
  });

  const { title, content, daedline, number } = inputs;

  const onChange = (e: any) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });

    if (
      title.length > 0 &&
      content.length > 0 &&
      daedline !== "" &&
      number !== ""
    ) {
      setPost(!post);
      console.log(213);
    }
  };

  const handleSumit = (e: any) => {
    e.preventDefault();

    if (title === "" || content === "" || daedline === "" || number === "") {
      alert("모든 항목을 입력해주세요");
    } else {
      alert("스터디 모집글이 업로드 되었습니다.");
      setInputs({
        title: "",
        content: "",
        number: "",
        daedline: "",
      });
    }

    console.log(inputs);
  };

  const categoryClickHandler = (button: any) => {
    setSelected(button.id);
  };

  function processImage(e: React.ChangeEventHandler<HTMLInputElement> | any) {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
  }

  useEffect(() => {
    if (
      title.length > 5 &&
      content.length > 5 &&
      daedline !== "" &&
      number !== ""
    ) {
      setPost(true);

      console.log(213);
    } else {
      setPost(false);
    }
  }, [title, content, daedline, number]);

  return (
    <S.PostWrapper onSubmit={handleSumit}>
      <S.PostHeader>
        <S.Category>
          {button.map((button, index) => (
            <div
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
            </div>
          ))}
        </S.Category>
      </S.PostHeader>
      <S.ContentWrapper>
        <S.ContentTitle
          placeholder="스터디 모집글을 입력해주세요"
          onChange={onChange}
          value={title}
          name="title"
        ></S.ContentTitle>
        <S.Content>
          <S.ContentSub
            placeholder="스터디 모집 내용을 입력해주세요"
            onChange={onChange}
            value={content}
            name="content"
          ></S.ContentSub>
          <S.ContentSide>
            <div className="content-side">
              <span>모집인원</span>
              <select name="number" onChange={onChange} defaultValue="명">
                <option value="" selected disabled hidden>
                  선택해주세요.
                </option>
                <option value="000">제한 없음</option>
                <option value="100">1명 이하</option>
                <option value="200">2 ~ 3명</option>
                <option value="300">4 ~ 5명</option>
                <option value="400">6 ~ 7명</option>
                <option value="500">8명 이상</option>
              </select>
            </div>
            <div className="content-side">
              <span>모집 종료 일자</span>
              <input
                type="date"
                value={daedline}
                onChange={onChange}
                name="daedline"
              />
            </div>
            <label>
              <img className="profile-img" src={fileUrl} alt="" />
              <input type="file" onChange={processImage} />
            </label>
          </S.ContentSide>
        </S.Content>
        <S.PostButton style={{ backgroundColor: post ? "#6f2dff" : "pink" }}>
          게시하기
        </S.PostButton>
      </S.ContentWrapper>
    </S.PostWrapper>
  );
};

export default PostMake;
