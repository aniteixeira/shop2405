'use client'
import Image from "next/image"
import styles from "./main.module.css"
import { useEffect } from "react";

export default async function Main(){

  const [listProduct, setListProduct] = useState([]);

  useEffect( () => {
    const getProduct = async() =>{
  
const response = await fetch("https://fakestoreapi.com/products");
const data = await response.json();

setListProduct(data);
}
getProduct();
}, []);

const orderAZ = () =>{
  const newList = [...listProduct].sort( (a,b) =>
    a.title.localeCompare(b.title)
  );
  setListProduct(newList);
}

const orderZa = () =>{
  let newList = [...listProduct].sort( (a,b) =>
    a.title.localeCompare(b.title)
  );
  newList = newList.reverse();
  setListProduct(newList);
}


  return (
    <>
    <div>
      <button onClick={orderAZ}>AZ</button>
      <button onClick={orderZa}>ZA</button>
    </div>
    <main className={styles.main}>
        {listProduct.map((products) => 
        <div className={styles.card} key={products.id}>
          <h3>{products.title}</h3>
            <p>Preço: ${products.price}</p>
            <p>Descrição: {produto.description}</p>
            <p>Categoria: {products.category}</p>
            <p>Estoque: {products.rating.count}</p>
            <Image width={200} height={200}
              src= {products.imagem}/>
            </div>
        )}
      
    </main>
    </>
  );
};


