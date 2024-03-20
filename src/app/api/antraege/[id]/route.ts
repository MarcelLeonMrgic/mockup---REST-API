import connectMongoDB from "@/libs/mongodb";
import Antrag from "@/models/antrag";
import {NextResponse} from "next/server";

interface Params {
    id: string;
}
export async function PUT(request: any, {params}: {params: Params}) {
    const {id} = params;
    const{neuerTitel:titel , neueAUE:aUE} = await request.json();
    await connectMongoDB();
    await Antrag.findByIdAndUpdate(id,{titel, aUE});
    return NextResponse.json({message:"Antrag bearbeitet"},{status:200});
}

export async function GET(request: any, {params}: {params: Params}){
    const {id} = params;
    await connectMongoDB();
    const antrag = await Antrag.findOne({_id: id});
    return NextResponse.json({antrag},{status:200});
}
