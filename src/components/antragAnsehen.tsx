"use client";



interface AntragAnsehenUIProps{
    id:string;
    titel:string;
    beschreibung: string;
    genehmigt: boolean;
}
export default function AntragAnsehenUI({ id, titel, beschreibung, genehmigt }: AntragAnsehenUIProps) {
    return (
        <div className="max-w-lg mx-auto my-10 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-100 border-b">
                <h1 className="text-lg font-semibold text-gray-900">{titel}</h1>
            </div>
            <div className="p-4">
                <p className="text-gray-700">{beschreibung}</p>
            </div>
            <div className="p-4 border-t border-gray-200">
        <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${genehmigt ? 'text-green-900 bg-green-200' : 'text-red-900 bg-red-200'}`}>
          {genehmigt ? 'Genehmigt' : 'Derzeit nicht genehmigt'}
        </span>
            </div>
            <div className="p-4 border-t border-gray-200 text-right">
                <span className="text-xs text-gray-600">ID: {id}</span>
            </div>
        </div>
    )
}
