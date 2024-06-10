import styled from "styled-components";
const Wrapper = styled.nav`
  position: sticky;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1), 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  .nav-center {
    height: 6rem;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .download-btn {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    background: var(--black-color);
    color: var(--white-color);
    padding: 0.5rem 1rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    border-radius: 0.25rem;
    box-shadow: var(--shadow-2);
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s linear;
  }
  .download-btn:hover {
    background: transparent;
    color: var(--black-color);
  }
  .icon {
    display: flex;
    font-size: 1.75rem;
    align-items: center;
  }
`;

export default Wrapper;
