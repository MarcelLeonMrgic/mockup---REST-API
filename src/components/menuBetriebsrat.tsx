import Link from "next/link";

export default function MenuBetriebsrat() {
    return (
        <>
            <div className="w-screen bg-white shadow-md   h-auto md:h-24 flex flex-col md:flex-row items-center justify-between">
                <h1 className=" items-center text-2xl text-indigo-700 font-bold pl-6 ">brweb.app</h1>
                <nav className=" flex flex-col flex-wrap md:flex-nowrap md:flex-row pr-6 md:pr-16">
                    <Link href={"#"} className="pl-10 pt-5 md:pl-5 md:pt-0  hover:text-indigo-700 text-center">Budgetverwaltung und Finanzberichterstattung</Link>
                    <Link href={"#"} className="pl-10 pt-5 md:pl-5 md:pt-0  hover:text-indigo-700 text-center">Schulungs- und Weiterbildungsmanagement</Link>
                    <Link href={"#"} className="pl-10 pt-5 md:pl-5 md:pt-0   hover:text-indigo-700 text-center">Aufgaben- und Projektmanagement</Link>
                    <Link href={"#"} className="pl-10 pt-5 md:pl-5 md:pt-0   hover:text-indigo-700 text-center">Sitzungsmanagement</Link>
                    <Link href={"#"} className="pl-10 pt-5 md:pl-5 md:pt-0   hover:text-indigo-700 text-center">Dokumentenmanagement</Link>
                </nav>
                <Link href="/login" className="pr-6 ">Logout</Link>
            </div>
        </>
    );
}
