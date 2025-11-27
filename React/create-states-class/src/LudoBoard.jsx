import { useState } from "react";
import "./LudoBoard.css";

export default function LudoBoard() {
  // ⭐ One state object for all colors
  const [moves, setMoves] = useState({
    blue: 0,
    yellow: 0,
    green: 0,
    red: 0
  });
  const[arr,setArr]=useState(["no moves"]);

  // ⭐ Generic toggle function
  const toggleColor = (color) => {
    setMoves(prev => ({
      ...prev,          // keep previous values
      [color]: prev[color] + 1  // update only the clicked color
    }));
     
    setArr(preArr=>[...preArr,color]);
  };

  return (
    <div className="Ludo">
        <p>{arr}</p>
      <p>Blue moves = {moves.blue}</p>
      <button className="btn1" onClick={() => toggleColor("blue")}>+1</button>

      <p>Yellow moves = {moves.yellow}</p>
      <button className="btn2" onClick={() => toggleColor("yellow")}>+1</button>

      <p>Green moves = {moves.green}</p>
      <button className="btn3" onClick={() => toggleColor("green")}>+1</button>

      <p>Red moves = {moves.red}</p>
      <button className="btn4" onClick={() => toggleColor("red")}>+1</button>
    </div>
  );
}
 