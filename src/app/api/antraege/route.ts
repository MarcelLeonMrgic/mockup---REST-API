import connectMongoDB from "@/libs/mongodb";
import Antrag from "@/models/antrag";
import { NextResponse } from "next/server";

export async function POST(request: any) {
    const { titel, beschreibung } = await request.json();
    const isConnected = await connectMongoDB();

    if (!isConnected) {
        return NextResponse.json({ message: "Fehler beim Verbinden mit MongoDB" }, { status: 500 });
    }

    await Antrag.create({ titel, beschreibung });
    return NextResponse.json({ message: "Antrag erstellt" }, { status: 201 });
}

export async function GET(){
    await connectMongoDB();
    const antraege = await Antrag.find();
    return NextResponse.json({antraege})
}

export async function DELETE(request:any){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Antrag.findByIdAndDelete(id);
    return NextResponse.json({message:"Antrag entfernt"},{status:200});
}