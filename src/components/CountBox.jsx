function CountBox(props) {
  return (
    <div className=" border-gray-500 w-[31%] border-2 p-5 rounded-xl">
      <h1 className="text-white font-bold text-3xl mb-2">{props.count}</h1>
      <h3 className="text-white text-md font-bold">{props.type}</h3>
    </div>
  );
}

export default CountBox;
