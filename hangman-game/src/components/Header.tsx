type HeaderProps = {
    onRevealAnswer: () => void;
    score: number;
  };
  
  export default function Header({score, onRevealAnswer }: HeaderProps) {
    return (
      <header className="flex justify-between w-full max-w-3xl mb-4">
        
        <h1>J O G O D A F O R C A</h1>
        <button className="button" onClick={onRevealAnswer}>Ajuda</button>
        <br/>
        <span className="font-bold text-lg">Pontuação: {score}</span>
      </header>
    );
  }
  