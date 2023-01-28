import { experienceStyling } from "../assets/styles";
export default function EducationHolder({ educationalInfo }) {
  const { degree, school, from, to } = educationalInfo;
  return (
    <div className="EducationHolder">
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
