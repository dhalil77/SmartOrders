import { Loader2 } from "lucide-react";

const Loader = ({ message = "Chargement..." }) => {
    return (
        <div className="flex items-center justify-center h-screen flex-col text-gray-600">
        <Loader2 className="animate-spin w-8 h-8 mb-4 text-blue-500" />
        <p className="text-lg">{message}</p>
        </div>
    );
};

export default Loader;
