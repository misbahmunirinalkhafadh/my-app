import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function DetailArticle() {
  const location = useLocation();
  const { title, content } = location.state;
  const { id } = useParams();
  console.log("ID Article : ", id);

  return (
    <>
      <div>Detail Article</div>
      <div>{title}</div>
      <div>{content}</div>
    </>
  );
}
