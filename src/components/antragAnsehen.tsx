"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface AntragAnsehenUIProps{
    id:string;
    titel:string;
    beschreibung: string;
    genehmigt: boolean;
}
export default function AntragAnsehenUI({id,titel,beschreibung,genehmigt}:AntragAnsehenUIProps){
    return <div>
        {id}
    </div>
}