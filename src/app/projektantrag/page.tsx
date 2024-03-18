
import ProjektAntragFormblatt from "@/components/projektAntragFormblatt";
import Antragsliste from "@/components/antragsListe";
import ProjektantragNavbar from "@/components/projektAntragNavbar";
export default function Projektantrag(){

    return(
        <div className={"max-w-3xl mx-auto p-8"}>
            <ProjektantragNavbar/>

            <Antragsliste/>

        </div>
    )
}