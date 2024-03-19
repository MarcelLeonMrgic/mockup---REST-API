import AntragBearbeitenUI from "@/components/antragBearbeiten";

const getTopicById = async (id:string) => {
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
    id: string;
}

export default async function EditTopic({ params }: { params: Params }) {
    const { id } = params;
    const response = await getTopicById(id);
    if (!response || !response.antrag) {
        // Handle the error case, perhaps by returning an error message or redirecting
        console.error(`Antrag not found or an error occurred ${params.id}`);
        return <div>Error: Antrag not found or an error occurred</div>;
    }

    const { antrag } = response;
    const { titel, beschreibung } = antrag;

    return <AntragBearbeitenUI id={id} titel={titel} beschreibung={beschreibung} />;
}
