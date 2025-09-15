import { Header } from "@/components/header";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";
import HeroPage from "@/components/heropage";
export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/home")
  }
  return (
    <div className="">
      <main className="">
        <HeroPage />
      </main>
    </div>
  );
}
