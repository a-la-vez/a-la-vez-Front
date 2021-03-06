import axios from "axios";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useHistory } from "react-router";
import queryString from "query-string";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastError, ToastSuccess } from "../../hook/toastHook";
import { categoryList } from "../../interfaces/group";
import * as S from "./style";

const PostMake = ({ location }: any) => {
  const history = useHistory();
  const [fileUrl, setFileUrl] = useState<string>("");
  const [selected, setSelected] = useState<number>(1);
  const [post, setPost] = useState<boolean>(false);
  const [categorySelected, setCategorySelected] = useState<string>("all");

  const postId = queryString.parse(location.search);

  const { data } = useQuery("postDetail", () =>
    axios(`https://qovh.herokuapp.com/post/${postId.id}`)
  );

  const mutation = useMutation((inputs) =>
    axios
      .put(`https://qovh.herokuapp.com/post/${postId.id}`, inputs, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
  );

  const [inputs, setInputs] = useState({
    title: data?.data?.post?.title === null ? "" : data?.data?.post?.title,
    content: data?.data?.post?.title === null ? "" : data?.data?.post?.content,
    category:
      data?.data?.post?.category === null ? "" : data?.data?.post?.category,
    period: data?.data?.post?.period === null ? "" : data?.data?.post?.period,
    personnel:
      data?.data?.post?.personnel === null ? "" : data?.data?.post?.personnel,
    imagePath: fileUrl,
  });

  const { title, content, period, category, personnel, imagePath } = inputs;

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
      personnel !== "" &&
      imagePath !== ""
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
      ToastError("?????? ????????? ???????????????!");
    } else {
      ToastSuccess("????????? ???????????? ?????????????????????.");

      setTimeout(() => {
        history.push(`/group-detail/${postId.id}`);
      }, 2000);

      setInputs({
        title: "",
        content: "",
        category: "",
        period: "",
        personnel: "",
        imagePath: "",
      });
    }
  };

  function processImage(e: React.ChangeEventHandler<HTMLInputElement> | any) {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);

    if (imageFile === null) {
      setFileUrl(
        "https://www.google.com/search?q=%EA%B3%A0%EC%96%91%EC%9D%B4+%EC%82%AC%EC%A7%84&sxsrf=ALeKk03Wk0cnVAi3nMILUKuQ8AhOs58XtA:1629809815944&tbm=isch&source=iu&ictx=1&fir=NpMi5nVF1QK1MM%252Ck3mACyoxPXAFMM%252C_&vet=1&usg=AI4_-kSdvsWpvHjLo_Y09K2M3vRv47DoMA&sa=X&ved=2ahUKEwipqYXZ2snyAhWNOZQKHcZWClwQ9QF6BAgZEAE#imgrc=NpMi5nVF1QK1MM"
      );
    }
    setFileUrl(imageUrl);
  }

  useEffect(() => {
    if (
      data?.data?.post?.title.length > 5 &&
      data?.data?.post?.content.length > 5 &&
      data?.data?.post?.period !== ""
    ) {
      setPost(true);
    } else {
      setPost(false);
    }
  }, [
    data?.data?.post?.title,
    data?.data?.post?.content,
    data?.data?.post?.period,
  ]);

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
          placeholder="????????? ???????????? ??????????????????"
          onChange={onChange}
          value={title}
          name="title"
        ></S.ContentTitle>
        <S.Content>
          <S.ContentSub
            placeholder="????????? ?????? ????????? ??????????????????"
            onChange={onChange}
            value={content}
            name="content"
          ></S.ContentSub>
          <S.ContentSide>
            <div className="content-side">
              <span>????????????</span>
              <select name="personnel" onChange={onChange} defaultValue="???">
                <option value="" selected disabled hidden>
                  ??????????????????.
                </option>
                <option value="????????????">?????? ??????</option>
                <option value="1???">1??? ??????</option>
                <option value="1~3???">2 ~ 3???</option>
                <option value="4~5???">4 ~ 5???</option>
                <option value="6~7???">6 ~ 7???</option>
                <option value="8??? ??????">8??? ??????</option>
              </select>
            </div>
            <div className="content-side">
              <span>?????? ?????? ??????</span>
              <input
                type="date"
                value={period}
                onChange={onChange}
                name="period"
              />
            </div>
            <label>
              <img className="profile-img" src={fileUrl} alt="" />
              <input
                type="file"
                onChange={(e) => {
                  processImage(e);
                  onChange(e);
                  console.log(e.target.files);
                }}
              />
            </label>
          </S.ContentSide>
        </S.Content>
        <S.PostButton style={{ backgroundColor: post ? "#6f2dff" : "pink" }}>
          ????????????
        </S.PostButton>
      </S.ContentWrapper>
    </S.PostWrapper>
  );
};

export default PostMake;
