import { experienceStyling } from "../assets/styles";
export default function ExperienceHolder({ experienceInfo }) {
  const { role, company, from, to } = experienceInfo;
  return (
    <div className="ExperienceHolder">
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
            <p>{role}</p>
            <p style={{ marginTop: "-16px" }}>{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
