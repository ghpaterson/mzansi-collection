import NavBar from "@/components/navbar";

export default function About() {
  return (
    <main>
      {/* header image */}
      <section className="w-full h-[600px] relative bg-about-image bg-center bg-cover bg-fixed">
        <NavBar />
        <div className="flex flex-col lg:flex-row  lg:justify-end lg:items-center ">
          <div className="bg-purple-700 flex flex-col justify-center items-center w-72 lg:w-96 lg:h-96 text-base lg:text-xl gap-2 text-white font-baskerville mx-auto lg:mt-12 lg:px-4 lg:mx-0">
            <h1 className="">About the Mzansi Collection</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-transparent shadow-lg flex flex-col w-screen h-96 px-20 py-20 gap-6 font-baskerville">
          <h1 className="text-3xl ">What is Mzansi?</h1>
          <p>
            Mzansi is a colloquial name for South Africa. It is derived from the
            Xhosa noun uMzantsi meaning "south". The word has been used
            informally by South Africans since the late 1990s, and it is now
            firmly entrenched in the country's national brand and lexicon.
            Mzansi is often used in a patriotic or aspirational sense, to
            express pride in South Africa and its people. It can also be used in
            a more playful or humorous way, to refer to the country's unique
            culture and way of life. No matter how it is used, Mzansi is a term
            that is full of meaning and significance for South Africans. It is a
            reminder of the country's rich history and culture, and it is a
            symbol of hope and optimism for the future.
          </p>
        </div>
      </section>
      <section className="w-full h-[600px] relative bg-about-image2 bg-center bg-cover bg-fixed"></section>
      <section>
        <div className="bg-transparent shadow-lg flex flex-col w-screen h-96 px-20 py-20 gap-6 font-baskerville">
          <h1 className="text-3xl ">Why the Mzansi Collection?</h1>
          <p>
            I have always loved art and design. I was born in South Africa, and
            I have a deep connection to the country's rich artistic heritage. I
            believe that South African artists have a unique and important
            perspective to offer the world, and I wanted to create a platform to
            showcase their work.
          </p>
          <p>
            I am also passionate about promoting diversity in the arts. I
            believe that it is important to celebrate the work of artists from
            all backgrounds, and I hope that this website will help to do just
            that.
          </p>
        </div>
      </section>
    </main>
  );
}
