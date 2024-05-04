import { useState } from 'react';
import LetterGrid from './LetterGrid';
import ButtonGrid from './Button-grid';

export default function GameBoard({ secretWord, maxErrors, isShown }) {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [errorCount, setErrorCount] = useState(0);
  function letterGuestHandler(letter) {
    let val = letter.toLowerCase();
    if(secretWord.toLowerCase().indexOf(val) === -1) {
      setErrorCount(errorCount + 1);
    }
    setGuessedLetters([...guessedLetters, val]);
  }
  return (
    <div className={isShown ? '': 'hidden'}>
      <div>
        Mistakes left: { maxErrors - errorCount }
      </div>
      <LetterGrid secretWord={ secretWord } guessed={guessedLetters} />
      <ButtonGrid letterGuessed={letterGuestHandler} isShown={errorCount < maxErrors} />
    </div>
  )
}