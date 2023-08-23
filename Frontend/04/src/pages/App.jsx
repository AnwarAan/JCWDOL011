import Header from "../layout/Header";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../layout/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
