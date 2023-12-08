"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const createPage = () => {
  const router = useRouter();

  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const API_URL = "http://localhost:6969";

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(`${API_URL}/produto`, {
      method: "POST",
      body: JSON.stringify({ name, brand, price, imageUrl }),
      headers: { "Content-type": "application/json" },
    });

    if (response.ok) {
      router.push("/produtos");
    } else {
      setError("Erro ao criar produto!");
    }
  }

  return (
    <section className="px-16 mt-20 w-full text-center">
      <blockquote className="font-extrabold title">
        <h1>
          CRIE SEU <span className="text-primary">PRODUTO</span>
        </h1>
        {error && <h2>{error}</h2>}
      </blockquote>
      <form className="lock max-w-xl mx-auto" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Nome:"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          name="brand"
          type="text"
          placeholder="Marca:"
          value={brand}
          onChange={(event) => setBrand(event.target.value)}
        />
        <input
          name="price"
          type="number"
          placeholder="Preço:"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <input
          name="img"
          type="text"
          placeholder="Url da imagem:"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
        />
        <button type="submit" className="primary">
          CRIAR PRODUTO
        </button>
      </form>
    </section>
  );
};

export default createPage;
