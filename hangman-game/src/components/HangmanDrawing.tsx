type HangmanDrawingProps = {
    errors: number;
  };
  
  export default function HangmanDrawing({ errors }: HangmanDrawingProps) {
    const stages = [
      `
         -----
         |   |
             |
             |
             |
             |
      =========`,
      `
         -----
         |   |
         O   |
             |
             |
             |
      =========`,
      `
         -----
         |   |
         O   |
         |   |
             |
             |
      =========`,
      `
         -----
         |   |
         O   |
        /|   |
             |
             |
      =========`,
      `
         -----
         |   |
         O   |
        /|\\  |
             |
             |
      =========`,
      `
         -----
         |   |
         O   |
        /|\\  |
        /    |
             |
      =========`,
      `
         -----
         |   |
         O   |
        /|\\  |
        / \\  |
             |
      ========= GAME OVER`,
    ];
  
    return (
      <pre className="text-lg font-mono bg-white text-black p-4 rounded shadow-md">{stages[Math.min(errors, stages.length - 1)]}</pre>
    );
  }
  