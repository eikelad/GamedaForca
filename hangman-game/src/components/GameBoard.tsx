type GameBoardProps = {
    category: string;
    hint: string;
    displayWord: string;
    lives: number;
  };
  
  export default function GameBoard({ category, hint, displayWord, lives }: GameBoardProps) {
    return (
      <div>
        <div className="text-xl font-semibold border-b-2 border-black pb-2">{category}</div>
        <div className="text-3xl mt-4 tracking-widest font-mono">{displayWord}</div>
        <p className="mt-2 italic text-lg">{hint}</p>
        <p className="lives">Lives remaining: {lives}</p>
      </div>
    );
  }
  