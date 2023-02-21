import { MouseEvent } from "react";

export default function Page() {
  // type startRepl = (x: string) => void;
  // function repl(fn: startRepl) {
  //   //...
  // }
  // Need to add a while loop to activate the board
  // Handling for the data
  // print output

  // const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };

    const buttonHandler = (event: MouseEvent<HTMLButtonElement>):void => {
      event.preventDefault();
      console.log('is this working?')
      // const button: HTMLButtonElement = event.currentTarget;
    
  };
  function startRepl(str: string): string{
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