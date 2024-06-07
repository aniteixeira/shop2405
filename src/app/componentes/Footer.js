import Styles from "./footer.module.css";

export default function Footer(){
    return(
        <footer className={Styles.footer}>
            <ul>
                <li>
                    <Image
                    width={30}
                    heigth={30}
                    src={"https://i.pinimg.com/736x/7e/2d/f6/7e2df6d288a758c264186555d8809b57.jpg"}/>
                    <spam>Instagram</spam>
                </li>

                <li>
                    <Image
                    width={30}
                    heigth={30}
                    src={"https://cdn-icons-png.flaticon.com/256/20/20673.png"}/>
                     <spam>Facebook</spam>
                </li>

                <li>
                    <Image
                    width={30}
                    heigth={30}
                    src={"https://static.vecteezy.com/system/resources/thumbnails/031/737/197/small_2x/whatsapp-icon-whatsapp-social-media-logo-free-png.png"}/>
                     <spam>Whatsapp</spam>
                </li>

                <li>
                    <Image
                    width={30}
                    heigth={30}
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6f3fz3-qVnSYcTy-ZnYTvmYGsVQKjlMNfQ&s"}/>
                     <spam>TikTok</spam>
                </li>
                <Image
                width={60}
                heigth={60}
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdLN2gs2TAHUiw0m1MjR4rvDt6dlJIklxNXA&s"}/>
            </ul>

            <p>Desde 22/02/2007</p>
            </footer>
    );
};