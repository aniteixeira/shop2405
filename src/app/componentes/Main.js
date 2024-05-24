import React, { useState, useEffect } from 'react';
export default Main;
const Main = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setProdutos(data))
      }, []);

  return (
    <main>
      <h2>Produtos</h2>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            <h3>{produto.titulo}</h3>
            <p>Preço: ${produto.preco}</p>
            <p>Descrição: {produto.descricao}</p>
            <p>Categoria: {produto.categoria}</p>
            <div>
              {produto.imagens.slice(0, 3).map(imagem => (
                <img key={imagem} src={imagem} alt={produto.titulo} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};


