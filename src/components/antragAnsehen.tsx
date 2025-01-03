"use client";



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
export default function AntragAnsehenUI({ id, titel, aUE,zweckbestimmung,kostenNutzenSchaetzung,verzeichnisHardSoftware,konzeptZugriffsberechtigung,schnittstellenITSysteme,organisatorischeUndZeitlicheProjektabwicklung,alternativen,listePersBezDaten,zweckPersBezDaten,artDatenerfassung,sicherungVerwaltungLoeschungPersBezDaten,kommentarBetriebsrat, genehmigt }: AntragAnsehenUIProps) {
    return (
        <div className="max-w-3xl mx-auto my-10 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-100 border-b">
                <h1 className="text-lg font-semibold text-gray-900">{titel}</h1>
            </div>
            <div className="p-4">
                <p className="text-gray-700"><strong>Art, Umfang und Einsatzort des IT-Systems: <br/></strong> {aUE}</p>
                <p className="text-gray-700"><strong>Zweckbestimmung:<br/></strong> {zweckbestimmung}</p>
                <p className="text-gray-700"><strong>Kosten-Nutzen-Schätzung:<br/></strong> {kostenNutzenSchaetzung}</p>
                <p className="text-gray-700"><strong>Verzeichnis der Hard- und
                    Software:<br/></strong> {verzeichnisHardSoftware}</p>
                <p className="text-gray-700"><strong>Konzept der
                    Zugriffsberechtigung:<br/></strong> {konzeptZugriffsberechtigung}</p>
                <p className="text-gray-700"><strong>Schnittstellen zu
                    IT-Systemen:<br/></strong> {schnittstellenITSysteme}</p>
                <p className="text-gray-700"><strong>Organisatorische und zeitliche
                    Projektabwicklung:<br/></strong> {organisatorischeUndZeitlicheProjektabwicklung}</p>
                <p className="text-gray-700"><strong>Alternativen:<br/></strong> {alternativen}</p>
                <p className="text-gray-700"><strong>Liste der personenbezogenen Daten:<br/></strong> {listePersBezDaten}</p>
                <p className="text-gray-700"><strong>Zweck der Verarbeitung personenbezogener
                    Daten:<br/></strong> {zweckPersBezDaten}</p>
                <p className="text-gray-700"><strong>Art der Datenerfassung:<br/></strong> {artDatenerfassung}</p>
                <p className="text-gray-700"><strong>Sicherung, Verwaltung und Löschung personenbezogener
                    Daten:<br/></strong> {sicherungVerwaltungLoeschungPersBezDaten}</p>
            </div>
            <div className="p-4 border-t border-gray-200">
                <span
                    className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${genehmigt ? 'text-green-900 bg-green-200' : 'text-red-900 bg-red-200'}`}>
                    {genehmigt ? 'Genehmigt' : 'Derzeit nicht genehmigt'}
                </span>
                <p className="text-gray-700"><strong>Kommentar Betriebsrat</strong> {kommentarBetriebsrat}</p>
            </div>

            <div className="p-4 border-t border-gray-200 text-right">
                <span className="text-xs text-gray-600">ID: {id}</span>
            </div>
        </div>
    );
}
