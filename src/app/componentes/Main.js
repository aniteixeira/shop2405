'use client'
import Image from "next/image"
import Spinner from "./Spinner";
import styles from "./main.module.css"
import { useEffect, useState } from "react";
import ErrorGetData from "./ErrorGetData";
import Link from "next/link";

export default function Main(){

  const [listProduct, setListProduct] = useState([]);
  const [listComplete, setListComplete] = useState([]);
  const [search, setSearch] = useState("");
  const [errorFetch, setErroFetch] = useState(false);

  useEffect( () => {
    const getProduct = async() =>{
  
const response = await fetch("https://fakestoreapi.com/products/");
const data = await response.json();

setListProduct(data);
setListComplete(data);
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


const searchText = (text) =>{
  setSearch(text);
  if(text.trim()==""){
    setListProduct(listComplete);
    return
  }
  const newList = listProduct.filter((product) =>
  product.title.toUpperCase().trim().includes(search.toUpperCase().trim()));
  setListProduct(newList);
}
if (errorFetch == true)
{
  return <ErrorGetData/>
}
if (listComplete[0] == null){
  return <center><Spinner/></center>
}
  return (
    <>
    <div>
      <input type="text" value={search} placeholder="Pesquisar produto" onChange={(event) => searchText( event.target.value)}/>
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
            <Link href={`/product/${product.id}`}>
              <spam>Ver mais!</spam>
            </Link>
            </div>
        )}
    </main>
    </>
  );
};


