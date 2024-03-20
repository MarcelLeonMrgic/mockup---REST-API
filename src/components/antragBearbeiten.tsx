"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface AntragBearbeitenUIProps {
    id: string;
    titel: string;
    aUE: string;
    zweckbestimmung:string;
    kostenNutzenSchaetzung:string;
    verzeichnisHardSoftware:string;
    konzeptZugriffsberechtigung:string;
    schnittstellenITSysteme:string;
    organisatorischeUndZeitlicheProjektabwicklung:string;
    alternativen:string;
    listePersBezDaten:string;
    zweckPersBezDaten:string;
    artDatenerfassung:string;
    sicherungVerwaltungLoeschungPersBezDaten:string;
}

export default function AntragBearbeitenUI({ id, titel, aUE,zweckbestimmung,kostenNutzenSchaetzung,verzeichnisHardSoftware,konzeptZugriffsberechtigung,schnittstellenITSysteme,organisatorischeUndZeitlicheProjektabwicklung,alternativen,listePersBezDaten,zweckPersBezDaten,artDatenerfassung,sicherungVerwaltungLoeschungPersBezDaten }: AntragBearbeitenUIProps) {
    const [neuerTitel, setNeuerTitel] = useState(titel);
    const [neueAUE, setNeueAUE] = useState(aUE);
    const [neueZweckbestimmung, setNeueZweckbestimmung] = useState(zweckbestimmung);
    const [neueKostenNutzenSchaetzung, setNeueKostenNutzenSchaetzung] = useState(kostenNutzenSchaetzung)
    const [neueVerzeichnisHardSoftware, setNeueVerzeichnisHardSoftware] = useState(verzeichnisHardSoftware)
    const [neueKonzeptZugriffsberechtigung, setNeueKonzeptZugriffsberechtigung] = useState(konzeptZugriffsberechtigung)
    const [neueSchnittstellenITSysteme, setNeueSchnittstellenITSysteme] = useState(schnittstellenITSysteme)
    const [neueOrganisatorischeUndZeitlicheProjektabwicklung, setNeueOrganisatorischeUndZeitlicheProjektabwicklung] = useState(organisatorischeUndZeitlicheProjektabwicklung)
    const [neueAlternativen, setNeueAlternativen] = useState(alternativen)
    const [neueListePersBezDaten, setNeueListePersBezDaten] = useState(listePersBezDaten)
    const [neueZweckPersBezDaten, setNeueZweckPersBezDaten] = useState(zweckPersBezDaten)
    const [neueArtDatenerfassung, setNeueArtDatenerfassung] = useState(artDatenerfassung)
    const [neueSicherungVerwaltungLoeschungPersBezDaten, setNeueSicherungVerwaltungLoeschungPersBezDaten] = useState(sicherungVerwaltungLoeschungPersBezDaten)


    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await fetch(`https://mockup-tau.vercel.app/api/antraege/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",

                },
                body: JSON.stringify({ neuerTitel, neueAUE , neueZweckbestimmung,neueKostenNutzenSchaetzung,neueVerzeichnisHardSoftware,neueKonzeptZugriffsberechtigung, neueSchnittstellenITSysteme,neueOrganisatorischeUndZeitlicheProjektabwicklung,neueAlternativen,neueListePersBezDaten,neueZweckPersBezDaten,neueArtDatenerfassung,neueSicherungVerwaltungLoeschungPersBezDaten }),
            });


            if (!res.ok) {
                console.log(id)
                throw new Error("Failed to update topic");
            }


            router.push("/projektantrag");

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
        <h1>test</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setNeuerTitel(e.target.value)}
                value={neuerTitel}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Topic Title"
            />

            <textarea
                className="border border-slate-500 p-2 h-32"
                onChange={(e) => setNeueAUE(e.target.value)}
                value={neueAUE}
            ></textarea>

            <h1>Zweckbestimmung des IT-Systems bzw. mit dem
                IT-System verbundene wirtschaftliche,
                technische und personelle Zielsetzungen</h1>
            <textarea
                className="border border-slate-500 p-2 h-32"
                onChange={(e) => setNeueZweckbestimmung(e.target.value)}
                value={neueZweckbestimmung}
            ></textarea>
            <h1>Kosten-Nutzen-Schätzungen; wesentliche
                wirtschaftliche Auswirkungen auf das
                Unternehmen</h1>
            <textarea
                className="border border-slate-500 p-2 h-32"
                onChange={(e) => setNeueKostenNutzenSchaetzung(e.target.value)}
                value={neueKostenNutzenSchaetzung}
            ></textarea>

            <h1>Verzeichnis der eingesetzten Hard- und
                Software</h1>
            <textarea
                className="border border-slate-500 p-2 h-32"
                onChange={(e) => setNeueVerzeichnisHardSoftware(e.target.value)}
                value={neueVerzeichnisHardSoftware}
            ></textarea>

            <h1>Konzept der Zugriffsberechtigung</h1>
            <textarea
                className="border border-slate-500 p-2 h-32"
                onChange={(e) => setNeueKonzeptZugriffsberechtigung(e.target.value)}
                value={neueKonzeptZugriffsberechtigung}
            ></textarea>

            <h1>Schnittstellen zu anderen vorhandenen IT-
                Systemen sowie ein Verzeichnis der darüber
                ausgetauschten personenbezogenen Daten</h1>
            <textarea
                className="border border-slate-500 p-2 h-32"
                onChange={(e) => setNeueSchnittstellenITSysteme(e.target.value)}
                value={neueSchnittstellenITSysteme}
            ></textarea>

            <h1>Komplette und aktuelle Darstellung der
                beabsichtigten organisatorischen und zeitlichen
                Projektabwicklung</h1>
            <textarea
                className="border border-slate-500 p-2 h-32"
                onChange={(e) => setNeueOrganisatorischeUndZeitlicheProjektabwicklung(e.target.value)}
                value={neueOrganisatorischeUndZeitlicheProjektabwicklung}
            ></textarea>
            <h1>Information über mögliche Alternativen zum
                geplanten IT-System</h1>
            <textarea
                className="border border-slate-500 p-2 h-32"
                onChange={(e) => setNeueAlternativen(e.target.value)}
                value={neueAlternativen}
            ></textarea>
            <h1>Liste der mit dem IT-System verarbeiteten und
                gespeicherten personenbezogenen Daten</h1>
            <textarea
                className="border border-slate-500 p-2 h-32"
                onChange={(e) => setNeueListePersBezDaten(e.target.value)}
                value={neueListePersBezDaten}
            ></textarea>
            <h1>Zweck der verarbeiteten personenbezogenen
                Daten</h1>
            <textarea
                className="border border-slate-500 p-2 h-32"
                onChange={(e) => setNeueZweckPersBezDaten(e.target.value)}
                value={neueZweckPersBezDaten}
            ></textarea>
            <h1>Art der Datenerfassung und
                Weiterverarbeitung, sofern ein Bezug zu
                Beschäftigtendaten besteht</h1>
            <textarea
                className="border border-slate-500 p-2 h-32"
                onChange={(e) => setNeueArtDatenerfassung(e.target.value)}
                value={neueArtDatenerfassung}
            ></textarea>
            <h1>Vorgesehene Sicherung, Verwaltung und
                Löschung der personenbezogenen Daten</h1>
            <textarea
                className="border border-slate-500 p-2 h-32"
                onChange={(e) => setNeueSicherungVerwaltungLoeschungPersBezDaten(e.target.value)}
                value={neueSicherungVerwaltungLoeschungPersBezDaten}
            ></textarea>

            <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
                Antrag updaten
            </button>
        </form>
        </>
    );
}