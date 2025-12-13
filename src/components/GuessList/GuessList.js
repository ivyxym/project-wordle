import React from 'react';

function GuessList({ wordList }) {
  return (
    <div className="guess-results">
      {wordList.map(({ word, id }) => (
        <p className="guess" key={id}>
          {word}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
