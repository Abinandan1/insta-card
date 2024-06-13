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
    background: transparent;
    border: solid 2px var(--primary-500);
    color: var(--primary-500);
    padding: 0.5rem 1rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    border-radius: 2rem;
    box-shadow: var(--shadow-2);
    font-size: 1.25rem;
    cursor: pointer;
    transition: all 0.3s linear;
  }
  .download-btn:hover {
    background: var(--primary-500);
    color: var(--white-color);
  }
  .icon {
    display: flex;
    font-size: 1.75rem;
    align-items: center;
  }
`;

export default Wrapper;
