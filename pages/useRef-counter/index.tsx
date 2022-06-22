// useRef 함수는 current 속성을 가지고 있는 객체를 반환하는데,
// 인자로 넘어온 초기값을 current 속성에 할당합니다.
// current 속성은 값을 변경해도 상태를 변경할 때처럼 컴포넌트가 다시 랜더링되지 않습니다.

import React, { useState, useRef } from "react";

export default function ManualCounter() {
  const [count, setCount] = useState(0);
  const intervalId = useRef(null);
  console.log(`랜더링... count: ${count}`);

  const startCounter = () => {
    intervalId.current = setInterval(
      () => setCount((count) => count + 1),
      1000
    );
    console.log(`시작... intervalId: ${intervalId.current}`);
  };

  const stopCounter = () => {
    clearInterval(intervalId.current);
    console.log(`정지... intervalId: ${intervalId.current}`);
  };

  return (
    <>
      <p>자동 카운트: {count}</p>
      <button onClick={startCounter}>시작</button>
      <button onClick={stopCounter}>정지</button>
    </>
  );
}
