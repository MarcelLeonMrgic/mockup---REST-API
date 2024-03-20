
import ProjektAntragFormblatt from "@/components/projektAntragFormblatt";
import Antragsliste from "@/components/antragsListe";
import ProjektantragNavbar from "@/components/projektAntragNavbar";
import MenuArbeitgeber from "@/components/menuArbeitgeber";
import Footer from "@/components/footer";
export default function Projektantrag(){

    return(
        <div className={"max-w-3xl mx-auto p-8"}>
            <MenuArbeitgeber/>
            <ProjektantragNavbar/>

            <Antragsliste/>
            <Footer/>

        </div>
    )
}