import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Sobre</Link></li>
                <li><Link href="/">Projetos</Link></li>
            </ul>
        </nav>
    )
}