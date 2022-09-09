import GlobalStyle from "./components/Global";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section2/Section";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Section />
      <Main />
      <Footer/>
    </>
  );
}

export default App;
