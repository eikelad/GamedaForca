import { useState } from "react";
import Header from "./components/Header";
import GameBoard from "./components/Gameboard";
import Keyboard from "./components/Keyboard";
import "./styles/globals.css";

const words = [
  { word: "peacock", category: "BIRDS", hint: "A large bird with blue and green tail feathers." },
  { word: "eagle", category: "BIRDS", hint: "A bird of prey known for sharp vision." },
];

export default function App() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [lives, setLives] = useState(10);

  const currentWord = words[currentWordIndex];
  const displayWord = currentWord.word
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");

  const handleGuess = (letter: string) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!currentWord.word.includes(letter)) {
        setLives(lives - 1);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Header />
      <GameBoard category={currentWord.category} hint={currentWord.hint} displayWord={displayWord} lives={lives} />
      <Keyboard guessedLetters={guessedLetters} onGuess={handleGuess} />
      <div className="mt-6 flex gap-4">
        <button className="button" onClick={() => setGuessedLetters([])}>Reset</button>
        <button className="button" onClick={() => setCurrentWordIndex((prev) => (prev + 1) % words.length)}>Next</button>
      </div>
    </div>
  );
}
