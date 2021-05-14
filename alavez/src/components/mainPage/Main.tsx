import * as S from "./style";
import { Header } from "../index";
import { iphone } from "../../assets/index";

const Main = () => {
  return (
    <>
      <S.MainWrapper>
        <Header />
        <S.Main></S.Main>
        <img src={iphone} alt="" />
      </S.MainWrapper>
    </>
  );
};

export default Main;
