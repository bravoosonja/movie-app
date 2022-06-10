import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ image }) => image}), var(--gray);
  background-size: 100%, cover;
  background-position: center;
  height: 900px;
  position: relative;
  animation: animateHeroImage 1s;
  padding: 1rem;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  color: var(--white);

  h1 {
    font-size: var(--fontXL);

    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }

    p {
      font-size: var(--fontMed);

      @media screen and (max-width: 720px) {
        font-size: var(--fontSmall);
      }
    }

    @media screen and (max-width: 720px) {
      max-width: 100%;
    }
  }
`;

export const HeaderWrapper = styled.div`
  background: none;
  padding: 0;
  margin-top: none;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  /* padding: 20px 0; */
  margin: 0 auto;
`;
