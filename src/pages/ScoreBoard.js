import { useState } from "react";
import Player from "../components/Player";

export default function ScoreBoard() {
  const [players, setPlayers] = useState([
    { id: 1, name: "Player 1", roll: null, score: 0 },
    { id: 2, name: "Player 2", roll: null, score: 0 },
  ]);

  const diceRoll = () => {
    const diceScore = players.map((player) => {
      return {
        ...player,
        roll: (player.roll = Math.floor(Math.random() * (7 - 1) + 1)),
      };
    });
    // console.log([...diceScore]);

    setPlayers([...diceScore]);
  };

  //   const incrementScore = (id) => {
  //     const updatedPlayers = players.map((player) => {
  //       if (player.id === id) {
  //         console.log("Player:", player.id, "has scored!");
  //         return {
  //           ...player,
  //           score: player.score + 1,
  //         };
  //       }
  //     });
  //   };

  function compareRoll() {
    const player1 = players[0];
    const player2 = players[1];

    const whoWon = player1.roll > player2.roll ? player1.id : player2.id;

    const updatedPlayers = players.map((player) => {
      if (whoWon === player.id) {
        // is this the player who won?
        // if so => update score
        return {
          ...player,
          score: player.score + 1,
        };
      } else {
        // if not, return him
        return player;
      }
    });

    setPlayers(updatedPlayers);
  }

  return (
    <div>
      <h1>Scoreboard</h1>
      <p>
        {players.map((player) => {
          return (
            <Player
              key={player.id}
              id={player.id}
              name={player.name}
              roll={player.roll}
              score={player.score}
              diceRoll={diceRoll}
              compareScore={compareRoll}
            />
          );
        })}
      </p>
      <button onClick={diceRoll}>Roll!</button>
      <button onClick={compareRoll}>Compare rolls!</button>
    </div>
  );
}
