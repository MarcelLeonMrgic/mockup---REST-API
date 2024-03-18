import AntragBearbeitenUI from "@/components/antragBearbeiten";
const getTopicById = async (id:string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/antraege/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topic");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
};
interface Params {
    id: string;
}

export default async function EditTopic({ params }: { params: Params }) {
    const { id } = params;
    const { antrag } = await getTopicById(id);
    const { titel, beschreibung } = antrag;

    return <AntragBearbeitenUI id={id} titel={titel} beschreibung={beschreibung} />;
}