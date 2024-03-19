"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface AntragBearbeitenUIProps {
    id: string; // Assuming id is a string. Adjust this type based on your actual data structure.
    titel: string;
    beschreibung: string;
}

export default function AntragBearbeitenUI({ id, titel, beschreibung }: AntragBearbeitenUIProps) {
    const [neuerTitel, setNeuerTitel] = useState(titel);
    const [neueBeschreibung, setNeueBeschreibung] = useState(beschreibung);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await fetch(`api/antraege/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ neuerTitel, neueBeschreibung }),
            });

            if (!res.ok) {
                throw new Error("Failed to update topic");
            }

            router.refresh();

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setNeuerTitel(e.target.value)}
                value={neuerTitel}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Topic Title"
            />

            <input
                onChange={(e) => setNeueBeschreibung(e.target.value)}
                value={neueBeschreibung}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Topic Description"
            />

            <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
                Update Topic
            </button>
        </form>
    );
}