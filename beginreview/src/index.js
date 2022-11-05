import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 대강, 얘가 특정 태그를 root태그로 만든다는 뜻인듯

// ReactDOM.render(<App/>, document.getElementById('root'))
// 브라우저에 있는 실제 돔 내부에 리액트 컴포넌트를 렌더링하겠다!
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
