"use client";
import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import Footer from "@/components/footer";

export default function AntragErstellen(){
    const [titel, setTitel] = useState("");
    const [aUE, setAUE] = useState("")
    const [zweckbestimmung, setZweckbestimmung] = useState("")
    const [kostenNutzenSchaetzung, setKostenNutzenSchaetzung] = useState("")
    const [verzeichnisHardSoftware, setVerzeichnisHardSoftware] = useState("")
    const [konzeptZugriffsberechtigung, setKonzeptZugriffsberechtigung] = useState("")
    const [schnittstellenITSysteme, setSchnittstellenITSysteme] = useState("")
    const [organisatorischeUndZeitlicheProjektabwicklung, setOrganisatorischeUndZeitlicheProjektabwicklung] = useState("")
    const [alternativen, setAlternativen] = useState("")
    const [listePersBezDaten, setListePersBezDaten] = useState("")
    const [zweckPersBezDaten, setZweckPersBezDaten] = useState("")
    const [artDatenerfassung, setArtDatenerfassung] = useState("")
    const [sicherungVerwaltungLoeschungPersBezDaten, setSicherungVerwaltungLoeschungPersBezDaten] = useState("")

    const router = useRouter();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!titel || !aUE|| !zweckbestimmung || !kostenNutzenSchaetzung || !verzeichnisHardSoftware || !konzeptZugriffsberechtigung || !schnittstellenITSysteme || !organisatorischeUndZeitlicheProjektabwicklung ||!alternativen || !listePersBezDaten || !zweckPersBezDaten || !artDatenerfassung || !sicherungVerwaltungLoeschungPersBezDaten){
            alert("Antrag unvollständig");
            return;
        }
        try {
            const res =await fetch("api/antraege" ,{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify(({
                    titel,
                    aUE,
                    zweckbestimmung,
                    kostenNutzenSchaetzung,
                    verzeichnisHardSoftware,
                    konzeptZugriffsberechtigung,
                    schnittstellenITSysteme,
                    organisatorischeUndZeitlicheProjektabwicklung,
                    alternativen,
                    listePersBezDaten,
                    zweckPersBezDaten,
                    artDatenerfassung,
                    sicherungVerwaltungLoeschungPersBezDaten

                }))
            })
            if(res.ok){

                router.push("/projektantrag")
                router.refresh();

            }else{
                new Error("Antrag konnte nicht erstellt werden")
            }

        }catch (error){
            console.log(error)
        }

    }



                return (
                <>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-4xl mx-auto p-4">
                        <h1>Antragstitel</h1>
                        <input
                            className="border border-slate-500 p-2"
                            type="text"
                            onChange={(e) => setTitel(e.target.value)}
                            value={titel}
                        />
                        <h1>Art, Umfang und Einsatzort des IT-Systems</h1>
                        <textarea
                            className="border border-slate-500 p-2 h-32"
                            onChange={(e) => setAUE(e.target.value)}
                            value={aUE}
                        ></textarea>

                        <h1>Zweckbestimmung des IT-Systems bzw. mit dem
                            IT-System verbundene wirtschaftliche,
                            technische und personelle Zielsetzungen</h1>
                        <textarea
                            className="border border-slate-500 p-2 h-32"
                            onChange={(e) => setZweckbestimmung(e.target.value)}
                            value={zweckbestimmung}
                        ></textarea>
                        <h1>Kosten-Nutzen-Schätzungen; wesentliche
                            wirtschaftliche Auswirkungen auf das
                            Unternehmen</h1>
                        <textarea
                            className="border border-slate-500 p-2 h-32"
                            onChange={(e) => setKostenNutzenSchaetzung(e.target.value)}
                            value={kostenNutzenSchaetzung}
                        ></textarea>

                        <h1>Verzeichnis der eingesetzten Hard- und
                            Software</h1>
                        <textarea
                            className="border border-slate-500 p-2 h-32"
                            onChange={(e) => setVerzeichnisHardSoftware(e.target.value)}
                            value={verzeichnisHardSoftware}
                        ></textarea>

                        <h1>Konzept der Zugriffsberechtigung</h1>
                        <textarea
                            className="border border-slate-500 p-2 h-32"
                            onChange={(e) => setKonzeptZugriffsberechtigung(e.target.value)}
                            value={konzeptZugriffsberechtigung}
                        ></textarea>

                        <h1>Schnittstellen zu anderen vorhandenen IT-
                            Systemen sowie ein Verzeichnis der darüber
                            ausgetauschten personenbezogenen Daten</h1>
                        <textarea
                            className="border border-slate-500 p-2 h-32"
                            onChange={(e) => setSchnittstellenITSysteme(e.target.value)}
                            value={schnittstellenITSysteme}
                        ></textarea>

                        <h1>Komplette und aktuelle Darstellung der
                            beabsichtigten organisatorischen und zeitlichen
                            Projektabwicklung</h1>
                        <textarea
                            className="border border-slate-500 p-2 h-32"
                            onChange={(e) => setOrganisatorischeUndZeitlicheProjektabwicklung(e.target.value)}
                            value={organisatorischeUndZeitlicheProjektabwicklung}
                        ></textarea>
                        <h1>Information über mögliche Alternativen zum
                            geplanten IT-System</h1>
                        <textarea
                            className="border border-slate-500 p-2 h-32"
                            onChange={(e) => setAlternativen(e.target.value)}
                            value={alternativen}
                        ></textarea>
                        <h1>Liste der mit dem IT-System verarbeiteten und
                            gespeicherten personenbezogenen Daten</h1>
                        <textarea
                            className="border border-slate-500 p-2 h-32"
                            onChange={(e) => setListePersBezDaten(e.target.value)}
                            value={listePersBezDaten}
                        ></textarea>
                        <h1>Zweck der verarbeiteten personenbezogenen
                            Daten</h1>
                        <textarea
                            className="border border-slate-500 p-2 h-32"
                            onChange={(e) => setZweckPersBezDaten(e.target.value)}
                            value={zweckPersBezDaten}
                        ></textarea>
                        <h1>Art der Datenerfassung und
                            Weiterverarbeitung, sofern ein Bezug zu
                            Beschäftigtendaten besteht</h1>
                        <textarea
                            className="border border-slate-500 p-2 h-32"
                            onChange={(e) => setArtDatenerfassung(e.target.value)}
                            value={artDatenerfassung}
                        ></textarea>
                        <h1>Vorgesehene Sicherung, Verwaltung und
                            Löschung der personenbezogenen Daten</h1>
                        <textarea
                            className="border border-slate-500 p-2 h-32"
                            onChange={(e) => setSicherungVerwaltungLoeschungPersBezDaten(e.target.value)}
                            value={sicherungVerwaltungLoeschungPersBezDaten}
                        ></textarea>

                        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
                            Absenden
                        </button>
                    </form>
                </>
                );


}