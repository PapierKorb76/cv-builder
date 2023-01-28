import { personalInfoStyling } from "../assets/styles";

export default function PersonalDetailsHolder({ personalInfo }) {
  let { address, phoneNumber, email } = personalInfo;
  return (
    <div
      className="PersonalDetailsHolder"
      style={{
        marginTop: "12rem",
        padding: "16px",
        width: "272px",
        height: "693px"
      }}
    >
      <div>
        <h3 style={personalInfoStyling}>Address</h3>
        <p>{address}</p>
        <h3 style={personalInfoStyling}>Phone Number</h3>
        <p>{phoneNumber}</p>
        <h3 style={personalInfoStyling}>Email</h3>
        <p>{email}</p>
      </div>
    </div>
  );
}
