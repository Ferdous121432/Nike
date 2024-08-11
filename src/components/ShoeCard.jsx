function ShoeCard({ shoeImgUrl, bigShoeImg, changeShoeImg }) {
  const handleClick = () => {
    if (bigShoeImg !== shoeImgUrl.bigShoe) {
      changeShoeImg(shoeImgUrl.bigShoe);
    }
  };

  return (
    <div
      className={`rounded-xl border-2 ${shoeImgUrl.bigShoe === bigShoeImg ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="max-sm:padding-4 flex items-center justify-center rounded-xl bg-card bg-cover bg-center max-sm:p-4 sm:h-40 sm:w-40">
        <img
          src={shoeImgUrl.thumbnail}
          alt="Shoe"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default ShoeCard;
