import React from "react";

const Navigation = () => {
  return (
    <header className="px-32 py-4">
      <nav className="flex items-center justify-between">
        <div className="flex gap-5 text-2xl font-medium">
          <h2>Início</h2>
          <h2>Produtos</h2>
        </div>
        <h1 className="text-3xl text-primary font-bold">Beautify</h1>
        <div>
          <button className="primary">ENTRAR</button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
