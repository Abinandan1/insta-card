import { useHomeContext } from "../pages/Home";
import { fonts } from "../utils/fonts";
import Wrapper from "../wrappers/ContentForm";
import { customFetch } from "../utils/customeFetch";
import { toast } from "react-toastify";
const ContentForm = () => {
  const {
    font,
    setFont,
    name,
    description,
    theme,
    bg,
    tag,
    color,
    content,
    contentType,
    setName,
    setIsLoading,
    setDescription,
    setTheme,
    setTag,
    setProfile,
    setContent,
    setBg,
    setColor,
    setContentType,
  } = useHomeContext();

  const handleImageUpload = async (e) => {
    // setContent(e.currentTarget.files);
    setIsLoading(true);
    const imageFile = e.currentTarget.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    console.log(Object.fromEntries(formData));
    try {
      const response = await customFetch.post("/user/upload-image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setContent(response.data.img.src);
      localStorage.setItem("content", response.data.img.src);
      // setIsLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      // setIsLoading(false);
    }
  };
  const handleProfileImageUpload = async (e) => {
    setIsLoading(true);
    const imageFile = e.currentTarget.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    console.log(Object.fromEntries(formData));
    try {
      const response = await customFetch.post("/user/upload-image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setProfile(response.data.img.src);
      localStorage.setItem("profile", response.data.img.src);
      // setIsLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      // setIsLoading(false);
    }
  };
  return (
    <Wrapper>
      <div className="form-container">
        <form>
          <div className="form-row">
            <label htmlFor="font" className="form-label">
              font
            </label>
            <select
              name="font"
              defaultValue={font}
              onChange={(e) => setFont(e.currentTarget.value)}
              className="form-input form-select"
            >
              {fonts.map((font) => {
                return (
                  <option key={font} value={font}>
                    {font}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              onChange={(e) => setName(e.currentTarget.value)}
              className="form-input"
            />
          </div>
          <div className="form-row">
            <label htmlFor="location-subtitle" className="form-label">
              location/tagline
            </label>
            <input
              type="text"
              name="location-subtitle"
              className="form-input"
              defaultValue={tag}
              onChange={(e) => setTag(e.currentTarget.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="profile-image" className="form-label">
              profile image
            </label>
            <input
              type="file"
              name="profile-image"
              className="form-image"
              accept="image/*"
              onChange={handleProfileImageUpload}
            />
          </div>
          <div className="form-row">
            <label htmlFor="content" className="form-label">
              content (text/image)
            </label>
            <div className="radio-container">
              <div className="form-row-radio">
                <input
                  type="radio"
                  name="text"
                  id="text"
                  className="form-radio"
                  checked={contentType === "text"}
                  onChange={(e) => {
                    setContent("");
                    setContentType(e.currentTarget.checked ? "text" : "image");
                  }}
                />
                <label htmlFor="text" className="form-label-radio">
                  text
                </label>
              </div>
              <div className="form-row-radio">
                <input
                  type="radio"
                  name="image"
                  id="image"
                  className="form-radio"
                  checked={contentType === "image"}
                  onChange={(e) => {
                    setContent("");
                    setContentType(e.currentTarget.checked ? "image" : "text");
                  }}
                />
                <label htmlFor="image" className="form-label-radio">
                  image
                </label>
              </div>
            </div>
            <div className="content-type">
              {contentType === "text" ? (
                <textarea
                  name="content"
                  id="content"
                  rows={8}
                  className="form-textarea content show-content"
                  value={content}
                  onChange={(e) => setContent(e.currentTarget.value)}
                />
              ) : (
                <input
                  type="file"
                  name="content"
                  id="content"
                  className=" show-content form-image content"
                  onChange={handleImageUpload}
                  accept="image/*"
                />
              )}
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="bg" className="form-label">
              text background
            </label>
            <input
              type="color"
              name="bg"
              id="bg"
              className="form-color"
              defaultValue={bg}
              onChange={(e) => setBg(e.currentTarget.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="color" className="form-label">
              text color
            </label>
            <input
              type="color"
              name="color"
              id="color"
              className="form-color"
              defaultValue={color}
              onChange={(e) => setColor(e.currentTarget.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="description" className="form-label">
              description
            </label>
            <textarea
              name="description"
              id="description"
              className="form-textarea"
              rows={8}
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
            ></textarea>
          </div>
          <div className="form-row">
            <label htmlFor="theme" className="form-label">
              theme
            </label>
            <select
              name="theme"
              onChange={(e) => setTheme(e.currentTarget.value)}
              className="form-input form-select"
              defaultValue={theme}
            >
              <option value="light">Light Theme</option>
              <option value="dark">Dark Theme</option>
            </select>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
export default ContentForm;
