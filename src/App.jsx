import { BrowserRouter } from "react-router-dom";
import { AboutUs } from "./Components/AboutUs";
import { Clients } from "./Components/Clients";
import { Collaboration } from "./Components/Colaboration";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Promo } from "./Components/Promo/index";
import { Services } from "./Components/Services/index";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Promo />
      <AboutUs />
      <Services />
      <Clients />
      <Collaboration />
      <Footer />
    </BrowserRouter>
  );
};
