import { imageHolderStyling } from "../assets/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import DEFAULT_PROFILE_PICTURE from "../assets/default-profile-pic.jpg";

export default function ImageHolder({ srcImage }) {
  const convertImage = (srcImage) => {
    const tempFilename = srcImage;
    return tempFilename === ""
      ? DEFAULT_PROFILE_PICTURE
      : URL.createObjectURL(srcImage);
  };

  return (
    <div className="ImageHolder">
      <div style={imageHolderStyling}>
        <img
          src={convertImage(srcImage)}
          alt="person"
          width="200"
          height="200"
        />
      </div>
    </div>
  );
}
