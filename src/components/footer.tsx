import Link from "next/link";

export default function Footer(){
    return(<>
        <div className="bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-600 w-screen h-10 absolute bottom-0 text-white items-center flex">

            <Link className="pl-5" href={"#"}>Impressum</Link>
            <Link className="pl-5" href={"#"}>AGB&apos;s</Link>
            <Link className="pl-5" href={"#"}>Support</Link>


        </div>
    </>)
}