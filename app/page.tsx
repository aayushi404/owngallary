import { Header } from "@/components/header";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/home")
  }
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Header authStatus="unauthenticated" session={null}/>
      </main>
    </div>
  );
}
