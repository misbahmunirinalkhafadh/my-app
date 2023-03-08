import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailArticle() {
  const { id } = useParams();

  const [data, setData] = useState({});

  async function getPets() {
    try {
      const response = await axios.get(
        "https://pets-v2.dev-apis.com/pets?id=" + id
      );
      setData(response.data.pets[0]);
      console.log(response.data.pets[0]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPets();
  }, []);

  return (
    <>
      <div>Detail Article</div>
      <div>NAME : {data.name}</div>
      <div>STATE : {data.state}</div>
      <div>ANIMAL : {data.animal}</div>
      <div>BREED: {data.breed}</div>
      <div>DESC: {data.description}</div>
    </>
  );
}
