import styled from "@emotion/styled";
import { useState } from "react";

const Wrapper = styled.div`
  margin: 50px;
  width: 102px;
  height: 50px;
  border: 0.5px solid lightgray;
  border-radius: 30px;
`;

const Option = styled.div`
  width: 100%;
  height: 50px;
  color: gray;
  text-align: center;
  font-size: 20px;
  border: 0.5px solid lightgray;
  background-color: white;
`;
const FRUITS = ["바나나", "사과", "토마토"];

const Dropdown2UI = () => {
  const [isActive, setIsActive] = useState(false);
  // 안녕

  const onClickSelectBtn = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <Wrapper onClick={onClickSelectBtn}>
      {isActive && (
        <>
          {FRUITS.map((el) => (
            <Option key={el}>{el}</Option>
          ))}
        </>
      )}
    </Wrapper>
  );
};

export default Dropdown2UI;
