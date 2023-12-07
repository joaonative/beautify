import Landing from "@/components/Landing";
import Product from "@/components/Product";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Landing />
      <seciton className="w-full px-16 mt-20 text-center">
        <h1 className="title font-extrabold">
          NOVIDADES NA <span className="text-primary">BEAUTIFY.</span>
        </h1>
        <p className="subtitle font-medium">
          Produtos prontinhos para o seu cuidado especial.
        </p>
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
      </seciton>
    </main>
  );
}
