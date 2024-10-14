import Image from "next/image"
import linkedin from "@/img/linkedin.png"
import instagram from "@/img/instagram.png"
import github from "@/img/github.png"
import email from "@/img/email.png"

export default function Sobre() {
    return (
        <div className="sobre">
            <a href="https://www.linkedin.com/in/gabimezze/"><Image src={linkedin} alt="linkedin" width={40} height={40} /></a>
            <a href="https://github.com/gabimezze"><Image src={github} alt="github" width={40} height={40} /></a>
            <a href="https://www.instagram.com/gabimezze/"><Image src={instagram} alt="instagram" width={40} height={40} /></a>
            <a href="mailto:contatogabicez@gmail.com"><Image src={email} alt="email" width={40} height={40} /></a>
            <h1>Sobre Mim</h1>
            <p>Meu nome é Gabriela, tenho 19 anos, e a tecnologia sempre desempenhou um papel central em minha vida, despertando meu interesse desde cedo e proporcionando-me constante entretenimento. Essa curiosidade crescente levou-me ao fascinante mundo da programação.
        Atualmente, estou cursando o segundo semestre na FIAP e já possuo conhecimentos autodidatas adquiridos antes de iniciar a faculdade. Tenho uma grande vontade de aprender e me aprimorar continuamente.
        Meu objetivo é evoluir constantemente como profissional, contribuindo de maneira significativa para as equipes e empresas com as quais colaboro. Estou aberta a oportunidades que me permitam aplicar minhas habilidades e adquirir novos conhecimentos em tecnologias emergentes.</p>
        <h1>Skills</h1>
        <Image alt="Gabi-Js" height={"30"} width={"40"} src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"} />
        <Image alt="Gabi-html5" height={"30"} width={"40"} src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"} />
        <Image alt="Gabi-css3" height={"30"} width={"40"} src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"} />
        <Image alt="Gabi-typescript" height={"30"} width={"40"} src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"} />
        <Image alt="Gabi-Java" height={"30"} width={"40"} src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"} />
        <Image alt="Gabi-nodejs" height={"30"} width={"40"} src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"} />
        <Image alt="Gabi-react" height={"30"} width={"40"} src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"} />
        <Image alt="Gabi-nextjs" height={"30"} width={"40"} src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"} />
        <Image alt="Gabi-git" height={"30"} width={"40"} src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"} />
        </div>
    )
} 