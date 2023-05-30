"use client";

import { useEffect, useState } from "react";
import { fetchMuholiData } from "../api/api";
import NavBar from "@/components/navbar";

export default function Muholi() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await fetchMuholiData();
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
        <div className="flex flex-col justify-center items-center text-2xl py-10 px-20 gap-6">
          <h1>Zanele Muholi</h1>
          <p className="text-lg">
            Zanele Muholi's work addresses the sexual and gender identity of
            being lesbian, gay, bisexual, intersex, and transgender in South
            Africa by challenging the traditional documentary of black LGBTQIA+
            people in photography. In the series Faces and Phases, Muholi aims
            to reflect a more representative society by photographing
            individuals across the spectrum from soccer player to dancer, a
            scholar to a human rights activist. Having been excluded from any
            formal gay rights movement until post-Apartheid, Muholi attempts to
            address the issues of violation and prejudice these communities
            still face.
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
            <p>Chairs Comming Right up!</p>
          )}
        </div>
      </section>
    </main>
  );
}
