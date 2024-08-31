function ButtonPrimary({ children }) {
  return (
    <button className="bg-primary-200 px-8 py-4 font-bold text-base border-[none] rounded-sm [transition:all_0.2s] text-[#fff] hover:-translate-y-[2px] hover:[box-shadow:0_0.5rem_1rem_rgba(0,_0,_0,_0.4)] active:[box-shadow:0_0.2rem_1rem_rgba(0,_0,_0,_0.4)] active:translate-y-[3px]">
      {" "}
      {children}{" "}
    </button>
  );
}

export default ButtonPrimary;
