import { descriptionStyling } from "../assets/styles";

export default function DescriptionHolder({ description }) {
  return (
    <div className="DescriptionHolder">
      <h1
        style={{
          color: "#286ee0",
          fontWeight: "600",
          fontSize: "28px",
          margin: "80px 0px 0px 0px"
        }}
      >
        Description
      </h1>
      <p style={descriptionStyling}>{description}</p>
    </div>
  );
}
