import styled from "styled-components";
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  filter: brightness(0.5);
  overflow-y: hidden;
`;
function ServicesCard({ title, image }) {
  
  return (
    <div className=" bg-slate-100 p-8">
      <div className=" flex flex-col gap-5 items-center">
        <div className="bg-stone-100 rounded-full border p-3 border-zinc-600">
        <StyledImage src={image} />
        </div>
        <div className=" text-center">
          <p className="font-bold"> {title} </p> 
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
