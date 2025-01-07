import { useState } from "react";
import Square from "../Componenets/Square";
import calculateWinner from "../../utils/calculateWinner";
import drawCondition from "../../utils/drawCondition";
const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const handleClick = (i) => {
    if (state[i] != null) return;
    let copyState = [...state];
    copyState[i] = isNext ? "X" : "0";
    setState(copyState);
    setIsNext(!isNext);
  };
  const handleRestart = () => {
    setState(Array(9).fill(null));
    setIsNext(true)
  };
  const winner = calculateWinner(state);
  const draw = drawCondition(state);
  return winner || draw ? (
    draw ? (
      <div className="win">
        <h1>Oops It is draw🤒</h1>
        <button
          onClick={() => {
            handleRestart();
          }}
        >
          Restart
        </button>
      </div>
    ) : (
      <div className="win">
        <h1>
          {winner == "X" ? "Player 1 is a ultimate winner 🏆" : "Player 2 is ultimate winner 🏆"}
        </h1>
        <button
          onClick={() => {
            handleRestart();
          }}
        >
          Restart
        </button>
      </div>
    )
  ) : (
    <>
      <h1>Tic Tac Toe 😎</h1>
      <div className="main">
        {state.map((element, i) => {
          return (
            <>
              <Square
                value={element}
                key={i}
                onSquareClicked={() => {
                  handleClick(i);
                }}
              />
            </>
          );
        })}
      </div>
      <h1>{isNext?"Player 1 : Move":"Player 2 : Move"}</h1>
    </>
  );
};
export default Board;
