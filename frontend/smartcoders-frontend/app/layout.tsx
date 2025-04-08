import type { Metadata } from "next";
import "./globals.css";

import { getServerSession } from "next-auth";
import SessionProvider from "../components/SessionProvider";
import { authOptions } from "./api/auth/[...nextauth]/route";


export const metadata: Metadata = {
  title: "Smart Orders ",
  description: "Smart Oders ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>

        <SessionProvider session={session}>
          {children}
        </SessionProvider>

      </body>
    </html>
  );
}
