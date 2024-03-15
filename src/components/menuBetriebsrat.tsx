import Link from "next/link";

export default function MenuBetriebsrat(){
    return(
        <>
        <div className="w-screen bg-white shadow-md h-24 flex items-center justify-between">
            <h1 className="pl-6 text-2xl text-indigo-700 font-bold">brweb.app</h1>
            <nav className="pr-16">
                <Link href={"#"} className="pl-10 hover:text-indigo-700 text-center">Budgetverwaltung und Finanzberichterstattung</Link>
                <Link href={"#"} className="pl-10 hover:text-indigo-700 text-center">Schulungs- und Weiterbildungsmanagement</Link>
                <Link href={"#"} className="pl-10 hover:text-indigo-700 text-center">Aufgaben- und Projektmanagement</Link>
                <Link href={"#"} className="pl-10 hover:text-indigo-700 text-center">Sitzungsmanagement</Link>
                <Link href={"#"} className="pl-10 hover:text-indigo-700 text-center">Dokumentenmanagement</Link>
            </nav>

            <Link href="/login" className="pr-6">Logout</Link>

        </div>
        </>
    )
}