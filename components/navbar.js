import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-screen bg-black text-white text-lg lg:text-2xl px-12 py-10">
      <div className="flex justify-between">
        <h1>Mzansi Collection</h1>
        <ul className="flex justify-end gap-4 ">
          <Link href="/" alt="home">
            Home
          </Link>
          <Link href="/collection" alt="collection">
            Collection
          </Link>
          <Link href="/about" alt="about">
            About
          </Link>
        </ul>
      </div>
    </nav>
  );
}
