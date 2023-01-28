import { navbarStyling } from "../assets/styles";
import icon from "../assets/icon.png";
export default function Navbar() {
  return (
    <div className="Navbar" style={navbarStyling}>
      <img
        src={icon}
        alt="icon"
        width="40"
        style={{ margin: "0px 10px 0px 15px" }}
      />
      <h1 style={{ margin: "0px 10px 0px 0px" }}>CV BUILDER</h1>
    </div>
  );
}
