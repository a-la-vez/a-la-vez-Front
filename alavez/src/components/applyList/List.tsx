import * as S from "./style";
import { ListProps, studyMemberListDummy } from "../../interfaces/applyList";
import PassModal from "./PassModal";

const List = ({ count, setOpenModal, setUserId }: ListProps) => {
  return (
    <>
      {/*  <S.ApplyList>
        {count === 1 ? (
          <>
            {test.map((i) => (
              <ul key={i.id}>
                <li>{i.groupName}</li>
                <li>{i.name}</li>
                <li style={{ color: "gray" }}>xxx-xxxx-xxxx</li>
                <li>{i.reason}</li>
                <button
                  onClick={() => {
                    setOpenModal(true);
                    setUserId(i.id);
                  }}
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
              <ul key={i.id}>
                <li>{i.groupName}</li>
                <li>{i.name}</li>
                <li style={{ color: "gray" }}>{i.phone}</li>
                <li>{i.reason}</li>
              </ul>
            ))}
          </>
        )}
      </S.ApplyList> */}
    </>
  );
};

export default List;
