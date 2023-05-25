import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <section className="w-full h-screen relative bg-hero-image bg-cover bg-top">
        <NavBar />
        <div className="flex justify-end">
          <div className="flex justify-center items-center bg-purple-700 w-96 h-96 mt-48">
            <div className=" flex justify-center bg-transparent w-52 border-solid border-white border-2 rounded-xl py-2 px-4 text-white">
              <h1>Explore the Collection</h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
