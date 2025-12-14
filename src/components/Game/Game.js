import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [wordList, setWordList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('playing');

  function addWord(word) {
    // if (wordList.length >= NUM_OF_GUESSES_ALLOWED) {
    //   window.alert('You already reach the limit.');
    //   return;
    // }
    const nextWorList = [...wordList];
    nextWorList.push({ word, id: Math.random() });
    setWordList(nextWorList);

    if (word.toUpperCase() === answer) {
      setGameStatus('happy-ending');
    } else if (nextWorList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('sad-ending');
    }
  }
  return (
    <>
      <GuessList wordList={wordList} answer={answer}></GuessList>
      <GuessInput addWord={addWord} gameStatus={gameStatus} />
      {gameStatus === 'happy-ending' && (
        <HappyBanner numOfGuessess={wordList.length} />
      )}
      {gameStatus === 'sad-ending' && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
