import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Events from "./components/Events.jsx";
import Journey from "./components/Journey.jsx";
import About from "./components/About.jsx";
import Categories from "./components/Categories.jsx";
import Disciplines from "./components/Disciplines.jsx";
import Prizes from "./components/Prizes.jsx";
import Ecosystem from "./components/Ecosystem.jsx";
import Footer from "./components/Footer.jsx";
import WhyRegister from "./components/WhyRegister.jsx";
import Sponsors from "./components/Sponsors.jsx";

export default function App() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <div className="mx-auto max-w-[1440px] overflow-hidden border-x border-danger/50 bg-ink">
        <Header />
        <Hero />
        <Events />
        <Journey />
        <About />
        <Categories />
        <Disciplines />
        <WhyRegister/>
        <Ecosystem />
        <Sponsors/>
        <Footer />
      </div>
    </main>
  );
}