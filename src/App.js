import { useState } from "react";
import GameBoard from "./GameBoard";
import WordSelect from "./WordSelect";
import './App.css';
export default function App() {
  const [secretWord, setSecretWord] = useState('');
  return (
    <div className="app-container">
      <h1>Welcome to the Haggman Game</h1>
      <p>Do you want to play game?</p>
      <WordSelect wordSelected={val => setSecretWord(val)} isShown={!secretWord} />
      <GameBoard secretWord={secretWord} maxErrors={6} isShown={secretWord} />
    </div>
  );
}