import React, { useState } from 'react';

function InputSample() {
  /* const [input, setInput] = useState(0);
  const onChange = (e) => {
    // e.preventDefault();
    // e.target은 이벤트가 발생한 DOM인 input DOM을 가리키게 됨
    const value = e.target.value;
    setInput((prev) => (prev = value));
  };

  const reset = () => {
    // input = ''; 꼭 기억해라. useState로 만든 변수는 setter로만 할당 가능!!
    setInput('');
  };

  return (
    <div>
      <input onChange={onChange} value={input} />
      <button onClick={reset}>초기화</button>
      <div>
        <b>값: {input}</b>
      </div>
    </div>
  ); */

  const [text, setText] = useState('');
  const onChange = (e) => {
    setText((prev) => e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : {text}</b>
      </div>
    </div>
  );
}

export default InputSample;
