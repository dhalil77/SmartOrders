// Dans votre composant Auth.tsx
"use client";
import { signIn, signOut, useSession } from "next-auth/react";

const Auth = () => {
    const { data: session, status } = useSession();
    
    console.log("Status:", status);
    console.log("Session:", session);
    
    if (status === "loading") {
        return <div>Chargement...</div>;
    }
    
    if (session) {
        return (
            <div>
                <p>Bonjour, {session.user?.name}</p>
                <button 
                    onClick={() => signOut()}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                >
                    Se déconnecter
                </button>
            </div>
        );
    }
    
    return (
        <div>
            <p>Tu n'es pas connecté</p>

            <button 
                onClick={() => {
                    console.log("Tentative de connexion avec GitHub");
                    signIn("github", { callbackUrl: '/' })
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Se connecter avec GitHub
            </button>
        </div>
    );
};

export default Auth;