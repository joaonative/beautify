"use client";

import React, { useState, useEffect } from "react";
import Product from "@/components/Product";

const ProductPage = () => {
  const [produto, setProduto] = useState([]);
  const [produtoMarca, setProdutoMarca] = useState([]);
  const [error, setError] = useState("");

  const API_URL = "http://localhost:6969";

  useEffect(() => {
    async function getProducts() {
      const response = await fetch(`${API_URL}/produto`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });

      if (response.ok) {
        const produtos = await response.json();
        console.log(produtos);
        setProduto(produtos);
      } else {
        setError("Erro ao criar produto!");
      }
    }
    async function getProductsByBrand(brand) {
      const response = await fetch(`${API_URL}/produto/marca${brand}`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });

      if (response.ok) {
        const produtos = await response.json();
        setProdutoMarca(produtos);
      } else {
        setError("Erro ao criar produto!");
      }
    }
    getProducts();
    getProductsByBrand("Lendas");
  }, []);

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
        {produtoMarca.map((p) => (
          <Product
            key={p._id}
            name={p.name}
            price={p.price}
            imageUrl={p.imageUrl}
            id={p._id}
            brand={p.brand}
          />
        ))}
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
        {produto.map((p) => (
          <Product
            key={p._id}
            name={p.name}
            price={p.price}
            imageUrl={p.imageUrl}
            id={p._id}
            brand={p.brand}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
