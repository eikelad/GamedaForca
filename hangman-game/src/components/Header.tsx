type HeaderProps = {
    onRevealAnswer: () => void;
  };
  
  export default function Header({ onRevealAnswer }: HeaderProps) {
    return (
      <header className="flex justify-between w-full max-w-3xl mb-4">
        
        <h1>J O G O D A F O R C A</h1>
        <button className="button" onClick={onRevealAnswer}>Ajuda</button>
      </header>
    );
  }
  