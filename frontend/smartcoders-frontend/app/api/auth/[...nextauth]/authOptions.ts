import { type NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID_LOCAL as string,
            clientSecret: process.env.GITHUB_SECRET_LOCAL as string, 
        }),
    ],
    pages: {
        error: "/auth/error",
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: true,
};
