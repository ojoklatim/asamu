import HeroSection from "./components/HeroSection";
import UpcomingEventHighlight from "./components/UpcomingEventHighlight";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-surface text-foreground overflow-x-hidden">
      <HeroSection />
      <UpcomingEventHighlight />
    </div>
  );
}
