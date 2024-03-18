import LoeschenBTN from "@/components/loeschenBtn";
import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi";
import Footer from "@/components/footer";

interface Antrag {

    titel: string;
    beschreibung: string;
    _id:string;

}

const getAntrag = async()=>{
    try{
        const res = await fetch('https://mockup-tau.vercel.app/api/antraege',{
            cache: "no-store",
        });
        if(!res.ok){
            throw new Error('Anträge können nicht geladen werden')
        }
        return res.json()
    } catch (error){
        console.log("error loading Anträge",error)
    }
}
export default  async function Antragsliste(){
    const {antraege}= await getAntrag();
    return(
        <>
            {antraege.map((a: Antrag) =>(
            <div key={a._id} className={"p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"}>
                <div>
                    <h2 className={"font-bold text-2xl"}>{a.titel}</h2>
                    <div>{a.beschreibung}</div>
                    <div>{a._id}</div>
                </div>

                <div className={"flex gap-2"}>
                    <LoeschenBTN id={a._id}/>
                    <Link href={`/antragBearbeiten/${a._id}`}> <HiPencilAlt size={24}></HiPencilAlt></Link>
                </div>
            </div>
            ))}


        </>
    )
}