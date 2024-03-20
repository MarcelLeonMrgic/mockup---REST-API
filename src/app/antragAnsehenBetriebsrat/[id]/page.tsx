import AntragBearbeitenUI from "@/components/antragBearbeiten";
import AntragAnsehenUI from "@/components/antragAnsehen";
import MenuArbeitgeber from "@/components/menuArbeitgeber";
import AntragAnsehenBetriebsratUI from "@/components/antragAnsehenBetriebsrat";

const getTopicById = async (id:string) => {
    try {
        const res = await fetch(`https://mockup-tau.vercel.app/api/antraege/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topic");
        }

        return res.json();
    } catch (error) {
        console.log(error);
        return null;
    }
};
interface Params {
    id: string;
}

export default async function SeeTopic({ params }: { params: Params }) {

    const { id } = params;

    const { antrag } = await  getTopicById(id);
    const { titel, aUE , zweckbestimmung,kostenNutzenSchaetzung,verzeichnisHardSoftware,konzeptZugriffsberechtigung,schnittstellenITSysteme,organisatorischeUndZeitlicheProjektabwicklung,alternativen,listePersBezDaten,zweckPersBezDaten,artDatenerfassung,sicherungVerwaltungLoeschungPersBezDaten,kommentarBetriebsrat, genehmigt } = antrag;

    return <AntragAnsehenBetriebsratUI id={id}
                            titel={titel}
                            aUE={aUE}
                            zweckbestimmung={zweckbestimmung}
                            kostenNutzenSchaetzung={kostenNutzenSchaetzung}
                            verzeichnisHardSoftware={verzeichnisHardSoftware}
                            konzeptZugriffsberechtigung={konzeptZugriffsberechtigung}
                            schnittstellenITSysteme={schnittstellenITSysteme}
                            organisatorischeUndZeitlicheProjektabwicklung={organisatorischeUndZeitlicheProjektabwicklung}
                            alternativen={alternativen}
                            listePersBezDaten={listePersBezDaten}
                            zweckPersBezDaten={zweckPersBezDaten}
                            artDatenerfassung={artDatenerfassung}
                            sicherungVerwaltungLoeschungPersBezDaten={sicherungVerwaltungLoeschungPersBezDaten}
                            genehmigt={genehmigt}
                                       kommentarBetriebsrat={kommentarBetriebsrat}
    />;
}