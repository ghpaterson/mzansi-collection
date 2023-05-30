import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-screen bg-pink-700 text-white text-base font-baskerville lg:text-2xl px-6 lg:px-12 py-4">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/" alt="logo">
            <h1 className="ml-4">the</h1>
            <h1>MZANSI</h1>
            <h1>
              COLLECTION <span className="font-bold text-xs"> BETA</span>
            </h1>
          </Link>
        </div>
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
