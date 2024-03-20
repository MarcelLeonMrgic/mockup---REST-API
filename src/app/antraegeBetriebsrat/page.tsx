import AntragsListeFuerBetriebsrat from "@/components/antragsListeFuerBetriebsrat";

export default function AntraegeBetriebsrat(){
    return(
        <>
            <div className="bg-blue-500 text-white text-lg font-semibold py-2 px-4 rounded-t-lg shadow">
                Anträge
            </div>
            <div className="p-4 border border-slate-300 my-3 flex justify-center gap-5 items-start bg-white shadow-sm rounded-b-lg">
                <AntragsListeFuerBetriebsrat/>
            </div>
        </>
    );
}