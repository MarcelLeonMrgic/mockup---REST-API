import Image from "next/image";
import Link from "next/link";
import LoginUI from "@/components/loginUI";
import ProjektantragNavbar from "@/components/projektAntragNavbar";


export default function Home() {
  return (
    <main>
        <ProjektantragNavbar/>
        <LoginUI/>


    </main>
  );
}
