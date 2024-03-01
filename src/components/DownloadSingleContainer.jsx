import DownNBuyBtn from "./DownNBuyBtn";

function DownloadSingleContainer(props) {
  return (
    <div className="flex flex-col justify-between items-start gap-5 rounded-lg shadow bg-white p-5">
      <div className="flex gap-2 justify-start items-center">
        <div className=" w-12 rounded-full">
          <img className="w-full" src={props.logo} />
        </div>
        <div>
          <h3 className=" text-xl font-semibold">{props.name}</h3>
          <span className="text-[#828282] text-sm">{props.title}</span>
        </div>
      </div>
      <h1 className="text-3xl m-auto text-center font-bold">{props.text}</h1>
      <hr className="border-gray-600 w-full opacity-40" />
      <div className="flex flex-col justify-center items-center gap-3 -mb-11 w-full">
        <p className="text-[#828282] text-sm text-center m-auto">
          {props.down} <span className="text-gray-950">{props.dCount}</span>
        </p>
        <DownNBuyBtn downText={props.downText} />
      </div>
    </div>
  );
}

export default DownloadSingleContainer;
