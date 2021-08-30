import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import landingPage from "./screens/LandingPage/landingPage";
import loginScreen from "./screens/loginScreen/loginScreen";
import registerScreen from "./screens/registerScreen/registerScreen";
import myNotes from "./screens/MyNotes/MyNotes";
import myProfile from "./screens/MyProfile/myProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Route path="/" component={landingPage} exact />
          <Route path="/login" component={loginScreen} exact />
          <Route path="/register" component={registerScreen} exact />
          <Route path="/mynotes" component={myNotes} />
          <Route path="/myprofile" component={myProfile} />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
