"use client";

import { useEffect, useState } from "react";
import { fetchGoldblattData } from "../api/api";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Goldblatt() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await fetchGoldblattData();
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
        <div className="flex flex-col items-center justify-center text-2xl py-10 px-20 gap-6">
          <h1>David Goldblatt</h1>
          <p className="text-lg">
            Goldblatt was born in Randfontein, South Africa, in 1930. He studied
            at the University of the Witwatersrand, where he received a degree
            in economics. After graduating, he worked as a photographer for a
            commercial studio. In 1961, he began working as a freelance
            photographer. Goldblatt's photographs are characterized by their
            unflinching realism. He often photographed people in their everyday
            lives, and he did not shy away from depicting the harsh realities of
            apartheid. His photographs were often controversial, but they also
            helped to raise awareness of the injustices of apartheid.
          </p>
        </div>
      </section>
      <section>
        <div>
          {data ? (
            <ul className="flex flex-col gap-10 px-10">
              {data.records.map((record) => (
                <li key={record.systemNumber}>
                  <h2>Title: {record._primaryTitle || "Untitled"}</h2>
                  <img
                    src={record._images._primary_thumbnail}
                    alt="thumbnail"
                  />

                  <p>Artist: {record._primaryMaker.name}</p>
                  <p>Medium: {record._primaryMaker.association}</p>
                  <p>Location: {record._primaryPlace}</p>
                  <p>Date: {record._primaryDate}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Goldblatt coming at ya..</p>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
