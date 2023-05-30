"use client";

import { useEffect, useState } from "react";
import { fetchGoldblattData } from "../api/api";
import NavBar from "@/components/navbar";

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
        <div className="flex justify-center text-2xl py-10">
          <h1>David Goldblatt</h1>
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
    </main>
  );
}
