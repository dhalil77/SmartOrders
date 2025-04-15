
const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t mt-10">
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Smart Orders. Tous droits réservés.</p>
                <div className="mt-4 md:mt-0 space-x-4">
                    <a href="/mentions-legales" className="hover:text-blue-600">Mentions légales</a>
                    <a href="/confidentialite" className="hover:text-blue-600">Confidentialité</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
