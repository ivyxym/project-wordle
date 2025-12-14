import React from 'react';

function GuessInput({ addWord, gameStatus }) {
  const [guessInput, setGuessInput] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (guessInput.length !== 5) {
      window.alert('Please enter exactly 5 characters.');
      return;
    }
    addWord(guessInput);
    setGuessInput('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        id="guess-input"
        type="text"
        value={guessInput}
        onChange={(event) => {
          const nextGuessInput = event.target.value.toUpperCase();
          setGuessInput(nextGuessInput);
        }}
        disabled={gameStatus !== 'playing'}
      />
    </form>
  );
}

export default GuessInput;
