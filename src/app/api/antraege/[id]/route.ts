import connectMongoDB from "@/libs/mongodb";
import Antrag from "@/models/antrag";
import {NextResponse} from "next/server";

interface Params {
    id: string;
}
export async function PUT(request: any, {params}: {params: Params}) {
    const {id} = params;
    const{neuerTitel:titel , neueBeschreibung:beschreibung} = request.json();
    await connectMongoDB();
    await Antrag.findByIdAndUpdate(id,{titel, beschreibung});
    return NextResponse.json({message:"Antrag bearbeitet"},{status:200});


}

