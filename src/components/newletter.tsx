const NewsletterHeader = () => {
    return (
        <div className="bg-blue-500 text-white py-4">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-4">
                    Betriebsinterner Newsletter
                </h1>
                <ul className="text-xl">
                    <li>GDL Streik: Auswirkungen auf unsere Kunden</li>
                    <li>Seminar: Produktiv im Homeoffice</li>
                    {/* Füge hier weitere Themen nach Bedarf hinzu */}
                </ul>
            </div>
        </div>
    );
};

export default NewsletterHeader;