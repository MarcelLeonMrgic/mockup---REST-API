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
    // Versuche, das Thema zu holen
    const result = await getTopicById(id);

    // Prüfe, ob das Ergebnis null ist
    if (result === null) {
        // Handle den Fall, dass kein Thema gefunden wurde
        console.error("Thema nicht gefunden oder Fehler beim Abrufen");
        // Du könntest hier eine Fehlerkomponente zurückgeben oder eine andere Art von Fehlerbehandlung durchführen
        return null;
    }

    const { antrag } = result;
    // Prüfe zusätzlich, ob antrag undefiniert oder null ist, bevor du fortfährst
    if (!antrag) {
        console.error("Antrag ist undefiniert oder null");
        return null;
    }

    const { titel, beschreibung } = antrag;

    return <AntragBearbeitenUI id={id} titel={titel} beschreibung={beschreibung} />;
}
