import logo from './logo.svg';
import './App.css';

let a = 10; // 변수
const b = 20; // 상수

const myStyle = {
  color: "red"
};
// JSX 문법
function App() {
  let c; // undefined;
  console.log(1, c);
  return (
  <div>
    <div style={myStyle}>안녕 {a === 10 ? "10입니다." : "10이 아닙니다."}</div>
    <h1 className='box-style'>heading tag, {b===20 && "20입니다."}</h1>
    <hr/>
  </div>
  );
}

export default App;
