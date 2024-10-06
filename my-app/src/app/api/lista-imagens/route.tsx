import { NextResponse } from "next/server";

const imagem = [
  { id: 1, Tema:"Foto do livro - Worlds in Collision", url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg' },
  { id: 2,Tema:"Foto do autor - Immanuel Velikovsky" ,url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
  { id: 3, Tema:"Foto da teoria do livro - Cataclismo Astronômico" ,url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' }
]

export async function GET() {
  return NextResponse.json(imagem);
}