import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Link from "next/link";

export default function Artwork({ params }) {
  console.log(params);
  return (
    <main>
      <section>
        <NavBar />
        <h1>This is a Muholi Art piece</h1>
        <h1>{params.artwork}</h1>
        <Link href="/muholi" alt="back">
          <button>Back</button>
        </Link>
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
