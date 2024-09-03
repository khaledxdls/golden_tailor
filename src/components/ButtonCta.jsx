import { FaPhoneVolume } from "react-icons/fa6";

function ButtonCta() {
  return (
    <button className=" px-2 py-4 bg-primary-50 text-primary-300 w-fit flex items-center gap-3">
      <FaPhoneVolume className=" w-5 h-5 text-primary-200"> </FaPhoneVolume>{" "}
      <span className=" font-bold"> Phone: (343) 444 - 1844 </span>{" "}
    </button>
  );
}

export default ButtonCta;
