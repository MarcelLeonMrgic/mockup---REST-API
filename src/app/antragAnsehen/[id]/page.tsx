import AntragBearbeitenUI from "@/components/antragBearbeiten";
import AntragAnsehenUI from "@/components/antragAnsehen";

const getTopicById = async (id:string) => {
    try {
        const res = await fetch(`https://mockup-tau.vercel.app/api/antraege/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topic");
        }

        return res.json();
    } catch (error) {
        console.log(error);
        return null;
    }
};
interface Params {
    id: string;
}

export default async function SeeTopic({ params }: { params: Params }) {
    const { id } = params;

    const { antrag } = await  getTopicById(id);
    const { titel, beschreibung , genehmigt } = antrag;

    return <AntragAnsehenUI id={id} titel={titel} beschreibung={beschreibung} genehmigt={genehmigt} />;
}