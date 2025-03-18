type KeyboardProps = {
    guessedLetters: string[];
    onGuess: (letter: string) => void;
  };
  
  export default function Keyboard({ guessedLetters, onGuess }: KeyboardProps) {
    return (
      <div className="grid grid-cols-9 gap-2 mt-6">
        {"abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
          <button
            key={letter}
            className={`keyboard-button ${guessedLetters.includes(letter) ? "disabled" : ""}`}
            onClick={() => onGuess(letter)}
            disabled={guessedLetters.includes(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    );
  }
  