import React from 'react';
import { range } from '../../utils';

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span className="cell" key={num}>
          {value ? value.word.split('')[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
