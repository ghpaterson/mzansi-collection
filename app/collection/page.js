"use client";

import { useEffect, useState } from "react";
import { fetchData } from "../api/api";

export default function Collection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await fetchData();
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
        <div>
          <h1>Collection</h1>
          {data ? (
            <ul>
              {data.records.map((record) => (
                <li key={record.systemNumber}>
                  <h2>Title: {record._primaryTitle || "Untitled"}</h2>
                  <p>Maker: {record._primaryMaker.name}</p>
                  <p>Location: {record._primaryPlace}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
    </main>
  );
}
