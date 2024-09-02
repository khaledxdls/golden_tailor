import PropTypes from 'prop-types';
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

function HeroSection({ pageName }) {
  let imageSrc;
  let altText;
  let headingText1;
  let headingText2;

  // Ensure that the PropTypes definition is outside the component function
  HeroSection.propTypes = {
    pageName: PropTypes.string.isRequired,
  };

  console.log("pageName:", pageName);

  // Set image source, alt text, and heading text based on the pageName
  switch (pageName) {
    case "home":
      imageSrc = "/homehero.jpg"; // Corrected the path
      altText = "Home Hero";
      headingText1 = "Friendly Expert Tailoring";
      headingText2 = "Expert Clothing Alterations and Tailoring Services.";
      break;
    case "services":
      imageSrc = "/services_hero.jpg"; // Corrected the path
      altText = "Services Hero";
      headingText1 = "Professional Tailoring Services";
      headingText2 = "Our Services are Tailored to Your Needs.";
      break;
    case "about":
      imageSrc = "/about_hero.jpg"; // Corrected the path
      altText = "About Hero";
      headingText1 = "Welcome to Golden Tailor";
      headingText2 = "Expert Tailoring and Custom Services.";
      break;
    default:
      imageSrc = "/defaulthero.jpg"; // Corrected the path
      altText = "Default Hero";
      headingText1 = "Welcome to Golden Tailor";
      headingText2 = "Expert Tailoring and Custom Services.";
      break;
  }

  return (
    <div className="relative -z-10">
      <StyledImage src={imageSrc} alt={altText} />
      <HeroSectionStyled>
        <h1 className="uppercase">
          <span className="block text-[1rem] font-bold text-white">
            {headingText1}
          </span>
          <span className="block text-[2.1rem] font-bold text-white">
            {headingText2}
          </span>
        </h1>
      </HeroSectionStyled>
    </div>
  );
}

export default HeroSection;
