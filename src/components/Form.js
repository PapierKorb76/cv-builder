import {
  formStyling,
  inputStyling,
  inputImageStyling,
  textAreaStyling,
  buttonStyling
} from "../assets/styles";
import { useState } from "react";
import CVDisplayer from "./CVDisplayer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [selectedImage, setSelectedImage] = useState("");
  const [description, setDescription] = useState("");
  const [personalInfo, setPersonalInfo] = useState({
    email: "",
    phoneNumber: "",
    address: ""
  });
  const [experienceInfo, setExperienceInfo] = useState({
    role: "",
    company: "",
    from: "",
    to: ""
  });
  const [educationalInfo, setEducationalInfo] = useState({
    degree: "",
    school: "",
    from: "",
    to: ""
  });

  const [expClick, setExpClick] = useState("not clicked yet");
  const [edClick, setEdClick] = useState("not clicked yet");
  const handleImage = (e) => setSelectedImage(e.target.files[0]);
  const handleDescription = (e) => setDescription(e.target.value);

  const handleExpClick = () => {
    if (expClick === 0 || expClick === 2) {
      setExpClick(1);
    } else {
      setExpClick(2);
    }
  };

  const handleEdClick = () => {
    if (edClick === 0 || edClick === 2) {
      setEdClick(1);
    } else {
      setEdClick(2);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%"
      }}
    >
      <div className="Form" style={formStyling}>
        <h2 style={{ fontSize: "28px", fontWeight: "bold", marginTop: "12px" }}>
          Personal Info
        </h2>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          placeholder={"First name"}
          style={inputStyling}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          placeholder={"Last name"}
          style={inputStyling}
        />
        <input
          type="email"
          placeholder={"Email"}
          style={inputStyling}
          value={personalInfo.email}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, email: e.target.value })
          }
        />
        <input
          type="tel"
          placeholder={"Phone number"}
          style={inputStyling}
          value={personalInfo.phoneNumber}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value })
          }
        />
        <input
          type="file"
          id="myFile"
          name="filename"
          onChange={handleImage}
          style={inputImageStyling}
        />
        <input
          type="text"
          placeholder={"Address"}
          style={inputStyling}
          value={personalInfo.address}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, address: e.target.value })
          }
        />
        <textarea
          cols="32"
          rows="5"
          placeholder={"Description"}
          style={textAreaStyling}
          onChange={handleDescription}
        />
        <h2 style={{ fontSize: "28px", fontWeight: "bold", marginTop: "12px" }}>
          Experience
        </h2>
        <input
          type="text"
          value={experienceInfo.role}
          onChange={(e) =>
            setExperienceInfo({ ...experienceInfo, role: e.target.value })
          }
          placeholder={"Role"}
          style={inputStyling}
        />
        <input
          type="text"
          value={experienceInfo.company}
          onChange={(e) =>
            setExperienceInfo({ ...experienceInfo, company: e.target.value })
          }
          placeholder={"Company"}
          style={inputStyling}
        />
        <input
          type="text"
          value={experienceInfo.from}
          onChange={(e) =>
            setExperienceInfo({ ...experienceInfo, from: e.target.value })
          }
          placeholder={"From (Year)"}
          style={inputStyling}
        />
        <input
          type="text"
          value={experienceInfo.to}
          onChange={(e) =>
            setExperienceInfo({ ...experienceInfo, to: e.target.value })
          }
          placeholder={"To (Year)"}
          style={inputStyling}
        />

        <button type="submit" style={buttonStyling} onClick={handleExpClick}>
          Add
        </button>
        <h2 style={{ fontSize: "28px", fontWeight: "bold", marginTop: "12px" }}>
          Education
        </h2>
        <input
          type="text"
          value={educationalInfo.degree}
          onChange={(e) =>
            setEducationalInfo({ ...educationalInfo, degree: e.target.value })
          }
          placeholder={"Degree"}
          style={inputStyling}
        />
        <input
          type="text"
          value={educationalInfo.school}
          onChange={(e) =>
            setEducationalInfo({ ...educationalInfo, school: e.target.value })
          }
          placeholder={"School"}
          style={inputStyling}
        />
        <input
          type="text"
          value={educationalInfo.from}
          onChange={(e) =>
            setEducationalInfo({ ...educationalInfo, from: e.target.value })
          }
          placeholder={"From (Year)"}
          style={inputStyling}
        />
        <input
          type="text"
          value={educationalInfo.to}
          onChange={(e) =>
            setEducationalInfo({ ...educationalInfo, to: e.target.value })
          }
          placeholder={"To (Year)"}
          style={inputStyling}
        />
        <button type="submit" style={buttonStyling} onClick={handleEdClick}>
          Add
        </button>
      </div>

      <CVDisplayer
        name={name}
        srcImage={selectedImage}
        personalInfo={personalInfo}
        description={description}
        experienceInfo={experienceInfo}
        educationalInfo={educationalInfo}
        expClick={expClick}
        edClick={edClick}
      />
    </div>
  );
}
