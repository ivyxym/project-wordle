import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [wordList, setWordList] = React.useState([]);
  function addWord(word) {
    // if (wordList.length >= NUM_OF_GUESSES_ALLOWED) {
    //   window.alert('You already reach the limit.');
    //   return;
    // }
    const nextWorList = [...wordList];
    nextWorList.push({ word, id: Math.random() });
    setWordList(nextWorList);
  }
  return (
    <>
      <GuessList wordList={wordList} answer={answer}></GuessList>
      <GuessInput addWord={addWord} />
    </>
  );
}

export default Game;
