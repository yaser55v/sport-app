import Features from "./components/Features";
import Header from "./components/Header";
import Sccore from "./components/Sccore";
import Statistics from "./components/Statistics";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-body">
      <Header />
      <Sccore />
      <Features />
      <Statistics />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
