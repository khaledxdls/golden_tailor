import { FaMapLocation, FaPhoneVolume } from "react-icons/fa6";

function BussinesInfo() {
  return (
    <ul className=" flex gap-3">
      <li className=" flex gap-5 items-center">
        <div className=" bg-stone-100 rounded-full border p-3 border-zinc-600">
          <FaMapLocation className=" w-3 h-3 text-primary-200"> </FaMapLocation>{" "}
        </div>{" "}
        <div className="">
          <p className=" font-bold "> Address / Map: </p>{" "}
          <p> ottawa, canada </p>{" "}
        </div>{" "}
      </li>{" "}
      <li className=" flex gap-5 items-center">
        <div className=" bg-stone-100 rounded-full border p-3 border-zinc-600">
          <FaPhoneVolume className=" w-3 h-3 text-primary-200"> </FaPhoneVolume>{" "}
        </div>{" "}
        <div className="">
          <p className=" font-bold "> Phone: </p> <p> (343) 444 - 1844 </p>{" "}
        </div>{" "}
      </li>{" "}
    </ul>
  );
}

export default BussinesInfo;
