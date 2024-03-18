"use client"
import {HiOutlineTrash} from "react-icons/hi";
import {useRouter} from "next/navigation";

interface LoeschenBTNProps {
    id: string;
}
export default function LoeschenBTN({id}: LoeschenBTNProps){
    const router = useRouter()
    const entferneAntrag = async ()=>{
        const confirmation = confirm("Wollen Sie den Antrag wirklich löschen?");

        if (confirmation){
            const res = await fetch(`https://mockup-tau.vercel.app/api/antraege?id=${id}`,{
                method:"DELETE"
            })
            if(res.ok){

                router.refresh();
            }

        }
    }
    return(
        <button onClick={entferneAntrag}>
            <HiOutlineTrash className={"text-red-400"} size={24}></HiOutlineTrash>
        </button>
    )
}