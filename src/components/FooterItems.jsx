import Item from "./FooterItem";

function FooterItem(props) {
  return (
    <div>
      <h3 className="text-white text-sm">{props.title}</h3>
      <div className="flex flex-col  gap-4 justify-center items-start mt-8">
        <Item item={props.item1} />
        <Item item={props.item2} />
        <Item item={props.item3} />
      </div>
    </div>
  );
}

export default FooterItem;
