import NavBar from "@/components/navbar";
import { BsArrowReturnRight } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="w-full h-screen relative bg-hero-image bg-cover bg-top">
        <NavBar />
        <div className="flex justify-between">
          <div className="flex flex-col justify-center text-3xl text-white px-20">
            <h1>'Inspirational quote here</h1>
            <h1>please and thank you'</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-10 bg-purple-700 w-96 h-96 mt-24 text-white">
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
        <div className="flex justify-end px-16 mt-10 text-white">
          <h2>Copyright V&A Museum, London</h2>
        </div>
      </section>
    </main>
  );
}
