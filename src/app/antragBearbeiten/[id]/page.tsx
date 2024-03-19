import AntragBearbeitenUI from "@/components/antragBearbeiten";

const getTopicById = async (id:any) => {
    try {
        const res = await fetch(`api/antraege/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topic");
        }

        return res.json();
    } catch (error) {
        console.log(error);
        return null; // Return null or a similar placeholder to indicate failure
    }
};

interface Params {
    id: any;
}

export default async function EditTopic({ params }: { params: Params }) {
    const { id } = params;

    const { antrag } = await  getTopicById(id);
    const { titel, beschreibung } = antrag;

    return <AntragBearbeitenUI id={id} titel={titel} beschreibung={beschreibung} />;
}
