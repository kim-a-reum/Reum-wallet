import { useContext } from "react";
import { ExampleContext } from "../../../../pages/contextapi";

const ContextApiUI = () => {
  const { isEdit } = useContext(ExampleContext);
  return <div>{isEdit ? "true일때" : "false일때"}</div>;
};

export default ContextApiUI;
