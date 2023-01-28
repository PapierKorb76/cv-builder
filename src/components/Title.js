export default function Title({ title }) {
  return (
    <div className="ExperienceTitle">
      <h1
        style={{
          color: "#286ee0",
          fontWeight: "600",
          fontSize: "28px",
          margin: "20px 0px 0px 0px"
        }}
      >
        {title}
      </h1>
    </div>
  );
}
