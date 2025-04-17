import redaxios from "redaxios";
import { JWT } from "next-auth/jwt";
import { Account, Profile } from "next-auth";
import { NextAuthOptions, Session} from "next-auth";
import GithubProvider from "next-auth/providers/github";

declare module "next-auth" {
    interface Session {
        user: {
            id?: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
            role?: string;
            github_id?: string;
        };
    }

    interface JWT {
        role?: string;
        userId?: string;
        github_id?: string;
    }
}

export interface GitHubProfile extends Profile {
    login: string;
    avatar_url: string;
    id: number;
}

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID_LOCAL as string,
            clientSecret: process.env.GITHUB_SECRET_LOCAL as string,
        }),
    ],
    callbacks: {
        async jwt({token, account, profile }: { token: JWT; account?: Account | null; profile?: Profile; }): Promise<JWT> {
            
            if (account && profile) {

                const githubProfile = profile as GitHubProfile;
                try {
                    const response = await redaxios.post(`${process.env.API_URL}/api/login/`, {
                        name: githubProfile.name || githubProfile.login,
                        email: githubProfile.email,
                        image: githubProfile.avatar_url,
                        github_id: githubProfile.id ? githubProfile.id.toString() : undefined,
                    });

                    token.userId = response.data.user_id;
                    token.github_id = githubProfile.id?.toString();
                    token.role = response.data.role;
                } catch (error) {
                    console.error("Erreur lors de l'enregistrement de l'utilisateur:", error);
                    token.role = "user";
                }
            }
            return token;
        },

        async session({session, token}: { session: Session; token: JWT; }): Promise<Session> {
            session.user = {
                ...(session.user as Session["user"]),
                role: typeof token.role === 'string' ? token.role : undefined,
                id: typeof token.userId === 'string' ? token.userId : undefined,
                github_id: typeof token.github_id === 'string' ? token.github_id : undefined,
            };
            return session;
        }
    },
    pages: {
        signIn: "/",
        error: "/auth/error",
        signOut: "/auth/signout",
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: true,
};
