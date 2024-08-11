import { star } from "../assets/icons";

function PopularProductCard({ imgURL, name, price }) {
  return (
    <div className="flex w-full flex-1 flex-col max-sm:w-full">
      <img src={imgURL} alt="product" width={282} height={282} />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" height={24} width={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          <span>(4.5)</span>
        </p>
      </div>
      <h3 className="mt-2 font-palanquin text-2xl font-semibold leading-normal">
        {name}
      </h3>
      <p className="mt2 font-montserrat text-2xl font-semibold leading-normal text-coral-red">
        {price}
      </p>
    </div>
  );
}
export default PopularProductCard;
