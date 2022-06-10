// import { useState } from "react";

export default function Player(props) {
  return (
    <div>
      <p>
        {props.name} rolls: {props.roll} score: {props.score}
      </p>
    </div>
  );
}
