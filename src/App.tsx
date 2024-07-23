import { useEffect, useState } from "react";
import words from "./wordList.json";

import "./App.css";
import HangmanDrawing from "./HangmanDrawing.tsx";
import HangmanWord from "./HangmanWord.tsx";
import Keyboard from "./Keyboard.tsx";

const BODY_PARTS = 6

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const [isWinner, setIsWinner] = useState(false)
const [isLoser, setIsLoser] = useState(false)

  function addGuessedLetter(letter: string) {
    if (guessedLetters.includes(letter)) return;
    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const winCondition = wordToGuess.split("").every(letter => 
      guessedLetters.includes(letter.toLowerCase()))

      if (winCondition) setIsWinner(true)

        const loseCondition = incorrectLetters.length >= BODY_PARTS

        if (loseCondition) setIsLoser(true)
  
 
    }, [guessedLetters, wordToGuess, incorrectLetters])
  

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
         {isWinner && "You Win! - Refresh to play again"}
         {isLoser && "Nice Try! - Refresh to play again"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} reveal={isLoser}/>
      <div
        style={{
          alignSelf: "stretch",
        }}
      >
        <Keyboard activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
  inactiveLetters={incorrectLetters}
  addGuessedLetter={addGuessedLetter}
  disabled={isWinner || isLoser}

/>
      </div>
    </div>
  );
}

export default App;
