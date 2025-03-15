import { useState } from "react";
import AddToCartButton from "../button/addToCartButton";

interface Props {
  productName: string;
  productImg: string;
  price: string;
}

const ProductCard = ({ productName, productImg, price }: Props) => {
  const [count, setCount] = useState(1);
  const [isHover, setHover] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="w-[50vh] py-4 px-6 rounded-md flex flex-col gap-6 shadow-2xl hover:shadow-xl hover:bg-amber-50 cursor-pointer"
      >
        <img className="w-full h-[35vh] rounded" src={productImg} alt={productName} />
        <h4 className="text-3xl text-secondary">{productName}</h4>
        <h4
          className={`text-primary ${
            isHover === true ? "font-bold" : "font-semibold"
          }`}
        >
          {price}
        </h4>
        <div className="flex gap-4">
          <p>Quantity:</p>
          <div className="flex gap-6 items-center">
            <span
              onClick={() => {
                {
                  if (count <= 0) {
                    setCount(1);
                  } else {
                    setCount(count - 1);
                  }
                }
              }}
              className="bg-zinc-300 px-2"
            >
              -
            </span>
            <span>{count === 0 ? count + 1 : count}</span>
            <span
              onClick={() => setCount(count + 1)}
              className="bg-zinc-300 px-2"
            >
              +
            </span>
          </div>
        </div>
        <div className="flex justify-start items-center">
          <AddToCartButton
            buttonTitle="Add To Cart"
            bgColor={`${isHover ? "bg-secondary" : "bg-primary"}`}
          />{" "}
          {/* pass bgColor in format eg: bgColor="bg-[#000000]" */}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
