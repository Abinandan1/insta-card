import Wrapper from "../wrappers/Navbar";
import Logo from "./Logo";
import { FiDownload } from "react-icons/fi";
import * as htmlToImage from "html-to-image";
const Navbar = () => {
  const handleDownload = async () => {
    const element = document.querySelector(".card");

    const dataUrl = await htmlToImage.toPng(element);
    const link = document.createElement("a");

    link.href = dataUrl;
    link.download = "image.png";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <Logo />
        <button onClick={handleDownload} className="download-btn">
          <span className="icon">
            <FiDownload />
          </span>
          image
        </button>
      </div>
    </Wrapper>
  );
};
export default Navbar;
