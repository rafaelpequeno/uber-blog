import Image from "next/image";
import logo from '../app/assets/images/logo.png';
import driver from '../app/assets/images/driver.webp';
import { mainPostText } from '../app/assets/ts/main-post-mock';
import Posts from "./components/posts";

export default function Home() {
  return (
    <main>
      <nav className="flex justify-between items-center border-b border-black w-full">
        <Image src={logo} alt={"blog logo"} width={100} className="ml-10 p-3"/>
        <div className="justify-evenly mr-48">
        <a href="#" className="mx-5">Início</a>
        <a href="#" className="mx-5">Posts</a>
        <a href="#" className="mx-5">Seja um motorista</a>
        </div>
      </nav>
      <section className="ml-44 mr-44 flex-col">
        <h1 className="text-6xl text-center p-12">Titulo do post</h1>
        <Image src={driver} alt={"A driver game cover"} className="w-lvw "/>
        <p className="pt-10 text-justify whitespace-pre-wrap">{mainPostText}</p>
      </section>
      <Posts/>
    </main>
  );
}
