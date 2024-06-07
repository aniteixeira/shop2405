import styles from "./header.module.css";
import Image from "next/image";
export default function Header(){

    return (
  <nav className={styles.navbar}>
    <div className={styles.navbar_div}>
      <Image width= {100}  height= {100} src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdLN2gs2TAHUiw0m1MjR4rvDt6dlJIklxNXA&s" />
      <p>Colo de Deus Store</p>
      <p className={styles.texto}></p>
    </div>

    <div className={styles.navbar_menu}>
      <Image className={styles.navbar_item} width= {40}  height= {40} src= "https://png.pngtree.com/png-vector/20190725/ourlarge/pngtree-vector-shopping-bag-icon-png-image_1577291.jpg" />

      <button type="button" className={styles.button}>Adicionar Produto</button>

    </div>
   </nav>
    );
};