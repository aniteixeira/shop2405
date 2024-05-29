import styles from "./header.module.css"
export default function Header(){

    return (
  <nav className={styles.navbar}>
    <div className={styles.navbar_brand}>Shop Main</div>
    <ul className={styles.navbar_menu}>
     <li className={styles.navbar_item}><a href="#home">Início</a></li>
     <li className={styles.navbar_item}><a href="#">Início</a></li>
     <li className={styles.navbar_item}><a href="#">Início</a></li>
     <li className={styles.navbar_item}><a href="#">Início</a></li>
     </ul>
     </nav>
    );
};