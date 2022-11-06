import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
        placeholder="account name"
        onChange={onChange}
        value={username} // value 아무것도 안넣어주면 true로 들어감
        // 얘가 진짜 html이 아니고 JSX에 props들이라는 걸 기억할 것
      />
      <input
        name="email"
        placeholder="email"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>Submit</button>
    </div>
  );

  // 싱태 관리를 CreateUser에서 하지 않고 부모 컴포넌트인 App에서 하게 할 것
  // input의 값 및 이벤트 함수들을 props로 넘겨받아 사용하기
}

export default CreateUser;
