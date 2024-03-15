import Link from "next/link";

export default function MenuArbeitgeber(){
    return(
        <>
            <div className="w-screen bg-white shadow-md   h-auto md:h-24 flex flex-col md:flex-row items-center justify-between">
                <h1 className=" items-center text-2xl text-blue-700 font-bold pl-6 ">brweb.app</h1>
                <nav className=" flex flex-col flex-wrap md:flex-nowrap md:flex-row pr-6 md:pr-16">
                    <Link href={"#"} className="pl-10 pt-5 md:pl-5 md:pt-0  hover:text-blue-700 text-center">IT-Systeme und Anwendungen </Link>
                    <Link href={"#"} className="pl-10 pt-5 md:pl-5 md:pt-0  hover:text-blue-700 text-center">Mitbestimmung Software</Link>
                    <Link href={"#"} className="pl-10 pt-5 md:pl-5 md:pt-0  hover:text-blue-700 text-center">Anlegen eines Verarbeitungsverzeichnisses</Link>
                </nav>
                <Link href="/login" className="pr-6 ">Logout</Link>
            </div>
        </>
    )
}
