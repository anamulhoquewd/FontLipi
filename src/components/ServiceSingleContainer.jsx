function ServiceSingleContainer(props) {
  return (
    <div className="flex justify-between items-center gap-5 rounded-md shadow bg-white p-5 h-48">
      <div className=" w-1/4">
        <div className="bg-[#FCF1E6] p-6 rounded-full">
          <img className="w-full" src={props.logo} />
        </div>
      </div>
      <div className="w-3/4 flex flex-col justify-between items-start">
        <h3 className="text-xl font-bold">{props.title}</h3>
        <p className="text-sm font-medium mb-3">{props.desc}</p>
        <a src="#">
          <button className="text-sm font-semibold hover:ml-6 hover:text-[#F48B1D] transition-all">
            আরো দেখুন
          </button>
        </a>
      </div>
    </div>
  );
}

export default ServiceSingleContainer;
