import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gamil.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'Liz',
      email: 'liz@example.com',
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId,
      username,
      email,
    };

    // Spread 문법 사용하기 setUsers([...users, user]);
    setUsers(users.concat(user)); // concat메서드 사용하기

    setInputs({
      username: '',
      email: '',
    });

    nextId.current += 1;
  };

  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </div>
  ); // 실질적으로 렌더링할 틀들은 따로 컴포넌트를 만들고
  // 전역적으로 바라봐야할 상태관리는 여기에서 한다
}

export default App;
