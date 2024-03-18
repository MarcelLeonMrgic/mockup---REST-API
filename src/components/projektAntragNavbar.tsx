import Link from "next/link";

export default function ProjektantragNavbar(){
    return(
        <nav className={"flex justify-between items-center bg-slate-800 px-8 py-3"}>
            <Link className={"text-white font-bold"} href={"/"}> brweb.app </Link>
            <Link className={"bg-white p-2"} href={"/antragErstellen"}>Neuer Antrag</Link>
        </nav>
    )
}