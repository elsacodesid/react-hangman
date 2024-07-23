import React from 'react'

type HangmanWordProps = {
  guessedLetters: string[],
  wordToGuess: string
}
function HangmanWord({guessedLetters, wordToGuess}: HangmanWordProps) {
  return (
    < div style={{
      display: "flex",
      gap: ".25em",
      fontSize: "6rem",
      fontWeight: "bold",
      textTransform: "uppercase", 
      fontFamily: "monospace"
    }}>{wordToGuess.split("").map((letter, index) => (
      <span style={{
        borderBottom: ".1em solid white"
      }}><span key={index} style={{
        visibility: guessedLetters.includes(letter) ? "visible" : "hidden",

      }}>{letter}</span></span>
    ))}</div>
  )
}

export default HangmanWord