import React from 'react';

function Wrapper({ children }) {
  // 항상 props 넣을때는 객체로 넣어야 함
  const style = {
    border: '2px solid black',
    padding: '16px',
  };

  return <div style={style}>{children}</div>;
}

export default Wrapper;
