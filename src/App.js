import "./App.css";
import {useState} from "react";

function App() {
  const [result , setResult] = useState("")

  // calculation function
  const calculate =()=>{
    setResult(eval(result).toString())
  }
  
  return (
    <div className="App">
      <p className="message">{result}</p>
      <div className="button-Section">

        <div className="section">
          <h6 onClick={()=>setResult("")}>AC</h6>
          <h6 onClick={()=>setResult(result.concat("%"))}>%</h6>
          <h6 onClick={()=>setResult(result.slice(0, -1))}>c</h6>
          <h6 onClick={()=>setResult(result.concat("/"))}>/</h6>
        </div>

        <div className="section">
          <h6 onClick={()=>setResult(result.concat("8"))}>8</h6>
          <h6 onClick={()=>setResult(result.concat("7"))}>7</h6>
          <h6 onClick={()=>setResult(result.concat("9"))}>9</h6>
          <h6 onClick={()=>setResult(result.concat("*"))}>X</h6>
        </div>

        <div className="section">
          <h6 onClick={()=>setResult(result.concat("4"))}>4</h6>
          <h6 onClick={()=>setResult(result.concat("5"))}>5</h6>
          <h6 onClick={()=>setResult(result.concat("6"))}>6</h6>
          <h6 onClick={()=>setResult(result.concat("-"))}>-</h6>
        </div>

        <div className="section">
          <h6 onClick={()=>setResult(result.concat("1"))}>1</h6>
          <h6 onClick={()=>setResult(result.concat("2"))}>2</h6>
          <h6 onClick={()=>setResult(result.concat("3"))}>3</h6>
          <h6 onClick={()=>setResult(result.concat("+"))}>+</h6>
        </div>

        <div className="section">
          <h6 onClick={()=>setResult(result.concat("00"))}>00</h6>
          <h6 onClick={()=>setResult(result.concat("0"))}>0</h6>
          <h6 onClick={()=>setResult(result.concat("."))}>.</h6>
          <h6 onClick={calculate}>=</h6>
        </div>

      </div>
    </div>
  );
}

export default App;
