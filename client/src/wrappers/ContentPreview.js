import styled from "styled-components";
const Wrapper = styled.section`
  background: var(--primary-500);
  border-radius: 0.5rem;
  box-shadow: var(--shadow-3);
  margin-bottom: 2rem;
  padding: 1.5rem 2rem;
  max-width: 500px;
  article {
    display: grid;
    place-items: center;
  }
  .card {
    background: var(--card-color);
    box-shadow: var(--shadow-3);
    max-width: 360px;
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: stretch;
    gap: 0.75rem;
    padding: 0.5rem;
  }
  .follow-btn {
    align-self: center;
    padding: 0.5rem;
    font-size: 0.875rem;
    background: var(--bg-color);
    color: var(--text-color);
    border-radius: 0.5rem;
    text-transform: capitalize;
    display: grid;
    align-items: center;
  }
  .img-container {
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
  }
  .profile-img {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0;
    border-radius: 50%;
    object-fit: cover;
  }
  .user-info {
    font-size: 1rem;
    letter-spacing: 1px;
    display: grid;
    /* gap: 0.25rem; */
    color: var(--text-color);
  }
  .user-info p:last-child {
    color: var(--gray-color-400);
  }
  .preview-share {
    display: flex;
    padding: 0 0.5rem;
    gap: 1rem;
    margin-top: 0.5rem;
    color: var(--text-color);
  }
  .share {
    font-size: 1.25rem;
  }
  .share:last-child {
    transform: rotateY(180deg);
  }
  .preview-image-container {
    /* height: 7rem; */
  }
  .preview-image {
    display: block;
    width: 100%;
  }
  .preview-content {
    background: ${(props) => props.bg};
    color: ${(props) => props.color};
    padding: 0.5rem;
    /* text-align: justify; */
    word-wrap: break-word;
    p {
      font-family: "${(props) => props.font}";
    }
  }
  .preview-description {
    font-weight: 500;
    padding: 0.5rem;
    color: var(--text-color);
  }
  .preview-description span {
    font-weight: 400;
  }
`;

export default Wrapper;
