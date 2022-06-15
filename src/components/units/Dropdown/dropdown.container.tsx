import { useState } from "react";
import * as Drop from "./dropdown.styles";

export default function DropdownPage() {
  const BIG = ["서울", "경기", "인천"];
  const [isSelect, setIsSelect] = useState(BIG[0]);
  const [isActive, setIsActive] = useState(false);

  const onClickSelectBtn = () => {
    setIsActive((prev) => !prev);
  };

  const onClickOption = (el: string) => () => {
    setIsSelect(el);
  };

  return (
    <>
      <Drop.SelectButton onClick={onClickSelectBtn}>
        <Drop.Selected>{isSelect}</Drop.Selected>
        <Drop.SelectIcon></Drop.SelectIcon>
        {isActive && (
          <Drop.Option>
            <ul>
              {BIG.map((el) => (
                <li key={el}>
                  <span onClick={onClickOption(el)}>{el}</span>
                </li>
              ))}
            </ul>
          </Drop.Option>
        )}
      </Drop.SelectButton>
    </>
  );
}
