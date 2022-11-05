import React from 'react';

function Hello(props) {
  //  return <div style={{ color: props.color }}> 안녕하세요 {props.name}</div>; // props는 전부 합쳐서 객체형태로 들어간다!
  // 비구조화 할당 활용하기
  const { name, color } = props;
  return <div style={{ color }}> 안녕하세요{name}</div>;
}

Hello.defaultProps = {
  name: '이름없음',
}; // 이렇게 컴포넌트 아래 별개로 디폴트 props설정해둘 수 있음

export default Hello;
