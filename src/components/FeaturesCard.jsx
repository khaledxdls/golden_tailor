function FeaturesCard({ title, description, icon }) {
  return (
    <div className=" bg-slate-100 p-8">
      <div className="flex flex-col gap-5 items-center">
        <div className="bg-stone-100 rounded-full border p-3 border-zinc-600">
          {icon}
        </div>
        <div className=" text-center">
          <p className="font-bold"> {title} </p> <p> {description} </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesCard;
