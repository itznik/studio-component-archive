import Navbar from "@/components/Navbar";
import HeroWorkspace from "@/components/HeroWorkspace";
import ComponentVault from "@/components/ComponentVault";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroWorkspace />
      <ComponentVault />
    </main>
  );
}
