import { StaticImageData } from "next/image";

export interface Post {
  id: number;
  img: StaticImageData;
  img_descricao: string;
  titulo: string;
  data_post: string;
  descricao: string;
}
