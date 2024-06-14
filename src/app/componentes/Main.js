'use client'
import Image from "next/image"
import Spinner from "./Spinner";
import styles from "./main.module.css"
import { useEffect, useState } from "react";

export default function Main(){

  const [listProduct, setListProduct] = useState([]);

  useEffect( () => {
    const getProduct = async() =>{
  
const response = await fetch("https://fakestoreapi.com/products");
const data = await response.json();

setListProduct(data);
}
getProduct();
}, []);

const orderAz = () =>{
  const newList = [...listProduct].sort( (a, b) =>
      a.title.localeCompare(b.title)
  );
  setListProduct(newList);
}
const orderZa = () =>{
  let newList = [...listProduct].sort( (a, b) =>
      a.title.localeCompare(b.title)
  );
  newList = newList.reverse();
  setListProduct(newList);
}

if(listProduct[0] == null){
  return <Spinner/>
}
const orderPrice = () =>{
  let newList = [...listProduct].sort( (a, b) =>
      a.price - b.price
  );
  setListProduct(newList);
}
const orderPriceReverse = () =>{
  let newList = [...listProduct].sort( (a, b) =>
      a.price - b.price
  );
  newList = newList.reverse();
  setListProduct(newList);
}

  return (
    <>
    <div>
      <button onClick={orderAz}>AZ</button>
      <button onClick={orderZa}>ZA</button>
      <button onClick={orderPrice}>Menor preço para o maior</button>
      <button onClick={orderPriceReverse}>Maior preço para o menor</button>
    </div>
    <main className={styles.main}>
        {listProduct.map((product) => 
        <div className={styles.card} key={product.id}>
          <h3>{product.title}</h3>
            <p>Preço: ${product.price}</p>
            <p>Descrição: {product.description}</p>
            <p>Categoria: {product.category}</p>
            <p>Estoque: {product.rating.count}</p>
            <Image 
            width={200} 
            height={200}
            src= {product.image}/>
            </div>
        )}
    </main>
    </>
  );
};


