import { useState } from "react";
import nike1 from "../assets/n1-min.png";
import { QTY, SIZES } from "../constant";
import Select from "./Select";

function ShoeDetail({ shoe, onClickAdd }) {
  const [form, setForm] = useState({ qty: null, size: null });

  return (
    <div className="flex flex-col lg:flex-row-reverse  space-y-4 dark:text-white ">
      {/* Show Image */}
      <div className="  flex-1 lg:-mt-28 lg:ml-20 ">
        <div className=" h-full flex-center bg-gradient-to-br from-[#f637cf] from-5% via-[#e3d876] via-40% to-[#4dd4c6]">
          <img className="animate-float" src={shoe.src} />
        </div>
      </div>
      {/* Show Text Detail */}
      <div className="flex-1 space-y-5">
        <div className="text-5xl md:text-8xl font-black  ">{shoe.title}</div>
        <div className="font-medium md:text-xl">{shoe.description}</div>

        <div className="space-x-6 flex ">
          <div className="text-3xl font-extrabold lg:text-6xl">
            {" "}
            ${shoe.price}
          </div>
          {/* Selection */}
          <Select
            value={form.qty}
            onChange={(qty) => setForm({ ...form, qty })}
            title={"QTY"}
            options={QTY}
          />
          <Select
            value={form.size}
            onChange={(size) => setForm({ ...form, size })}
            title={"SIZE"}
            options={SIZES}
          />
        </div>

        {/* Show Buttons */}
        <div className="space-x-6">
          <button
            onClick={() => onClickAdd(shoe, form.qty, form.size)}
            className=" btn-press-anim h-14 w-40 bg-black text-white hover:bg-gray-900 active:bg-gray-600 dark:text-black dark:bg-white "
          >
            Add To Bag
          </button>
          <a href="" className="text-lg font-bold underline underline-offset-4">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default ShoeDetail;
