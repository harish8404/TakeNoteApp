import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Landing from "./screens/LandingPage/landingPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Landing />
      </main>
      <Footer />
    </>
  );
}

export default App;
