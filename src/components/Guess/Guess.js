import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const checkResult = value
    ? checkGuess(value.word, answer)
    : undefined;

  return (
    <p className="guess">
      {range(5).map((num) => {
        const letter = checkResult
          ? checkResult[num].letter
          : undefined;
        const status = checkResult
          ? checkResult[num].status
          : undefined;

        const className = status ? `cell ${status}` : 'cell';
        return (
          <span className={className} key={num}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
