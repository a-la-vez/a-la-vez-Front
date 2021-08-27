import axios from "axios";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastError, ToastSuccess } from "../../hook/toastHook";
import { categoryList } from "../../interfaces/group";
import * as S from "./style";

const PostMake = () => {
  const history = useHistory();
  const [fileUrl, setFileUrl] = useState<string>("");
  const [selected, setSelected] = useState<number>(1);
  const [post, setPost] = useState<boolean>(false);
  const [categorySelected, setCategorySelected] = useState<string>("all");

  const mutation = useMutation((inputs) =>
    axios
      .post("https://qovh.herokuapp.com/post/write", inputs, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
  );

  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    category: "",
    period: "",
    personnel: "",
  });

  const { title, content, period, category, personnel } = inputs;

  const onChange = (e: any) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
      category: categorySelected,
    });

    if (
      title.length > 0 &&
      content.length > 0 &&
      period !== "" &&
      category !== "" &&
      personnel !== ""
    ) {
      setPost(!post);
    }
  };

  const handleSubmit = (e: any, data: any) => {
    e.preventDefault();

    mutation.mutate(data);

    if (
      title === "" ||
      content === "" ||
      period === "" ||
      category === "" ||
      personnel === ""
    ) {
      ToastError("모든 항목을 채워주세요!");
    } else {
      ToastSuccess("스터디 모집글이 게시되었습니다.");

      setTimeout(() => {
        history.push("/");
      }, 3000);

      setInputs({
        title: "",
        content: "",
        category: "",
        period: "",
        personnel: "",
      });
    }

    console.log(inputs);
  };

  function processImage(e: React.ChangeEventHandler<HTMLInputElement> | any) {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    if (imageFile === "") {
      setFileUrl(
        "https://www.google.com/search?q=%EA%B3%A0%EC%96%91%EC%9D%B4+%EC%82%AC%EC%A7%84&sxsrf=ALeKk03Wk0cnVAi3nMILUKuQ8AhOs58XtA:1629809815944&tbm=isch&source=iu&ictx=1&fir=NpMi5nVF1QK1MM%252Ck3mACyoxPXAFMM%252C_&vet=1&usg=AI4_-kSdvsWpvHjLo_Y09K2M3vRv47DoMA&sa=X&ved=2ahUKEwipqYXZ2snyAhWNOZQKHcZWClwQ9QF6BAgZEAE#imgrc=NpMi5nVF1QK1MM"
      );
    }
    setFileUrl(imageUrl);
  }

  useEffect(() => {
    if (title.length > 5 && content.length > 5 && period !== "") {
      setPost(true);
    } else {
      setPost(false);
    }
  }, [title, content, period]);

  return (
    <S.PostWrapper onSubmit={(e) => handleSubmit(e, inputs)}>
      <ToastContainer />
      <S.PostHeader>
        <S.Category>
          {categoryList.map((category, index) => (
            <div
              className="default-button"
              key={index}
              style={{
                backgroundColor:
                  category.id === selected
                    ? "#6f2dff"
                    : "rgba(128, 128, 128, 0.16)",
                color: category.id === selected ? "white" : "black",
              }}
              onClick={() => {
                setSelected(category.id);
                setCategorySelected(category.name);
              }}
            >
              {category.name}
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
              <select name="personnel" onChange={onChange} defaultValue="명">
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
                value={period}
                onChange={onChange}
                name="period"
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
