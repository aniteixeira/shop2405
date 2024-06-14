import Image from "next/image";
export default function Spinner (){
    return (
    <Image
    width={100}
    height={200}
    src="/bars-fade.svg" 
    alt="Imagem carregando" />
    );
}