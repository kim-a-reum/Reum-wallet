import { useContext } from "react";
import { ExampleContext } from "../../../../pages/contextapi";

const ContextApiUI = () => {
  const { isEdit } = useContext(ExampleContext);
  return <div>{isEdit ? "수정하기" : "등록하기"}</div>;
};

export default ContextApiUI;
