function ButtonRight({ onClick }) {
  return (
    <button
      className="flex items-center justify-center pb-3 bg-primary-50 text-primary-200 rounded-full w-20 h-20 text-center text-[3rem] border-[3px] border-[solid] border-[#134e4a] [transition:all_0.3s] cursor-pointer  absolute top-0 z-10 -right-32 translate-y-[10%]"
      onClick={onClick}
    >
      &rarr;{" "}
    </button>
  );
}

export default ButtonRight;
