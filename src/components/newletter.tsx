const NewsletterHeader = () => {
    return (
        <div className="bg-blue-600 text-white py-8 w-full max-w-4xl mx-auto shadow-lg rounded-lg">
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-extrabold mb-6">
                    Betriebsinterner Newsletter
                </h1>
                <ul className="text-2xl space-y-2">
                    <li>GDL Streik: Auswirkungen auf unsere Kunden</li>
                    <li>Seminar: Produktiv im Homeoffice</li>
                    {/* Füge hier weitere Themen nach Bedarf hinzu */}
                </ul>
            </div>
        </div>
    );
};

export default NewsletterHeader;
