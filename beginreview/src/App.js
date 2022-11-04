import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, //기본단위는 px
    padding: '1rem', // 다른 단위 사용시 문자열로 설정
  };

  return (
    <>
      {' '}
      {/** 이름없는 태그. Fragment. 브라우저 상에서 따로 별도의 엘리먼트로 나타나지 않음*/}
      <Hello
      // 열리는 태그 내부에서는 이렇게 주석을 작성할 수 있습니다
      />
      <div style={style}>{name}</div>
      {/** 객체값, 즉 자바스크립트 값을 넣어주는 것이기 때문에,
       마찬가지로 인라인 스타일을 넣을 때 중괄호 안에 객체를 넣어야함
       */}
      /** 주석은 중괄호로 감싸지 않으면 화면에 보입니다~ */
      <div className="gray-box"></div>
    </>
  );
}

export default App;
