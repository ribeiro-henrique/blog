import { StaticImageData } from "next/image";

export interface Post {
  id: number;
  imagem: StaticImageData;
  alt: string;
  titulo: string;
  data: string;
  conteudo: string;
}
