import styled from "styled-components";
const HeroSectionStyled = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100svh;
  object-fit: cover;
  position: relative;
  filter: brightness(0.5);
  overflow-y: hidden;
`;

function HeroSection() {
  return (
    <div className=" relative -z-10   ">
      <StyledImage src="./homehero.jpg" alt="home"></StyledImage>
      <HeroSectionStyled>
        <h1 className=" uppercase ">
          <span className="block text-[1rem] font-bold  text-white">
            Friendly Expert Tailoring
          </span>
          <span className="block text-[2.1rem] font-bold  text-white">
            Expert Clothing Alterations and Tailoring Services.
          </span>
        </h1>
      </HeroSectionStyled>
    </div>
  );
}

export default HeroSection;
