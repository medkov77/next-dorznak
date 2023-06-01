"use client";
import { Isigns } from "@/intefacies/Isigns";
import styles from "./signKart.module.css";
import * as images from "../../../public/img/signs/worning";
import Image from "next/image";
import RadioField from "@/componets/forms/radioField";
import { sign } from "crypto";
import { useState } from "react";
const SignKart = ({
  _id,
  description,
  name,
  films,
  sizes,
  imgSrc,
  gost,
}: Isigns) => {
  const [params, setParams] = useState({
    size: "2",
    film: "A",
  });
  const handleSelect = (name: string, value: string) => {
    setParams({ ...params, [name]: value });
    console.log(value);
  };
  return (
    <div className={styles.signkart}>
      <h2>
        Знак {gost} ГОСТ52290-2004 <br /> {name}
      </h2>
      <Image src={images[imgSrc]} alt={gost} width={150} />
      <div>Типоразмер</div>
      <RadioField
        items={sizes}
        name="size"
        defaultValue="2"
        onSelect={handleSelect}
      />
      <div>Тип пленки</div>
      <RadioField
        items={films}
        name="film"
        defaultValue="А"
        onSelect={handleSelect}
      />
    </div>
  );
};
export default SignKart;
