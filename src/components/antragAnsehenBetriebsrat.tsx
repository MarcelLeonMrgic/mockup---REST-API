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

    kommentarBetriebsrat:string;

    genehmigt: boolean;
}


export default function AntragAnsehenBetriebsratUI({ id, titel, aUE,zweckbestimmung,kostenNutzenSchaetzung,verzeichnisHardSoftware,konzeptZugriffsberechtigung,schnittstellenITSysteme,organisatorischeUndZeitlicheProjektabwicklung,alternativen,listePersBezDaten,zweckPersBezDaten,artDatenerfassung,sicherungVerwaltungLoeschungPersBezDaten,kommentarBetriebsrat, genehmigt }: AntragAnsehenUIProps) {
    const [neueGenehmigt, setNeueGenehmigt] = useState(genehmigt);
    const [neueKommentarBetriebsrat, setNeueKommentarBetriebsrat] = useState(kommentarBetriebsrat);
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await fetch(`https://mockup-tau.vercel.app/api/antraege/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",

                },
                body: JSON.stringify({ neueGenehmigt ,neueKommentarBetriebsrat }),
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
            <div className="max-w-4xl mx-auto my-10 bg-white shadow-xl rounded-lg">
                <div className="p-5 bg-gray-100 border-b border-gray-200">
                    <h1 className="text-2xl font-semibold text-gray-900">{titel}</h1>
                </div>
                <div className="p-5">
                    <p className="text-gray-700 mb-4"><strong>Art, Umfang und Einsatzort des IT-Systems:</strong> {aUE}</p>
                    <p className="text-gray-700 mb-4"><strong>Zweckbestimmung:</strong> {zweckbestimmung}</p>
                    <p className="text-gray-700 mb-4"><strong>Kosten-Nutzen-Schätzung:</strong> {kostenNutzenSchaetzung}
                    </p>
                    <p className="text-gray-700 mb-4"><strong>Verzeichnis der Hard- und
                        Software:</strong> {verzeichnisHardSoftware}</p>
                    <p className="text-gray-700 mb-4"><strong>Konzept der
                        Zugriffsberechtigung:</strong> {konzeptZugriffsberechtigung}</p>
                    <p className="text-gray-700 mb-4"><strong>Schnittstellen zu
                        IT-Systemen:</strong> {schnittstellenITSysteme}</p>
                    <p className="text-gray-700 mb-4"><strong>Organisatorische und zeitliche
                        Projektabwicklung:</strong> {organisatorischeUndZeitlicheProjektabwicklung}</p>
                    <p className="text-gray-700 mb-4"><strong>Alternativen:</strong> {alternativen}</p>
                    <p className="text-gray-700 mb-4"><strong>Liste der personenbezogenen
                        Daten:</strong> {listePersBezDaten}</p>
                    <p className="text-gray-700 mb-4"><strong>Zweck der Verarbeitung personenbezogener
                        Daten:</strong> {zweckPersBezDaten}</p>
                    <p className="text-gray-700 mb-4"><strong>Art der Datenerfassung:</strong> {artDatenerfassung}</p>
                    <p className="text-gray-700 mb-4"><strong>Sicherung, Verwaltung und Löschung personenbezogener
                        Daten:</strong> {sicherungVerwaltungLoeschungPersBezDaten}</p>
                </div>
                <div className="p-5 border-t border-gray-200 flex justify-between items-center">
    <span
        className={`rounded-full px-4 py-1 text-sm font-semibold ${genehmigt ? 'text-green-800 bg-green-100' : 'text-red-800 bg-red-100'}`}>
      {genehmigt ? 'Genehmigt' : 'Derzeit nicht genehmigt'}
    </span>
                    <span className="text-xs text-gray-600">ID: {id}</span>
                </div>
                <form onSubmit={handleSubmit} className="p-5 border-t border-gray-200 flex flex-col gap-4">
                    <div>
                        <label htmlFor="approvalCheckbox" className="flex items-center gap-2">
                            <input
                                id="approvalCheckbox"
                                type="checkbox"
                                className="form-checkbox h-5 w-5"
                                checked={neueGenehmigt}
                                onChange={(e) => setNeueGenehmigt(e.target.checked)}
                            />
                            <span className="text-lg">Antrag zustimmen</span>
                        </label>
                    </div>
                    <textarea
                        className="border border-gray-300 p-2 h-32 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        onChange={(e) => setNeueKommentarBetriebsrat(e.target.value)}
                        value={neueKommentarBetriebsrat}
                    ></textarea>
                    <button type="submit"
                            className="self-end bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow">
                        Bestätigen
                    </button>
                </form>
            </div>


        </>

    );
}
