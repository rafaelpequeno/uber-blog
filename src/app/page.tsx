import Image from "next/image";
import logo from '../app/assets/images/logo.png';

export default function Home() {
  return (
    <main>
      <nav className="flex justify-between items-center ml-10 p-3 mr-40">
        <Image src={logo} alt={"blog logo"} width={80}/>
        <div className="justify-evenly">
        <a href="#" className="mx-5">Início</a>
        <a href="#" className="mx-5">Posts</a>
        <a href="#" className="mx-5">Seja um motorista</a>
        </div>
      </nav>
    </main>
  );
}
