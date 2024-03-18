import LoeschenBTN from "@/components/loeschenBtn";
import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi";

export default function Antragsliste(){
    return(
        <>
            <div className={"p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"}>
                <div>
                    <h2 className={"font-bold text-2xl"}>Topic Title</h2>
                    <div>Topic Description</div>
                </div>

                <div className={"flex gap-2"}>
                    <LoeschenBTN/>
                    <Link href={"/antragBearbeiten/123"}> <HiPencilAlt size={24}></HiPencilAlt></Link>
                </div>
            </div>
        </>
    )
}