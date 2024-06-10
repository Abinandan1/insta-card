import Wrapper from "../wrappers/Content";
import ContentForm from "./ContentForm";
import ContentPreview from "./ContentPreview";

const Content = () => {
  return (
    <Wrapper>
      <div className="content-container">
        <section className="description">
          <p>
            Design your card to express your views, thoughts, memories &
            happenings. You can use these cards to share it on your social media
            platforms.
          </p>
        </section>
        <ContentPreview />
        <ContentForm />
        {/* <div className="download-preview"></div> */}
      </div>
    </Wrapper>
  );
};
export default Content;
