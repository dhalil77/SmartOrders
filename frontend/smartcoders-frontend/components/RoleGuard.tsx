"use client";

import { ReactNode, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "../components/ui/Loader"

interface RoleGuardProps {
    children: ReactNode;
    allowedRoles: string[];
}

export default function RoleGuard({ children, allowedRoles }: RoleGuardProps) {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            const userRole = session?.user?.role ?? "user";
            if (!allowedRoles.includes(userRole)) {
                router.push("/unauthorized");
            }
        } else if (status === "unauthenticated") {
            router.push("/auth");
        }
    }, [status, session, allowedRoles, router]);

    if (status === "loading") {
        return <div className="text-center p-4"> <Loader/> </div>;
    }

    const userRole = session?.user?.role ?? "user";

    if (status === "authenticated" && allowedRoles.includes(userRole)) {
        return <>{children}</>;
    }

    // Retourne null si l'utilisateur est en redirection (sécurité + UX)
    return null;
}
