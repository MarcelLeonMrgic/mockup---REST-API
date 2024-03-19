"use client";
import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import Footer from "@/components/footer";

export default function AntragErstellen(){
    const [titel, setTitel] = useState("");
    const [beschreibung, setBeschreibung] = useState("")

    const router = useRouter();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!titel || !beschreibung){
            alert("Antrag unvollständig");
            return;
        }
        try {
            const res =await fetch("api/antraege" ,{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify(({titel,beschreibung}))
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
    return (<>
        <form onSubmit={handleSubmit} className={"flex flex-col gap-3"}>
            <input
                className={"border border-slate-500 px-8 py-2 "}
                type="text"
                placeholder="Antragstitel"
                onChange={(e)=>{setTitel(e.target.value)}}
                value = {titel}
            />

            <input
                className={"border border-slate-500 px-8 py-2 "}
                type="text"
                placeholder="Antragsbeschreibung"
                onChange={(e)=>{setBeschreibung(e.target.value)}}
                value = {beschreibung}
            />

            <button type="submit" className={"bg-green-600 font-bold text-white py-3 px-6 w-fit"}>Absenden</button>
        </form>

        </>


    )
}