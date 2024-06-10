import { createContext, useContext, useState } from "react";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Wrapper from "../wrappers/Home";
import { fonts } from "../utils/fonts";
import admin from "../assets/admin.jpg";
import { useNavigation } from "react-router-dom";
import Loading from "../components/Loading";

const HomeContext = createContext();
const Home = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(navigation.state === "loading");
  console.log(navigation.state);
  const [font, setFont] = useState(fonts[0]);
  const [name, setName] = useState("abinandan_at");
  const [tag, setTag] = useState("Erode, India");
  const [profile, setProfile] = useState(admin);
  const [content, setContent] = useState(
    localStorage.getItem("content") ||
      "Design your card to express your views, thoughts, memories & happenings. You can use these cards to share it on your social media platforms."
  );
  const [color, setColor] = useState("#000000");
  const [bg, setBg] = useState("#e2e8f0");
  const [description, setDescription] = useState("InstaCard");
  const [theme, setTheme] = useState("light");
  const [contentType, setContentType] = useState("text");
  return (
    <HomeContext.Provider
      value={{
        font,
        isLoading,
        name,
        tag,
        profile,
        content,
        contentType,
        color,
        bg,
        description,
        theme,
        setColor,
        setBg,
        setContent,
        setIsLoading,
        setContentType,
        setTheme,
        setDescription,
        setFont,
        setName,
        setProfile,
        setTag,
      }}
    >
      <Wrapper>
        <div className="home-container">
          {isLoading && <Loading />}
          <Sidebar />
          <main>
            <Navbar />
            <Content />
          </main>
        </div>
      </Wrapper>
    </HomeContext.Provider>
  );
};
export const useHomeContext = () => useContext(HomeContext);
export default Home;
