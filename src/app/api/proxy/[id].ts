import type { NextApiRequest, NextApiResponse } from 'next';

// Typdefinition für die erwartete Anfragekörperstruktur
interface PutBody {
    neuerTitel: string;
    neueBeschreibung: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.query;

    // Sicherstellen, dass nur PUT-Anfragen verarbeitet werden
    if (req.method !== 'PUT') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const url = `https://mockup-tau.vercel.app/api/antraege/${id}`;

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // Weitere Header nach Bedarf
            },
            body: JSON.stringify(req.body as PutBody), // TypeScript-Casting
        });

        if (!response.ok) {
            throw new Error('Failed to update');
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}