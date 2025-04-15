"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ErrorPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const error = searchParams.get("error");

    useEffect(() => {
        // Vous pouvez journaliser l'erreur ou effectuer d'autres actions ici
        console.error("Erreur d'authentification:", error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Erreur authentification</h1>
        <p className="mt-3">Une erreur produite : {error}</p>
        <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => router.push("/")}
        >
            Retour 
        </button>
        </div>
    );
}