import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({ name, price, imageUrl, brand, id }) => {
  return (
    <div className="shadow-xl bg-white overflow-hidden flex flex-col items-center justify-start text-xl font-medium rounded-xl gap-4 pb-3">
      <div>
        <Image
          src={imageUrl}
          width={300}
          height={200}
          alt={`produto cosmético ${name} por ${brand}`}
        />
      </div>
      <h1>
        {name} - <span>{brand}</span>
      </h1>
      <h1>{id}</h1>
      <span> R$ {price}</span>
      <Link href="/[id]" as={`/${id}`}>
        <button className="primary">VER MAIS</button>
      </Link>
    </div>
  );
};

export default Product;
