import React, { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  }); // 우리는 이제 객체 내부값을 변경하는 방법을 사용해야한다!

  const { name, nickname } = inputs; // 여기는 DOM업데이트용

  /* const onChange = (e) => {
    const setname = e.target.name;
    if (setname == 'name') {
      setInputs((name = e.target.value)); // 변수 name const로 선언해서 수정불가!
    } else {
      setInputs((nickname = e.target.value));
    }
  }; name과 nickname을 어떻게 나누어서 관리하지? 
     const여서 수정도 안되고, 변수들을 직접 수정도 하면 안됨 */

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }; // 변수에 할당된 값이 객체이니, 객체 그대로 다시 재할당!!
  /**
   * 리액트에서 useState로 할당한 객체를 수정할 땐,
   * inputs[name]=value; 이런식으로 직접 수정하면 안됨!
   * setInputs((prev) => (prev[name] = value)); 이렇게도 안됨
   * 새로운 객체를 만들어서 새로운 객체에 변화를 주고, 이릉 상태로 사용해야함
   */

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
  };

  return (
    <div>
      <input placeholder="이름" name="name" onChange={onChange} value={name} />
      <input
        placeholder="닉네임"
        name="nickname"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
