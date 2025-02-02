import Header from "../header";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClients = async () => {
      const result = await axios("http://localhost:8000/testAPI");
      // setClients(result.data.hits);
      console.log(result);
    };

    getClients();
  }, []);

  return (
    <>
      <Header />
      <div className="content">
        <ul>
          // Mapping over array of friends
          {clients.map((client, index) => (
            // Setting "index" as key because name and age can be repeated, It will be better if you assign uniqe id as key
            <li key={index}>
              <span>name: {client.title}</span> <span>age: {client.age}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
