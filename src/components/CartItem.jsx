import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { QTY, SIZES } from "../constant";

function CartItem({ item: { product, qty, size }, onClickTrash }) {
  return (
    <div className=" dark:bg-transparent dark:hover:bg-night-50 cursor-pointer bg-gray-50  hover:bg-[#daffa2] p-2 space-y-2 ">
      <div className="flex  space-x-2 ">
        {/* Image */}
        <img className="h-24" src={product.src} />
        <div className="space-y-2">
          {/* Title and Description */}
          <div className=" dark:text-white font-bold">{product.title}</div>
          <div className="text-sm text-gray-400 ">{product.description}</div>
        </div>
        {/* Price */}
        <div className=" dark:text-white font-bold">${product.price} </div>
      </div>

      <div></div>

      <div className="flex justify-between ">
        <div className="flex space-x-6 pl-32">
          <div>
            <div className="dark:text-white font-bold">SIZE</div>
            <Select
              value={size}
              title={""}
              options={SIZES}
              className={"w-16 p-1 pl-2"}
            />
          </div>
          <div>
            <div className=" dark:text-white font-bold">QTY</div>
            <Select
              value={qty}
              title={""}
              options={QTY}
              className={"w-16 p-1 pl-2"}
            />
          </div>
        </div>

        <button onClick={() => onClickTrash(product.id)}>
          <CiTrash size={25} className=" dark:text-white text-black" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
