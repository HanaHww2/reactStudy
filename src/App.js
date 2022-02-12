import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([1, 2, 3, 4]);
  const [str, setStr] = useState("합계");

  const getAddResult = () => {
    let sum = 0;
    list.forEach((i) => (sum += i));
    console.log("sum 함수 실행됨:", sum);
    return sum;
  };

  const addResult = useMemo(() => getAddResult(), [list]); // getAddResult() 함수를 기억해두고, list가 변경되는 경우 실행한다.

  return (
    <div>
      <button
        onClick={() => {
          setStr("안녕"); // 상태값 변경시 다른 요소들도 함께 re-rendering이 된다. -> useMemo로 최적화
        }}
      >
        문자 변경
      </button>
      <button
        onClick={() => {
          setList([...list, 10]);
        }}
      >
        리스트 값 추가
      </button>
      <div>
        {list.map((i) => (
          <h1>{i}</h1>
        ))}
      </div>
      <div>
        {str} : {addResult}
      </div>
    </div>
  );
}

export default App;
