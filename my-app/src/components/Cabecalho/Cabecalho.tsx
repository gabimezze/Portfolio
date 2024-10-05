import Menu from "../Menu/Menu";
import Image from "next/image";
import coffee from "@/img/coffee.png";

export default function Cabecalho() {
    return (
        <header className="cabecalho">
            <a><Image src={coffee} alt="coffee" width={400} height={270} /></a>
            <Menu />
        </header>
    )
}