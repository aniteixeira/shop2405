import Link from "next/link";
import Styles from "./page.module.css";
import Image from "next/image";

export default async function Home() {

  return (
    <main className={Styles.cabecalho}>
      <nav>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
        </ul>
      </nav>
    </main>
  );
};
 