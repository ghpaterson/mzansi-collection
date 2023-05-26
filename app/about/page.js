import NavBar from "@/components/navbar";

export default function About() {
  return (
    <main>
      {/* header image */}
      <section className="w-full h-[600px] relative bg-about-image bg-center bg-cover bg-top">
        <NavBar />
        <div className="flex flex-col lg:flex-row  lg:justify-end lg:items-center ">
          <div className="bg-purple-700 flex flex-col justify-center w-72 lg:w-80 lg:h-80 text-base lg:text-xl gap-2 text-white font-baskerville mx-auto lg:mt-20 lg:px-4 lg:mx-0">
            <h1 className="">About the Mzansi Collection</h1>
          </div>
        </div>
      </section>
    </main>
  );
}
