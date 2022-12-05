import logo from './logo.svg';
import './App.css';

function App() {
  let result='';
function addValue(value){
  result = result+value; 
  console.log(`O valor escolhido é igual a ${result}`);
}

function evaluation(){
  result = eval(result);
  console.log(result);
}

function clean(){
  result='';
  console.log(result);
}

  return (
    <div>
     <table>
      <tr>
        <td><button id="result">{result}</button></td>
      </tr>
      <tr>
        <td><button onClick={()=> addValue("1")}>1</button></td>
        <td><button onClick={()=> addValue("2")}>2</button></td>
        <td><button onClick={()=> addValue("3")}>3</button></td>
        <td><button onClick={()=> addValue("+")}>+</button></td>
      </tr>
      <tr>
        <td><button onClick={()=>addValue("4")}>4</button></td>
        <td><button onClick={()=>addValue("5")}>5</button></td>
        <td><button onClick={()=>addValue("6")}>6</button></td>
        <td><button onClick={()=>addValue("-")}>-</button></td>
      </tr>
      <tr>
        <td><button onClick={()=>addValue("7")}>7</button></td>
        <td><button onClick={()=>addValue("8")}>8</button></td>
        <td><button onClick={()=>addValue("9")}>9</button></td>
        <td><button onClick={()=>addValue("*")}>*</button></td>
      </tr>
      <tr>
        <td ><button onClick={()=>addValue("0")}>0</button></td>
        <td ><button onClick={()=>addValue("/")}>/</button></td>          
      </tr>
      <tr>
        <td><button className="ac" onClick={()=>clean()}>AC</button></td>
        <td><button onClick={()=>addValue(".")}>.</button></td>
        <td><button onClick={()=>evaluation()}>=</button></td>          
      </tr>
    </table>
    </div>
  );
}

export default App;
