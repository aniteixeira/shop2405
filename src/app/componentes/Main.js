import Image from "next/image"
import styles from "./main.module.css"

export default async function Main(){

const response = await fetch("https://fakestoreapi.com/products");
const data = await response.json();
  return (
    <main className="{styles.main}">
        {data.map((produto) => 
        <div className={styles.card} key={produto.id}>
          <h3>{produto.titulo}</h3>
            <p>Preço: ${produto.preco}</p>
            <p>Descrição: {produto.descricao}</p>
            <p>Categoria: {produto.categoria}</p>
            <Image width={200} height={200}
              src= {produto.imagens}/>
              <p>{produto.rating.count}</p>
            </div>
        )}
      
    </main>
  );
};


