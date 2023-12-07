import React from "react";

const Landing = () => {
  return (
    <section className="flex flex-col gap-[75px]">
      <div className="w-full px-16 mt-20">
        <div className="flex items-center justify-between gap-5">
          <blockquote className="font-extrabold title">
            <h1>ESCOLHA ENTRE NOSSAS</h1>
            <h1>SOLUÇÕES NATURAIS DE </h1>
            <h1 className="text-primary">SKIN CARE.</h1>
          </blockquote>
          <div className="flex items-center justify-center bg-primary rounded-full w-[450px] h-[450px] pt-5 sombra">
            <img src="/landing.png" alt="" className="" />
          </div>
        </div>
      </div>
      <div className="w-full h-[440px] bg-cover bg-landing"></div>
    </section>
  );
};

export default Landing;
