function Item(props) {
  return (
    <li className="flex flex-col gap-[2px] cursor-pointer">
      <a className="text-sm font-semibold" href="#">
        {props.text}
      </a>
    </li>
  );
}

export default Item;
