import React, { useState, useRef } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const nextId = useRef(4);

  const onSubmit = () => {
    const newUser = { id: nextId.current, username, email };
    setUsers([...users, newUser]);

    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id)); // 이 조건에 맞는 애들만 새배열의 요소가 될 수 있음
  };

  // 상태가 두 군데라는 것을 기억하기
  // input 부분
  // 리스트로 렌더링되는 배열 부분

  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <UserList users={users} onRemove={onRemove} />
    </div>
  );
}

export default App;
