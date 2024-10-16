
export default function Home() {

  return (
    <div className="mt-0 space-x-4 flex flex-col justify-center items-center h-screen overflow-hidden text-left">
    <h1 className="animate-slide-in-left bg-gradient-to-t from-violet-500 to-pink-400 bg-clip-text text-transparent text-4xl font-semibold mb-0">
      Gabriela Gomes
    </h1>
    <p className="animate-slide-in-left text-xl mt-4 mb-0">
      Graduanda em Análise e Desenvolvimento de Sistemas | Full-Stack
    </p>
    <p className="animate-slide-in-left text-xl mt-4 mb-0">
      Olá, sejam bem vindos(as) ao meu Portfólio! De uma olhada e conheça mais sobre mim.
    </p>
    <button className=" mt-8 bg-white text-black py-2 px-4 rounded-md hover:bg-slate-200">
      saiba mais
    </button> 
    <button className=" mt-8 bg-slate-400 bg-opacity-20 text-white py-2 px-4 rounded-md hover:bg-white hover:bg-opacity-25">
      currículo
    </button>
    </div>
  )
}