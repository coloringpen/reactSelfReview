import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css';

function App() {
  return (
    <Wrapper>
      {' '}
      {/** 컴포넌트도 열리는 태그와 닫히는 태그로 구성될 수 있음
       * 이럴 때는 하위, 자식 태그들이 보이게 할지, 말지 잘 처리할 것
       */}
      <Hello name="react" color="red" isSpecial />{' '}
      {/* 아무런 값을 넣어주지 않을때, true로 값이 들어가는 props */}
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
