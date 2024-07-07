import { useState } from "react"
export default function LudoBoard(){

    let [Moves , setMoves] = useState({Blue : 0 , Red : 0 , Yellow : 0 , Green : 0});

    let updateBlue = () => {
        setMoves((prevMoves) => {
            return {...prevMoves , Blue: prevMoves.Blue + 1 };
        });
    };
    let updateYellow = () => {
        setMoves((prevMoves) => {
            return {...prevMoves , Yellow: prevMoves.Yellow + 1 };
        });
    };
    let updateGreen = () => {
        setMoves((prevMoves) => {
            return {...prevMoves , Green: prevMoves.Green + 1 };
        });
    };
    let updateRed = () => {
        setMoves((prevMoves) => {
            return {...prevMoves , Red: prevMoves.Red + 1 };
        });
    };
    
    return(
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue moves = {Moves.Blue}</p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {Moves.Yellow} </p>
                <button style={{backgroundColor: "yellow" , color: "black"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {Moves.Green}</p>
                <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
                <p>Red moves ={Moves.Red} </p>
                <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}