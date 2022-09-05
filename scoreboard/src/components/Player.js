import React, { memo } from "react";

import Counter from "./Counter";

const Player = ({ removePlayer, id, name, score, changeScore }) => {
  return (
    <div className="player">
      {console.log(name + " rendered")}
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>
          ✖
        </button>
        {name}
      </span>

      <Counter score={score} id={id} changeScore={changeScore} />
    </div>
  );
};

// prevents the component from re-rendering if the props are the same by using React.memo
const playerPropsAreEqual = (prevProps, nextProps) => {
  return prevProps.score === nextProps.score;
};

export default memo(Player, playerPropsAreEqual);
