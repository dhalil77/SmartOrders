"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link"

export default function ErrorPage() {
    const searchParams = useSearchParams();
    const error = searchParams.get("error");

    return (
        <div>
            <h1>Erreur </h1>
            <p>Une erreur produite : {error || "Inconnue"}</p>
            <pre>{JSON.stringify(searchParams.toString(), null, 2)}</pre>
            <Link href="/">Retour </Link>
        </div>
    );
}