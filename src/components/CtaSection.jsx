import styled from "styled-components";
import ButtonCta from "./ButtonCta";

const CtaSectionStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    left: 58%;
    flex-direction: row;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  position: relative;
  filter: brightness(0.5);
  overflow-y: hidden;
`;

function CtaSection() {
  return (
    <div className="relative -z-10">
      <StyledImage src="./Cta.jpg" alt="Call to action" />
      <CtaSectionStyled>
        <h1>
          <span className="block text-xl md:text-2xl font-bold text-white">
            Ready to transform your wardrobe ? Visit Golden Tailor and
            experience the perfect fit today!
          </span>{" "}
        </h1>{" "}
        <ButtonCta />
      </CtaSectionStyled>{" "}
    </div>
  );
}

export default CtaSection;
