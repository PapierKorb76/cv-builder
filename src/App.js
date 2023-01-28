import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Footer from "./components/Footer";

export default function App() {
  const style = document.body.style;
  useEffect(() => {
    style.margin = "0px";
    style.width = "100%";
    style.height = "100vh";
  });

  return (
    <div className="App">
      <Navbar />
      <div>
        <Form />
      </div>
      <Footer />
    </div>
  );
}
