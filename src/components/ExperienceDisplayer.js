import { experienceStyling } from "../assets/styles";
export default function ExperienceDisplayer({ expInfo }) {
  const { role, company, from, to } = expInfo;

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
    <div className="ExperienceDisplayer">
      <div
        style={experienceStyling}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeft}
        id="experience"
        onClick={removeItem}
      >
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
            <p>{role}</p>
            <p style={{ marginTop: "-16px" }}>{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
