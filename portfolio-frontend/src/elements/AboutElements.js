import styled from "styled-components"

export const AboutWrapper = styled.section`
    padding: 7rem 0;
    background: var(--clr-grey-10);
  min-height: calc(100vh - 5rem - 9rem);

.about-stack span {
    display: inline-block;
    background: var(--clr-grey-9);
    color: var(--clr-grey-5);
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
  }
  .about-stack span {
    margin-top: 0.5rem;
  }
  
  .about-img {
    margin-bottom: 2rem;
    height: 25rem;
  }
  .about-text .section-title {
    margin-bottom: 2rem;
    text-align: left;
  }
  .about-text .underline {
    margin-left: 0;
    margin-right: 0;
  }
  .about-text p {
    line-height: 2;
  }
  .stack-container {
    width: 30rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 0.5rem;
  }
  .stack-container span {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    color: var(--clr-grey-4);
  }
  .stack-icon {
    color: var(--clr-primary-5);
    margin-right: 0.25rem;
    font-size: 1rem;
  }
  @media screen and (min-width: 992px) {
    .about-center {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
      column-gap: 4rem;
    }
    .about-img {
      grid-column: 1 / span 5;
      margin-bottom: 0;
    }
    .about-text {
      grid-column: 6 / -1;
    }
  }
  `