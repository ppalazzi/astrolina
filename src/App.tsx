import AboutSection from "./components/AboutSection";
import OutingsSection from "./components/OutingsSection";
import SiteHeader from "./components/SiteHeader";

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <AboutSection />
        <OutingsSection />
      </main>
    </>
  );
}
