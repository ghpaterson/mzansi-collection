import NavBar from "@/components/navbar";
import Link from "next/link";
import { BsArrowReturnRight } from "react-icons/bs";

export default function Collection() {
  return (
    <main>
      <section className="w-full h-screen relative bg-white">
        <NavBar />
        <div className="flex justify-center items-center h-3/4 mt-6 ">
          <div className="grid grid-rows-3 w-3/4 gap-4 text-white ">
            <div className="bg-pink-500 h-44">
              <h1 className="text-xl">Zanele Muholi</h1>
              <Link href="/muholi" alt="muholi">
                <div className=" flex justify-center items-center bg-transparent w-60 gap-4 border-solid border-white border-2 rounded-xl py-2 px-4 text-white">
                  <button>See the Collection</button>
                  <BsArrowReturnRight />
                </div>
              </Link>
            </div>
            <div className=" bg-purple-500">
              <h1>Diane Victor</h1>
            </div>
            <div className=" bg-violet-700">
              <h1>David Goldblatt</h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
