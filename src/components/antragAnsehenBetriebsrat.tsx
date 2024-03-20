"use client";



import {useRouter} from "next/navigation";
import {useState} from "react";

interface AntragAnsehenUIProps{
    id:string;
    titel:string;
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

    genehmigt: boolean;
}


export default function AntragAnsehenBetriebsratUI({ id, titel, aUE,zweckbestimmung,kostenNutzenSchaetzung,verzeichnisHardSoftware,konzeptZugriffsberechtigung,schnittstellenITSysteme,organisatorischeUndZeitlicheProjektabwicklung,alternativen,listePersBezDaten,zweckPersBezDaten,artDatenerfassung,sicherungVerwaltungLoeschungPersBezDaten, genehmigt }: AntragAnsehenUIProps) {
    const [neueGenehmigt, setNeueGenehmigt] = useState(genehmigt);
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await fetch(`https://mockup-tau.vercel.app/api/antraege/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",

                },
                body: JSON.stringify({ neueGenehmigt }),
            });


            if (!res.ok) {
                console.log(id)
                throw new Error("Failed to update topic");
            }

            router.refresh();
            router.push("/projektantrag");

        } catch (error) {
            console.log(error);
        }
    };
    return (<>
            <div className="max-w-3xl mx-auto my-10 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-4 bg-gray-100 border-b">
                    <h1 className="text-lg font-semibold text-gray-900">{titel}</h1>
                </div>
                <div className="p-4">
                    <p className="text-gray-700"><strong>Antragseinheit (aUE):</strong> {aUE}</p>
                    <p className="text-gray-700"><strong>Zweckbestimmung:</strong> {zweckbestimmung}</p>
                    <p className="text-gray-700"><strong>Kosten-Nutzen-Schätzung:</strong> {kostenNutzenSchaetzung}</p>
                    <p className="text-gray-700"><strong>Verzeichnis der Hard- und
                        Software:</strong> {verzeichnisHardSoftware}</p>
                    <p className="text-gray-700"><strong>Konzept der
                        Zugriffsberechtigung:</strong> {konzeptZugriffsberechtigung}</p>
                    <p className="text-gray-700"><strong>Schnittstellen zu
                        IT-Systemen:</strong> {schnittstellenITSysteme}</p>
                    <p className="text-gray-700"><strong>Organisatorische und zeitliche
                        Projektabwicklung:</strong> {organisatorischeUndZeitlicheProjektabwicklung}</p>
                    <p className="text-gray-700"><strong>Alternativen:</strong> {alternativen}</p>
                    <p className="text-gray-700"><strong>Liste der personenbezogenen Daten:</strong> {listePersBezDaten}
                    </p>
                    <p className="text-gray-700"><strong>Zweck der Verarbeitung personenbezogener
                        Daten:</strong> {zweckPersBezDaten}</p>
                    <p className="text-gray-700"><strong>Art der Datenerfassung:</strong> {artDatenerfassung}</p>
                    <p className="text-gray-700"><strong>Sicherung, Verwaltung und Löschung personenbezogener
                        Daten:</strong> {sicherungVerwaltungLoeschungPersBezDaten}</p>
                </div>
                <div className="p-4 border-t border-gray-200">
                <span
                    className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${genehmigt ? 'text-green-900 bg-green-200' : 'text-red-900 bg-red-200'}`}>
                    {genehmigt ? 'Genehmigt' : 'Derzeit nicht genehmigt'}
                </span>
                </div>
                <div className="p-4 border-t border-gray-200 text-right">
                    <span className="text-xs text-gray-600">ID: {id}</span>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                <div>
                    <h1>Antrag zustimmen</h1>
                    <input
                        type="checkbox"
                        checked={neueGenehmigt} // Stellt sicher, dass die Checkbox den Zustand von `neueGenehmigt` reflektiert
                        onChange={(e) => setNeueGenehmigt(e.target.checked)} // Aktualisiert `neueGenehmigt` basierend auf dem Check-Status
                    />
                </div>

                <button type="submit">Submit</button>


            </form>
        </>

    );
}
