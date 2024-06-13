import Wrapper from "../wrappers/Navbar";
import Logo from "./Logo";
import { FiDownload } from "react-icons/fi";
import { MdDownloadForOffline } from "react-icons/md";
import { IoMdCloudDownload, IoMdDownload } from "react-icons/io";
import * as htmlToImage from "html-to-image";
import { useHomeContext } from "../pages/Home";
const Navbar = () => {
  const { setIsLoading } = useHomeContext();
  const handleDownload = async () => {
    setIsLoading(true);
    const element = document.querySelector(".card");

    const dataUrl = await htmlToImage.toPng(element);
    const link = document.createElement("a");

    link.href = dataUrl;
    link.download = "image.png";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsLoading(false);
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <Logo />
        <button onClick={handleDownload} className="download-btn">
          <span className="icon">
            <IoMdCloudDownload />
          </span>
          image
        </button>
      </div>
    </Wrapper>
  );
};
export default Navbar;
