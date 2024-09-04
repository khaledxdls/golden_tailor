import {
  FaClock,
  FaMapLocation,
  FaMessage,
  FaPhoneVolume,
  FaSquareFacebook,
  FaSquareInstagram,
  FaTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="p-14 border-t-2  border-t-slate-300 ">
      <div className="_box flex  justify-center gap-14  mb-12">
        <div className="footer_items">
          <div className="flex flex-col gap-3 items-center">
            <div className="logo">
              <img src="./logo_golden.png" className="logo" alt="golden" />
            </div>
            <p class=" font-bold ">
              Golden Tailor: Where Elegance Meets Precision.
            </p>
          </div>
        </div>
        <div className="footer_items">
          <ul className="flex flex-col gap-4">
            <li className=" flex gap-5 items-center">
              <div className=" bg-stone-100 rounded-full border p-3 border-zinc-600">
                <FaMapLocation className=" w-3 h-3 text-primary-200"></FaMapLocation>
              </div>
              <div className="">
                <p className=" font-bold ">Address/Map:</p>
                <p>ottawa,canada</p>
              </div>
            </li>
            <li className=" flex gap-5 items-center">
              <div className=" bg-stone-100 rounded-full border p-3 border-zinc-600">
                <FaClock className=" w-3 h-3 text-primary-200" />
              </div>
              <div className="">
                <p className=" font-bold ">Business Hours:</p>
                <p> 9:00AM - 9:30PM</p>
              </div>
            </li>
            <li className=" flex gap-5 items-center">
              <div className=" bg-stone-100 rounded-full border p-3 border-zinc-600">
                <FaPhoneVolume className=" w-3 h-3 text-primary-200"></FaPhoneVolume>
              </div>
              <div className="">
                <p className=" font-bold ">Phone:</p>
                <p> (343) 444-1844</p>
              </div>
            </li>
            <li className=" flex gap-5 items-centerr">
              <div className=" bg-stone-100 rounded-full border p-4 border-zinc-600">
                <FaMessage className=" w-3 h-3 text-primary-200"></FaMessage>
              </div>
              <div className="">
                <p className=" font-bold ">Email:</p>
                <p>otests@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="copyright_social_media flex justify-between items-center mt-5">
        <div className="copy_right">
          <p className="hero_box_text margin-top-2">
            &copy; Golden Tailor, Inc.All rights reserved
          </p>
        </div>
        <div className="social_media margin-top-2 flex gap-4">
          <a href="https://www.facebook.com">
            <FaSquareFacebook />
          </a>
          <a href="https://www.instagram.com">
            <FaSquareInstagram />
          </a>
          <a href="https://twitter.com/">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
