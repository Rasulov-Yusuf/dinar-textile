import { StaticImageData } from "next/image";

export type newsCardType = {
    id: number | string,
    title: string,
    date: string,
    url: string
}

export type CompanyData = {
  id: number;
  company: string;
  description: string;
  phone: string;
  email: string;
  imageUrl: string | StaticImageData;
}