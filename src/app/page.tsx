import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const words: string[] = ["bad", "very bad", "very very bad"];

  return (
	<div>
  	<div className="flex flex-col h-[calc(100vh-60px)] items-center justify-center">
    	<h1 className="font-bold text-5xl">Drugs are 
      	<FlipWords words={words}/>
    	</h1>
  	</div>
	</div>
  )
}

