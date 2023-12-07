import React from "react";
import Product from "@/components/Product";

const ProductPage = () => {
  return (
    <section className="flex flex-col text-center">
      <div className="w-full px-16 mt-20">
        <div className="flex items-center justify-between gap-5">
          <blockquote className="font-extrabold title">
            <h1>NOVO KIT SKIN CARE</h1>
            <h1>
              POR {""}
              <span className="text-primary">The Ordinary.</span>
            </h1>
          </blockquote>
          <div className="flex items-center justify-center bg-primary rounded-full w-[450px] h-[450px] pt-5 sombra">
            <img src="/theordinary.png" alt="cosméticos pro The Ordinary" />
          </div>
        </div>
      </div>
      <div className="products">
        <Product
          name={"Creme hidratante"}
          brand={"Beautify"}
          price={109.9}
          imageUrl={"/produto.png"}
        />
        <Product
          name={"Creme hidratante"}
          brand={"Beautify"}
          price={109.9}
          imageUrl={"/produto.png"}
        />
        <Product
          name={"Creme hidratante"}
          brand={"Beautify"}
          price={109.9}
          imageUrl={"/produto.png"}
        />
        <Product
          name={"Creme hidratante"}
          brand={"Beautify"}
          price={109.9}
          imageUrl={"/produto.png"}
        />
      </div>
      <div className="mt-20 px-16">
        <h1 className="title font-extrabold">
          TODOS OS <span className="text-primary">Produtos.</span>
        </h1>
        <p className="subtitle font-medium">
          Aqui você encontra todo tipo de produto cosmético que proporciona o
          melhor para você e sua pele.
        </p>
      </div>
      <div className="products">
        <Product
          name={"Creme hidratante"}
          brand={"Beautify"}
          price={109.9}
          imageUrl={"/produto.png"}
        />
        <Product
          name={"Creme hidratante"}
          brand={"Beautify"}
          price={109.9}
          imageUrl={"/produto.png"}
        />
        <Product
          name={"Creme hidratante"}
          brand={"Beautify"}
          price={109.9}
          imageUrl={"/produto.png"}
        />
        <Product
          name={"Creme hidratante"}
          brand={"Beautify"}
          price={109.9}
          imageUrl={"/produto.png"}
        />
      </div>
    </section>
  );
};

export default ProductPage;
