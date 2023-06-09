"use client";

import { useEffect, useState } from "react";
import { fetchVictorData } from "../api/api";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Victor() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await fetchVictorData();
        setData(responseData);
        console.log(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <main>
      <section>
        <NavBar />
        <div className="flex flex-col items-center justify-center text-2xl px-60 py-10 gap-6">
          <h1>Diane Victor</h1>
          <p className="text-lg">
            Diane Victor is a South African artist known for her satirical and
            social commentary of contemporary South African politics. She was
            born in Witbank, South Africa, in 1964. Victor's work is often
            controversial, but it is also critically acclaimed. She has
            exhibited her work in galleries and museums around the world, and
            she has won numerous awards, including the Standard Bank Young
            Artist Award in 1990 and the SAMA Award for Visual Art in 2010.
            Victor's work is characterized by its wit, its intelligence, and its
            unflinching gaze on the realities of South African society. She is a
            powerful voice in South African art, and her work is sure to
            continue to be relevant for many years to come.
          </p>
        </div>
      </section>
      <section>
        <div>
          {data ? (
            <ul className="grid grid-cols-2 gap-10 mx-20">
              {data.records.map((record) => (
                <li key={record.systemNumber} className="shadow-xl px-6 py-12">
                  <h2 className="text-lg font-bold py-2">
                    {record._primaryTitle || "Untitled"}
                  </h2>
                  <Link
                    href={`/victor/${record.systemNumber}`}
                    alt="thumbnail-link"
                  >
                    <img
                      src={record._images._primary_thumbnail}
                      alt="thumbnail"
                      className="py-2"
                    />
                  </Link>

                  <p>Artist: {record._primaryMaker.name}</p>
                  <p>Medium: {record._primaryMaker.association}</p>
                  <p>Location: {record._primaryPlace}</p>
                  <p>Date: {record._primaryDate}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Chairs Comming Right up!</p>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
