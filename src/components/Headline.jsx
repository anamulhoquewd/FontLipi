function Headline(props) {
  return (
    <div className="mb-16">
      <h1 className="text-5xl font-bold m-auto text-center mb-6">
        {props.title}
      </h1>
      <p className="text-sm text-[#606060] font-semibold text-center w-2/5 m-auto">
        <span>{props.decs1}</span>
        <span>{props.decs2}</span>
      </p>
    </div>
  );
}

export default Headline;
