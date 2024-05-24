import Image from "next/image";
import Styles from "./footer.module.css";

export default function footer(){
    return(
        <footer className={Styles.footer}>
            <nav>
                <li>
                    <Image
                    width={100}
                    heigth={100}
                    src={"https://api.escuelajs.co/api/v1/products"}/>
                    </li>
            </nav>
            </footer>
    );
};