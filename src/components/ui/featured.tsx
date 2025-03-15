import { featuredCardData } from "../../db/mockdata";
import ProductCard from "../shared/card/productCard";

const Featured = () => {
  return (
    <>
      <div>
        <div>
          <h2 className="py-10 text-4xl text-center uppercase">Featured Products</h2>
        </div>{" "}
        <div className="w-10/11 mx-auto p-4 flex justify-center gap-10 flex-wrap">
          {featuredCardData.map((key, index) => (
            <div key={index}>
              <ProductCard
                productName={key.productName}
                productImg={key.productImg}
                price={key.price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Featured;
