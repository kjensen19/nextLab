export default function Page() {
    return (
      <div className="flex flex-col w-60 align-middle justify-center place-items-center gap-6">
        <h1 className="text-white" >Hello, replicant</h1>
        <button className="rounded-full mx-8 bg-red-400 px-4 py-1 border-white border-2 border-solid" >Begin</button>
        <textarea className="h-40" placeholder=">"></textarea>
      </div>
      )
  }