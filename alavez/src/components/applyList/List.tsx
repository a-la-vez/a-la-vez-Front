import * as S from "./style";
import {
  applyListDummy,
  ListProps,
  studyMemberListDummy,
} from "../../interfaces/applyList";

const List = ({ count, setOpenModal }: ListProps) => {
  return (
    <S.ApplyList>
      {count === 1 ? (
        <>
          {applyListDummy.map((i) => (
            <ul>
              <li>{i.groupName}</li>
              <li>{i.name}</li>
              <li style={{ color: "gray" }}>xxx-xxxx-xxxx</li>
              <li>{i.reason}</li>
              <button
                onClick={() => setOpenModal(true)}
                className="default-button"
              >
                승인여부
              </button>
            </ul>
          ))}
        </>
      ) : (
        <>
          {studyMemberListDummy.map((i) => (
            <ul>
              <li>{i.groupName}</li>
              <li>{i.name}</li>
              <li style={{ color: "gray" }}>{i.phone}</li>
              <li>{i.reason}</li>
            {/*   <button
                onClick={() => setOpenModal(true)}
                className="default-button"
              >
                승인여부
              </button> */}
            </ul>
          ))}
        </>
      )}
    </S.ApplyList>
  );
};

export default List;
