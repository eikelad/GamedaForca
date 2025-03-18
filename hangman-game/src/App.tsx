import { useState } from "react";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Keyboard from "./components/Keyboard";
import HangmanDrawing from "./components/HangmanDrawing";
import "./styles/globals.css";

const words = [
  { word: "amazonas", category: "ESTADO", hint: "Estado com a maior floresta tropical do mundo." },
  { word: "bahia", category: "ESTADO", hint: "Conhecido pelo Carnaval de Salvador e a cultura afro-brasileira." },
  { word: "minasgerais", category: "ESTADO", hint: "Famoso por suas montanhas, queijo e cidades historicas." },
  { word: "pernambuco", category: "ESTADO", hint: "Lar do frevo e do maior Sao Joao do mundo." },
  { word: "riodejaneiro", category: "ESTADO", hint: "Cidade maravilhosa e palco do Cristo Redentor." },
  { word: "saopaulo", category: "ESTADO", hint: "O estado mais populoso e centro economico do Brasil." },
  { word: "ceara", category: "ESTADO", hint: "Famoso por suas praias e pelo humor cearense." },
  { word: "parana", category: "ESTADO", hint: "Onde fica a cidade de Curitiba e as Cataratas do Iguacu." },
  { word: "matogrosso", category: "ESTADO", hint: "Abriga o Pantanal, a maior planicie alagada do mundo." },
  { word: "tocantins", category: "ESTADO", hint: "Estado jovem que abriga o Jalapao." },
];



export default function App() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [lives, setLives] = useState(6); 

  const currentWord = words[currentWordIndex];
  const errors = 6 - lives; 

  const displayWord = currentWord.word
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");
    const handleReset = (nextWord = false) => {
      setGuessedLetters([]);
      setLives(6); 
    
      if (nextWord) {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };
  
    
    
  const handleGuess = (letter: string) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!currentWord.word.includes(letter)) {
        setLives(lives - 1);
      }
    }
  };
  const handleRevealAnswer = () => {
    setGuessedLetters(currentWord.word.split(""));
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
   <Header onRevealAnswer={handleRevealAnswer} />

      <HangmanDrawing errors={errors} />
      <GameBoard category={currentWord.category} hint={currentWord.hint} displayWord={displayWord} lives={lives} />
      <Keyboard guessedLetters={guessedLetters} onGuess={handleGuess} />
      <div className="mt-6 flex gap-4">
      <button className="button" onClick={() => handleReset(false)}>Resetar</button>
<button className="button" onClick={() => handleReset(true)}>Próximo</button>

      </div>
    </div>
  );
}
