import Hero from "./components/Hero";
import PricingSection from "./components/Pricing";
import PersonalizedShopping from "./components/PersonalizedShoping";
import ContainerInfo from "./components/ContinerInfo";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <PricingSection />
      <PersonalizedShopping />
      <ContainerInfo />
    </div>
  );
}

export default App;