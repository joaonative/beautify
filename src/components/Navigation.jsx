import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <header className="px-16 py-4">
      <nav className="flex items-center justify-between">
        <div className="flex gap-5 text-2xl font-medium">
          <Link href={"/"}>
            <h2 className="menu">Início</h2>
          </Link>
          <Link href={"/produtos"}>
            <h2 className="menu">Produtos</h2>
          </Link>
        </div>
        <h1 className="text-3xl text-primary font-bold">Beautify</h1>
        <Link href={"/criar"}>
          <button className="primary">CRIAR PRODUTO</button>
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
