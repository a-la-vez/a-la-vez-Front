import * as S from "./style";
import { ListProps, studyMemberListDummy } from "../../interfaces/applyList";
import { useSelector } from "react-redux";
import PassModal from "./PassModal";
import { useState } from "react";
import { RootState } from "../../store/reducers";

const List = ({ count }: ListProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [userId, setUserId] = useState<number>(0);

  const test = useSelector((state: RootState) => state.apply);
  return (
    <>
      <S.ApplyList>
        <PassModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          userId={userId}
        />
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
      </S.ApplyList>
    </>
  );
};

export default List;
