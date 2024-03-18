export default function AntragErstellen(){
    return (
        <form className={"flex flex-col gap-3"}>
            <input
                className={"border border-slate-500 px-8 py-2 "}
                type="text"
                placeholder="Antragstitel"
            />

            <input
                className={"border border-slate-500 px-8 py-2 "}
                type="text"
                placeholder="Antragsbeschreibung"
            />

            <button className={"bg-green-600 font-bold text-white py-3 px-6 w-fit"}>Absenden</button>
        </form>

    )
}