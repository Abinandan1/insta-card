import styled from "styled-components";
const Wrapper = styled.section`
  background: var(--primary-200);
  box-shadow: var(--shadow-3);
  .form-container {
  }
  form {
    /* width: 90%; */
    margin: 0 auto;
    padding: 1.5rem 2rem;
  }
  .form-row {
    display: grid;
    margin-bottom: 2rem;
  }
  .content-type {
    display: grid;
  }
  .form-label {
    margin-bottom: 0.75rem;
    text-transform: uppercase;
    font-weight: bolder;
    letter-spacing: 1px;
    color: var(--primary-950);
    border-radius: 1rem;
    border-left: 6px solid var(--primary-950);
    border-right: 6px solid var(--primary-950);
    border-top: 2px solid var(--primary-950);
    border-bottom: 2px solid var(--primary-950);
    justify-self: start;
    padding: 0 0.5rem;
  }
  /* .form-label::before {
    content: "[ ";
    color: var(--primary-color);
    font-weight: bolder;
    font-size: 1.1rem;
  }
  .form-label::after {
    content: " ]";
    color: var(--primary-color);
    font-weight: bolder;
    font-size: 1.1rem;
  } */
  .radio-container {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.75rem;
  }
  .form-row-radio {
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }
  .content {
    display: none;
  }
  .show-content {
    display: block;
  }
  .form-label-radio {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .form-color {
    background: transparent;
    border: transparent;
    width: 100%;
    height: 3rem;
  }
  .form-input {
    height: 3.5rem;
  }
  .form-input,
  .form-textarea {
    padding: 0.5rem 1.5rem;
    border-radius: 0.25rem;
    border: transparent;
    box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.1), 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
    font-size: 1rem;
  }
  .form-image {
    background: var(--primary-500);
    padding: 0.5rem;
    border-radius: 0.25rem;
  }

  @media screen and (min-width: 876px) {
    .form-input {
      font-size: 1.25rem;
    }
    .form-label {
      font-size: 1.25rem;
    }
    /* .form-label::after {
      font-size: 1.25rem;
    }
    .form-label::before {
      font-size: 1.25rem;
    } */
  }
`;

export default Wrapper;
