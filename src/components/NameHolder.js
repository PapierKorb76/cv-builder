import { nameHolderStyling } from "../assets/styles";

export default function NameHolder({ name }) {
  let { firstName, lastName } = name;
  return (
    <div className="NameHolder" style={nameHolderStyling}>
      <h1>
        {firstName} {lastName}
      </h1>
    </div>
  );
}
