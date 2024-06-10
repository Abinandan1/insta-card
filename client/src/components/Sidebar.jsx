import Wrapper from "../wrappers/Sidebar";
import ContentForm from "./ContentForm";

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container">
        <ContentForm />
      </div>
    </Wrapper>
  );
};
export default Sidebar;
