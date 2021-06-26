// import arrayList from './arrayList';
import { useState } from 'react';

const Game = ({ wordOne, wordTwo, definition }) => {
  const [answer, setAnswer] = useState(false);

  function handleClick(e) {
    // e.preventDefault();

    setAnswer(true);

    console.log(e.target);
    console.log(answer);
    // answer ? <p>Right</p> : <p>Rong</p>;
  }

  return (
    <section className="game">
      <div className="counter">
        <p>Score: 0</p>
      </div>
      <h3>Definition</h3>
      <p>{definition}</p>
      {/* wordOne comes from the array list */}
      <button
        onClick={() => {
          setAnswer(false);
        }}
      >
        {wordOne}
      </button>
      {/* wordTwo comes from the data returned */}
      <button
        onClick={(e) => {
          //   setAnswer(true);
          handleClick(e);
        }}
      >
        {wordTwo}
      </button>
    </section>
  );
};

export default Game;
