"use client";

import { useSearchParams } from "next/navigation";

export default function ErrorPage() {
    const searchParams = useSearchParams();
    const error = searchParams.get("error");

    return (
        <div>
            <h1>Erreur d'authentification</h1>
            <p>Une erreur s'est produite: {error || "Inconnue"}</p>
            <pre>{JSON.stringify(searchParams.toString(), null, 2)}</pre>
            <a href="/">Retour à l'accueil</a>
        </div>
    );
}