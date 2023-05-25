import NavBar from "@/components/navbar";
import { BsArrowReturnRight } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="w-full h-screen relative bg-hero-image bg-cover bg-top">
        <NavBar />
        <div className="flex flex-col lg:flex-row  lg:justify-between ">
          <div className="flex flex-col justify-center lg:w-96 text-lg lg:text-xl gap-2 text-white font-baskerville mx-auto lg:mx-0 mt-10 lg:px-20 lg:ml-20">
            <h1 className=" font-extralight">
              'Art is a way of seeing the world in a new way. It can help us to
              understand ourselves and our place in the world. Art can also be a
              way of making sense of the world around us.'
            </h1>
            <h2>- Marlene Dumas</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-10 bg-purple-700 py-10 lg:w-96 lg:h-96 mt-24 text-white font-baskerville">
            <div className="flex flex-col items-center text-3xl">
              <h1>A Collection of </h1>
              <h1>South African Artists</h1>
            </div>
            <Link href="/collection" alt="collection">
              <div className=" flex justify-center items-center bg-transparent w-60 gap-4 border-solid border-white border-2 rounded-xl py-2 px-4 text-white">
                <h1>Explore the Collection</h1>
                <BsArrowReturnRight />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end lg:px-16 mt-10 text-white">
          <h2>Copyright V&A Museum, London</h2>
        </div>
      </section>
    </main>
  );
}
