import Wrapper from "../wrappers/ContentPreview";
import { useHomeContext } from "../pages/Home";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { LuSend } from "react-icons/lu";
const ContentPreview = () => {
  const {
    font,
    name,
    description,
    content,
    contentType,
    tag,
    bg,
    color,
    theme,
    profile,
  } = useHomeContext();
  console.log(content);
  return (
    <Wrapper font={font} bg={bg} color={color}>
      <div className="preview-container">
        <article>
          <div className={`card ${theme === "dark" && "dark-theme"}`}>
            <header>
              <div className="img-container">
                <img className="profile-img" src={profile} alt="" />
              </div>
              <div className="user-info">
                <p>{name}</p>
                <p>{tag}</p>
              </div>
              <p className="follow-btn">follow</p>
            </header>
            {contentType === "text" ? (
              <div className="preview-content">
                <p>{content}</p>
              </div>
            ) : (
              <div className="preview-image-container">
                <img className="preview-image" src={content} alt="" />
              </div>
            )}
            <div className="preview-share">
              <FaRegHeart className="share" />
              <LuSend className="share" />
              <FaRegComment className="share" />
            </div>
            <div className="preview-description">
              <p>
                {name} <span>{description}</span>
              </p>
            </div>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};
export default ContentPreview;
