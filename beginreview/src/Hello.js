import React from 'react';

function Hello(props) {
  //  return <div style={{ color: props.color }}> 안녕하세요 {props.name}</div>; // props는 전부 합쳐서 객체형태로 들어간다!
  // 비구조화 할당 활용하기
  const { name, color, isSpecial } = props;
  /*const star = props.isSpecial ? '*' : null;
  return (
    <div style={{ color }}>
      {' '}
      {star}안녕하세요{name}
    </div>
  );*/
  /* return (
    <div style={{ color }}>
      {props.isSpecial ? '*' : null}안녕하세요{name}
    </div>
  );*/
  /* return (
    <div style={{ color }}>
      {isSpecial ? <b>*</b> : null}안녕하세요{name}
    </div>
  );*/
  // jsx도 값처럼 쓸 수 있다는 것을 기억하기
  return (
    <div style={{ color }}>
      {isSpecial ?? <b>*</b>}안녕하세요{name} {/* 첫번째 false반환하는 ?? */}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음',
}; // 이렇게 컴포넌트 아래 별개로 디폴트 props설정해둘 수 있음

export default Hello;
