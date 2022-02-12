import { useEffect, useState } from "react";
import "./App.css";
import Third from "./js/Third";
import Sub, { num } from "./Sub";

function App() {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);
  const download = () => {
    // 동적으로 데이터를 가져온다고 가정
    let downloadData = 5;
    setData(downloadData);
  };

  // useEffect 실행시점 :
  // (1) App() 함수가 최초 실행(rendering)될 때 (최초 mount)
  // (2) 상태 변수가 변경될 때 (re-rendering) (dependencyList에 등록된 상태 변수)
  useEffect(() => {
    console.log("useEffect 샐행됨");
    download();
  }, [search]);
  // dependencyList에 [] 빈 배열을 전달하면, (2)의 경우 무시 (어디에도 의존하지 않음)
  // dependencyList를 [data] 로 두면 (2)의 경우에도 useEffect가 동작

  return (
    <div>
      <button
        onClick={() => {
          setSearch(2);
          // 정적으로 상태값을 변경했기 때문에, 한 번 클릭한 이후에는 더 클릭해도 상태값 변경이 없다.
          // 버튼 클릭시, useEffect가 최초 한 번만 동작
        }}
      >
        검색
      </button>
      <h1>데이터 : {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
      <Sub />
      <Third />
      {num}
    </div>
  );
}

export default App;
