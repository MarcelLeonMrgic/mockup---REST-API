import LoeschenBTN from "@/components/loeschenBtn";
import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi";
import { HiEye } from "react-icons/hi";
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
export default  async function AntragsListeFuerBetriebsrat(){
    const {antraege}= await getAntrag();
    return(
        <>
            {antraege.map((a: Antrag) => (
                <div key={a._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start bg-white shadow rounded-lg">
                    <div>
                        <h2 className="font-bold text-xl text-gray-800">{a.titel}</h2>
                        <p className="text-gray-600">{a.beschreibung}</p>
                        <p className="text-sm text-gray-400">{a._id}</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <Link href={`/antragAnsehenBetriebsrat/${a._id}`}>
                            <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out">
                                <HiEye size={24} />
                            </a>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}