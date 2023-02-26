import "./styles.css";
import { useState } from "react";

export default function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(num1 + num2);

  const addNum = () => {
    setTotal(num1 + num2);
  };

  return (
    <div className="App">
      <h2>Addition of Two Number</h2>
      <input
        type="number"
        placeholder="0"
        value={num1}
        onChange={(e) => setNum1(+e.target.value)}
      />
      <input
        type="number"
        placeholder="0"
        value={num2}
        onChange={(e) => setNum2(+e.target.value)}
      />
      <br />
      <button onClick={addNum}>Add</button>
      <h2>{total}</h2>
    </div>
  );
}
