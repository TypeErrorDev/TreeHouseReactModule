import React, { memo } from "react";

import Counter from "./Counter";

const Player = (props) => {
  return (
    <div className="player">
      {console.log(props.name + " rendered")}
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => props.removePlayer(props.id)}
        >
          ✖
        </button>
        {props.name}
      </span>

      <Counter
        score={props.score}
        id={props.id}
        changeScore={props.changeScore}
      />
    </div>
  );
};

// prevents the component from re-rendering if the props are the same by using React.memo
const playerPropsAreEqual = (prevProps, nextProps) => {
  return prevProps.score === nextProps.score;
};

export default memo(Player, playerPropsAreEqual);
