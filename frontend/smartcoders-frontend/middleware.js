import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
    const token = await getToken({ 
        req: request, 
        secret: process.env.NEXTAUTH_SECRET 
    });
    
    const { pathname } = request.nextUrl;
    const protectedRoutes = ["/dashboard", "/admin", "/commande"];
    const isProtected = protectedRoutes.some((route) => pathname.startsWith(route));

    // Si l'utilisateur n'est pas connecté et essaie d'accéder à une route protégée
    if (!token && isProtected) {
        return NextResponse.redirect(new URL("/", request.url));
    }
    // Si l'utilisateur est connecté mais n'a pas le rôle admin pour accéder à /admin
    if (token && pathname.startsWith("/admin") && token.role !== "admin") {
        return NextResponse.redirect(new URL("/unauthorized", request.url));
    }

    return NextResponse.next();
}

// Spécifier sur quels chemins le middleware doit s'exécuter
export const config = {
    matcher: ["/dashboard/:path*", "/admin/:path*", "/auth"],
};