import { experienceStyling } from "../assets/styles";
export default function EducationDisplayer({ edInfo }) {
  const { degree, school, from, to } = edInfo;

  const onMouseOver = (e) => {
    if (e.target.id === "experience")
      e.target.style.backgroundColor = "#ff000040";
  };

  const onMouseLeft = (e) => {
    if (e.target.id === "experience") e.target.style.background = "none";
  };

  const removeItem = (e) => {
    e.target.parentElement.parentElement.style.display = "none";
  };

  return (
    <div
      className="EducationDisplayer"
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeft}
      id="experience"
      onClick={removeItem}
    >
      <div style={experienceStyling}>
        <div style={{ display: "flex", gap: "10px" }}>
          <p style={{ fontWeight: "600", color: "#0f0f0f" }}>
            {from} - {to}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              columnGap: "10px"
            }}
          >
            <p>{degree}</p>
            <p style={{ marginTop: "-16px" }}>{school}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
