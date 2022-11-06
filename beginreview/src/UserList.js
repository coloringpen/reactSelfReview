import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>{user.email}</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 6,
      username: 'alpha',
      email: 'alpha@example.com',
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
  ];

  /*
  일일이 적는 방법. 재사용되는 코드는 이런식으로 넣는 게 좋지 않음
  return (
    <div>
      <div>
        <b>{users[0].username}</b>
        <span>{users[0].email}</span>
      </div>
      <div>
        <b>{users[1].username}</b>
        <span>{users[1].email}</span>
      </div>
      <div>
        <b>{users[2].username}</b>
        <span>{users[2].email}</span>
      </div>
    </div>
  ); */
  /*
  배열이 고정적이라면 상관없지만,
  배열의 인덱스를 하나하나 조회해가며 렌더링하는 방법은
  동적인 배열을 렌더링하지 못함
  return (
    <div>
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </div>
  ); */

  /*  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
  // Each child in a list should have a unique "key" prop
  // 배열에 있는 각각의 요소들은 고유한 키 프롭이 있어야 함
  // 배열을 렌더링 할 시, key라는 props를 컴포넌트에 설정할 것
  */

  return (
    <div>
      {users.map((user, index) => (
        <User user={user} key={index} />
      ))}
    </div>
  );
  // 만약 배열 안의 원소가 갖고 있는 고유한 값이 없다면 map() 사용시 설정하는
  // 콜백함수의 두번째 파라미터 index를 key로 사용하면 됨
  // 각 요소에 고유 key가 있어야만 배열이 업데이트 될 때 효율적으로 렌더링을 할 수 있다
  // 리액트는 렌더링시, DOM의 변화를 감지해서 실제 DOM에 패치함
  // 각각의 요소를 구분하여 실제 변화가 어떻게 된 건지, 브라우저가 더 정확히 파악할 수 있도록 함
}

export default UserList;
