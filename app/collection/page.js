import NavBar from "@/components/navbar";
import Link from "next/link";
import { BsArrowReturnRight } from "react-icons/bs";

export default function Collection() {
  return (
    <main>
      {/* header image */}
      <section className="w-full h-[600px] relative bg-collections-image bg-cover bg-top">
        <NavBar />
        <div className="flex flex-col lg:flex-row  lg:justify-start lg:items-center ">
          <div className="bg-purple-700 flex flex-col justify-center w-72 lg:w-80 lg:h-80 text-base lg:text-xl gap-2 text-white font-baskerville mx-auto lg:mt-20 lg:px-4 lg:mx-0">
            <h1 className="">
              Explore the growing collection of South African Artists
            </h1>
          </div>
        </div>
      </section>
      {/* artist cards */}
      <section className="pt-10 pb-32">
        <div className="flex justify-center items-center mt-6 ">
          <div className="lg:flex lg:flex-row lg:justify-around w-3/4 gap-4 text-black ">
            <div className="flex flex-col items-center justify-between lg:w-96 lg:h-[400px] shadow-xl py-10">
              <h1 className="text-xl">Zanele Muholi</h1>
              <div className="lg:w-96 lg:h-96 bg-muholi-image bg-contain"></div>
              <Link href="/muholi" alt="muholi">
                <div className=" flex justify-center items-center bg-transparent w-60 gap-4 border-solid border-black border-2 rounded-xl px-4 py-2 mt-4 text-black">
                  <button>See the Collection</button>
                  <BsArrowReturnRight />
                </div>
              </Link>
            </div>
            <div className=" flex flex-col items-center justify-between lg:w-96 lg:h-[400px] shadow-xl py-10">
              <h1 className="text-xl">David Goldblatt</h1>
              <div className="lg:w-96 lg:h-96 bg-goldblatt-image bg-cover"></div>
              <Link href="/muholi" alt="muholi">
                <div className=" flex justify-center items-center bg-transparent w-60 gap-4 border-solid border-black border-2 rounded-xl py-2 px-4 mt-4 text-black">
                  <button>See the Collection</button>
                  <BsArrowReturnRight />
                </div>
              </Link>
            </div>
            <div className=" flex flex-col items-center justify-between lg:w-96 lg:h-[400px] shadow-xl py-10">
              <h1 className="text-xl">Diane Victor</h1>
              <div className="lg:w-96 lg:h-96 bg-victor-image bg-cover"></div>
              <Link href="/muholi" alt="muholi">
                <div className=" flex justify-center items-center bg-transparent w-60 gap-4 border-solid border-black border-2 rounded-xl py-2 px-4 mt-4 text-black">
                  <button>See the Collection</button>
                  <BsArrowReturnRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* v&a footer */}
      <section className="py-10">
        <div className="flex justify-center lg:justify-end lg:px-16 mt-4 lg:mt-10 text-black">
          <h2>Copyright V&A Museum, London</h2>
        </div>
      </section>
    </main>
  );
}
