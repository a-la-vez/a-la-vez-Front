import { useState } from "react";
import { groupImg2, heart, heartCheck } from "../../../assets";
import { ApplyForm } from "../../index";
import { GroupDetailType, CommentType } from "../../../interfaces/group";
import Comment from "./Comment";
import * as S from "./style/style";

const groupDetail: GroupDetailType = {
  Id: 1,
  Title: "대덕소프트웨어마이스터고등학교를 소개해요!",
  describe: "모집해요!!!",
  Period: "3일간",
  ImagePath: groupImg2,
  Content: "같이 공부할 사람 모집합니다.",
  CreatedAt: "2020-20-20",
  UpdatedAt: "2020-20-20",
  Category: "전공",
};

const commentDummy: CommentType[] = [
  {
    ImagePath: groupImg2,
    Content: "어떤 방법으로 모집되나요",
    CreatedAt: "2020-20-20",
    UserName: "은빈",
  },
  {
    ImagePath: groupImg2,
    Content: "어떤 방법으로 모집되나요",
    CreatedAt: "2020-20-20",
    UserName: "은빈",
  },
  {
    ImagePath: groupImg2,
    Content: "어떤 방법으로 모집되나요",
    CreatedAt: "2020-20-20",
    UserName: "은빈",
  },
  {
    ImagePath: groupImg2,
    Content: "어떤 방법으로 모집되나요",
    CreatedAt: "2020-20-20",
    UserName: "은빈",
  },
  {
    ImagePath: groupImg2,
    Content: "어떤 방법으로 모집되나요",
    CreatedAt: "2020-20-20",
    UserName: "은빈",
  },
  {
    ImagePath: groupImg2,
    Content: "어떤 방법으로 모집되나요",
    CreatedAt: "2020-20-20",
    UserName: "은빈",
  },
  {
    ImagePath: groupImg2,
    Content: "어떤 방법으로 모집되나요",
    CreatedAt: "2020-20-20",
    UserName: "은빈",
  },
];

const GroupDetail = () => {
  const [heartClick, setHeartClick] = useState(heart);
  const [count, setCount] = useState<boolean>(false);
  const [apply, setApply] = useState<boolean>(false);

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
    <>
      <ApplyForm apply={apply} setApply={setApply} />
      <S.MainWrapper>
        <S.GroupDetailContent>
          <S.GroupDetailHeader>
            <div className="category">
              <div className="category-item">{groupDetail.Category}</div>
            </div>
            <div className="date">
              <a href="/post" className="modify-group">
                스터디 수정
              </a>
              <span>작성일 : {groupDetail.CreatedAt}</span>
              <span>수정일 : {groupDetail.UpdatedAt}</span>
            </div>
          </S.GroupDetailHeader>
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
                  <button onClick={() => setApply(true)}>신청하기</button>
                </div>
              </div>
            </div>
          </S.TopContent>
          <S.BottomContent>
            <S.CommentWrapper>
              <S.CommentHeader>
                <span>댓글</span>
                <span>{commentDummy.length}개</span>
              </S.CommentHeader>
              <S.CommentInput>
                <input type="text" placeholder="댓글을 작성해주세요" />
              </S.CommentInput>
              {commentDummy.map((comment: CommentType, index: number): any => (
                <Comment key={index} comments={comment} />
              ))}
              <button className="comment-more">더보기</button>
            </S.CommentWrapper>
          </S.BottomContent>
        </S.GroupDetailContent>
      </S.MainWrapper>
    </>
  );
};

export default GroupDetail;
