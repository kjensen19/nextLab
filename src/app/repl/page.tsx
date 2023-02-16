export default function Page() {
  // type startRepl = (x: string) => void;
  // function repl(fn: startRepl) {
  //   //...
  // }

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      const button: HTMLButtonElement = event.currentTarget;
    
  };
  function startRepl(str: string){
    return "replicated"
  }


    return (
      <div className="flex flex-col w-60 align-middle justify-center place-items-center gap-6">
        <h1 className="text-white" >Hello, replicant</h1>
        <button className="rounded-full mx-8 bg-red-400 px-4 py-1 border-white border-2 border-solid button" onClick={buttonHandler}>Begin</button>
        <textarea className="h-40" placeholder=">"></textarea>
      </div>
      )
  }