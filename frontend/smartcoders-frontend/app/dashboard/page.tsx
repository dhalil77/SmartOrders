import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Dashboard = async () => {
    const session = await getServerSession(authOptions);

    // Si la session n'existe pas, rediriger vers la page d'accueil
    if (!session) {
        redirect("/");
    }

    return (
        <div>
        <h1>Tableau de bord</h1>
        <p>Bienvenue, {session.user?.name} !</p>
        </div>
    );
};

export default Dashboard;
