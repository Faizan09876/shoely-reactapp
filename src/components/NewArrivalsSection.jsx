import Card from "./Card";

function NewArrivalsSection({ items, onClickCard }) {
  return (
    <div className="mt-10">
      <div className="flex-center">
        <div className=" dark:text-white bg-[url('./assets/lines.png')] bg-center text-4xl font-extrabold">
          New Arrivals
        </div>
      </div>

      <div className="justify-between mt-10 grid grid-cols-1 gap-y-24 gap-x-6 md:grid-cols-2 2xl:grid-cols-[repeat(3,30%)] ">
        {items.map((item) => (
          <Card key={item.id} item={item} onClickCustom={onClickCard} />
        ))}
      </div>
    </div>
  );
}

export default NewArrivalsSection;
