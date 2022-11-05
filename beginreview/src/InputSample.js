import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const nameInput = useRef();

  const { name, nickname } = inputs;

  const onChange = (e) => {
    // const value = e.target.value;
    // const name = e.target.name;
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
    // useRef로 생성한 ref객체의 current값이 원하는 DOM을 가리킴
  };

  return (
    <div>
      <input
        onChange={onChange}
        placeholder="name"
        name="name"
        value={name}
        ref={nameInput} // useRef로 생성한 Ref객체를 선택하고 싶은 DOM에 ref값으로 설정하기
      />
      <input
        onChange={onChange}
        placeholder="nickname"
        name="nickname"
        value={nickname}
      />
      <button onClick={onReset}>reset</button>
      <div>
        <b>value: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
