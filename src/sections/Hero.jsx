import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <div className="flex">
      <section
        id="home"
        className="max-container flex min-h-screen w-full flex-col justify-center gap-10 xl:flex-row"
      >
        {/* Hero Text  */}
        <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
          <p className="font-montserrat text-xl text-coral-red">
            Our Summer Collection
          </p>
          <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82]">
            <span className="relative z-10 pr-10 xl:whitespace-nowrap xl:bg-white">
              The new arrival
            </span>
            <br />
            <span className="mt-3 inline-block text-coral-red">Nike</span> Shoes
          </h1>
          <p className="sm:mx-w-sm mb-14 mt-6 font-montserrat text-lg leading-8 text-slate-gray">
            Discover stylish Nike arrivals, quality comfort and innovation for
            your active life
          </p>
          <Button label="Shop Now" IconURL={arrowRight} />
          <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <p className="font-palanquin text-4xl font-bold text-slate-gray">
                  {stat.value}
                </p>
                <p className="font-montserrat text-lg font-light text-slate-gray">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image  */}

        <div className="relative flex flex-1 items-center justify-center bg-primary bg-hero bg-cover bg-center max-xl:py-40 xl:min-h-screen">
          <img
            src={bigShoeImg}
            alt="Shoe Collection "
            width={610}
            height={500}
            className="relative z-10 object-contain"
          />
          <div className="absolute -bottom-[5%] flex gap-4 max-sm:px-6 sm:left-[10%] sm:gap-6">
            {shoes.map((shoe) => (
              <div key={shoe}>
                <ShoeCard
                  shoeImgUrl={shoe}
                  bigShoeImg={bigShoeImg}
                  changeShoeImg={(shoe) => {
                    setBigShoeImg(shoe);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Hero;
