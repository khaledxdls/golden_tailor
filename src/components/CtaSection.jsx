import styled from "styled-components";
import ButtonCta from "./ButtonCta";
const CtaSectionStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 58%;
  width: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 10px;
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
    <div className=" relative -z-10   ">
      <StyledImage src="./Cta.jpg" alt="Call to action"></StyledImage>{" "}
      <CtaSectionStyled>
        <h1>
          <span className="block text-2xl font-bold  text-white">
            Ready to transform your wardrobe? Visit Golden Tailor and experience
            the perfect fit today!
          </span>{" "}
        </h1>{" "}
        <ButtonCta></ButtonCta>
      </CtaSectionStyled>{" "}
    </div>
  );
}

export default CtaSection;
