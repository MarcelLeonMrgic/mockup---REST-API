import connectMongoDB from "@/libs/mongodb";
import Antrag from "@/models/antrag";
import {NextResponse} from "next/server";

interface Params {
    id: string;
}
export async function PUT(request: any, {params}: {params: Params}) {
    const {id} = params;
    const{neuerTitel:titel , neueAUE:aUE , neueZweckbestimmung:zweckbestimmung , neueKostenNutzenSchaetzung:kostenNutzenSchaetzung , neueVerzeichnisHardSoftware:verzeichnisHardSoftware, neueKonzeptZugriffsberechtigung:konzeptZugriffsberechtigung , neueSchnittstellenITSysteme:schnittstellenITSysteme, neueOrganisatorischeUndZeitlicheProjektabwicklung:organisatorischeUndZeitlicheProjektabwicklung , neueAlternativen:alternativen , neueListePersBezDaten:listePersBezDaten , neueZweckPersBezDaten:zweckPersBezDaten ,neueArtDatenerfassung:artDatenerfassung,neueSicherungVerwaltungLoeschungPersBezDaten:sicherungVerwaltungLoeschungPersBezDaten ,neueKommentarBetriebsrat:kommentarBetriebsrat,neueGenehmigt:genehmigt} = await request.json();
    await connectMongoDB();
    await Antrag.findByIdAndUpdate(id,{titel, aUE, zweckbestimmung, kostenNutzenSchaetzung, verzeichnisHardSoftware ,konzeptZugriffsberechtigung , schnittstellenITSysteme, organisatorischeUndZeitlicheProjektabwicklung ,alternativen, listePersBezDaten , zweckPersBezDaten, artDatenerfassung, sicherungVerwaltungLoeschungPersBezDaten,kommentarBetriebsrat, genehmigt});
    return NextResponse.json({message:"Antrag bearbeitet"},{status:200});
}

export async function GET(request: any, {params}: {params: Params}){
    const {id} = params;
    await connectMongoDB();
    const antrag = await Antrag.findOne({_id: id});
    return NextResponse.json({antrag},{status:200});
}
