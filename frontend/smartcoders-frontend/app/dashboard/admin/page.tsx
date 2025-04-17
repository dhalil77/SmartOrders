"use client";

import Layout from "@/components/dashboard/layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
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

            <div className="p-8">
                <h1 className="text-2xl font-bold">Tableau de bord</h1>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h2 className="text-lg font-semibold">Section Admin</h2>
                    <p>Cette section n&apos;est visible que par les administrateurs</p>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
