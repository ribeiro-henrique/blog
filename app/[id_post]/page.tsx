"use client";
import { useParams } from "next/navigation";

export default function Post() {
  const { id_post } = useParams();

  return (
    <div>
      <h1>{id_post}</h1>
    </div>
  );
}
