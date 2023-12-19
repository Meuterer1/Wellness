import styled from "styled-components";

interface StyledImageProps {
  src: string;
}

export const Image = styled.img<StyledImageProps>`
  src: ${(props) => props.src};
  width: 100%;
  object-fit: contain;
  object-position: center;
`;

export const SmallImage = styled(Image)`
  height: 100px;
  width: 100px;
`;

export const MediumImage = styled(Image)`
  height: 80vw;
  margin: 1rem 0;
  max-width: 80vw;
  object-fit: cover;

  @media (min-width: 900px) {
    margin: 1rem;
    height: 20vw;
    max-width: 20vw;
  }
`;

export const VerticalImage = styled(Image)`
  width: 100%;
  height: 100vw;
  object-fit: cover;
  margin-bottom: 70vw;
  transform: translateX(-10%);

  @media (min-width: 340px) {
  }

  @media (min-width: 480px) {
  }

  @media (min-width: 900px) {
    height: 50vw;
    margin-bottom: 50vw;
    width: 75%;
  }

  @media (min-width: 1100px) {
    height: 40vw;
    margin-bottom: 50vw;
    width: 75%;
  }

  @media (min-width: 1250px) {
    margin-bottom: 30vw;
  }

  @media (min-width: 1450px) {
    height: 35vw;
    width: 65%;
  }
`;

export const AbsoluteImage = styled(VerticalImage)`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(15%, 60%);

  @media (min-width: 900px) {
    transform: translate(0%, 65%);
  }

  @media (min-width: 1250px) {
    transform: translate(0%, 55%);
  }
`;
