import React, { useState } from 'react'; // 리액트 패키지에서 useState라는 함수 가져옴

function Counter() {
  /* 함수형 업데이트
  기존값을 어떻게 업데이트 할지에 대한 함수를 등록하는 방식으로도
  값을 업데이트 가능
  
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((prev) => prev + 1);
  };
  const minus = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>+1</button>
      <button onClick={minus}>-1</button>
    </div>
  ); */
  /* const onIncrease = () => {
    console.log('+1');
  };

  const onDecrease = () => {
    console.log('-1');
  };

  return (
    <div>
      <h1>0</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
  // 리액트에서 엘리먼트에 이벤트 설정
  // on이벤트이름 ={실행하고 싶은 함수}
       */

  const [number, setNumber] = useState(0);
  // useState 호출 시, 상태의 기본값을 파라미터로 넣기
  // 배열 반환. 첫번째 요소는 현재 상태, 두번째 요소는 setter 함수
  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
    // 이렇게 number 변수를 set함수 내부에서 활용 가능
    // 평범한 변수처럼
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
