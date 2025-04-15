"use client";

import Layout from "@/components/dashboard/layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AnimatedTitle from "@/components/dashboard/AnimatedTitle";
import Loader from "@/components/ui/Loader";

const Dashboard = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    // Redirection si non connecté
    useEffect(() => {
        if (status === "unauthenticated") {
        router.push("/");
        }
    }, [status, router]);

  // Affiche le loader pendant le chargement
    if (!session) {
        return <Loader message="Vérification de la session..." />;
    }

    return (
        <Layout>
            <AnimatedTitle />
            <p className="mt-4 text-gray-600">Contenu principal ici...</p>
        </Layout>
    );
};

export default Dashboard;
