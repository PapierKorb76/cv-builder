import { displayerStyling } from "../assets/styles";
import { useState, useEffect } from "react";
import NameHolder from "./NameHolder";
import ImageHolder from "./ImageHolder";
import PersonalDetailsHolder from "./PersonalDetailsHolder";
import DescriptionHolder from "./DescriptionHolder";
import ExperienceHolder from "./ExperienceHolder";
import Title from "./Title";
import EducationHolder from "./EducationHolder";
import EducationDisplayer from "./EducationDisplayer";
import ExperienceDisplayer from "./ExperienceDisplayer";

export default function CVDisplayer({
  name,
  srcImage,
  personalInfo,
  description,
  experienceInfo,
  educationalInfo,
  expClick,
  edClick
}) {
  const [expArray, setExpArray] = useState([]);
  const [edArray, setEdArray] = useState([]);

  useEffect(() => {
    if (expClick === 1 || expClick === 2) {
      setExpArray((expArray) => [
        ...expArray,
        {
          id: expArray.length,
          info: experienceInfo
        }
      ]);
    }
  }, [expClick]);

  useEffect(() => {
    if (edClick === 1 || edClick === 2) {
      setEdArray((edArray) => [
        ...edArray,
        {
          id: edArray.length,
          info: educationalInfo
        }
      ]);
    }
  }, [edClick]);

  return (
    <div className="CVDisplayer" style={displayerStyling}>
      <div
        style={{
          backgroundColor: "#286ede",
          height: "100px",
          marginTop: "-25px",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px"
        }}
      >
        <ImageHolder srcImage={srcImage} />
        <NameHolder name={name} />
        <div
          style={{ display: "flex", position: "absolute", marginTop: "-50px" }}
        >
          <PersonalDetailsHolder personalInfo={personalInfo} />
          <div>
            <DescriptionHolder description={description} />

            <Title title={"Experience"} />
            {expArray.map((item) => (
              <ExperienceDisplayer expInfo={item.info} key={item.id} />
            ))}
            <ExperienceHolder experienceInfo={experienceInfo} />

            <Title title={"Education"} />
            {edArray.map((item) => (
              <EducationDisplayer edInfo={item.info} key={item.id} />
            ))}
            <EducationHolder educationalInfo={educationalInfo} />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#eee",
          height: "825px",
          width: "250px",
          borderBottomLeftRadius: "5px"
        }}
      ></div>
    </div>
  );
}
