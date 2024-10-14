import Menu from "../Menu/Menu";
import Image from "next/image";
import logo from "@/img/logo-g.png";

export default function Cabecalho() {
    return (
        <header className="cabecalho">
            <a><Image src={logo} alt="logo" width={40} height={270} /></a>
            <Menu />
        </header>
    )
}