import logo from './logo.svg';
import './App.css';

function App() {
  let list = [1, 2, 3];

  return (
  <div>
    <div>{list.map(n => <h1>{n}</h1>)}</div>
    <div>{list.map(n => n)}</div>
  </div>
  );
}

export default App;
