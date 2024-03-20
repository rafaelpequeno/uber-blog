import Image from "next/image";
import logo from '../app/assets/images/logo.png';

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
    </main>
  );
}
