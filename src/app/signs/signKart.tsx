"use client";
import { Isigns } from "@/intefacies/Isigns";
import styles from "./signKart.module.css";
import * as images from "../../../public/img/signs/worning";
import Image from "next/image";
import RadioField from "@/componets/forms/radioField";
import { sign } from "crypto";
import { useEffect, useState } from "react";
import { IpriceList } from "@/intefacies/IpricelLst";
const SignKart = ({ sign, price }) => {
  const [params, setParams] = useState({
    size: "2",
    film: "aIng",
  });

  const [signpPice, setSignPrice] = useState(0);
  const handleSelect = (name: string, value: string) => {
    setParams({ ...params, [name]: value });
  };
  const normSize = sign.sizes.map((size: number) => ({
    label: size.toString(),
    value: size,
  }));
  useEffect(() => {
    setSignPrice(price.size[params.size.toString()][params.film]);
  }, [params.film, params.size, price]);
  return (
    <div className={styles.signkart}>
      <h2>
        Знак {sign.gost} ГОСТ52290-2004 <br /> {sign.name}
      </h2>
      <Image src={images[sign.imgSrc]} alt={sign.gost} width={150} />
      <div>Типоразмер</div>
      <RadioField
        items={normSize}
        name="size"
        defaultValue="2"
        onSelect={handleSelect}
      />
      <div>Тип пленки</div>
      <RadioField
        items={[
          { label: "Аком", value: "aCom" },
          { label: "Аинж", value: "aIng" },
          { label: "Б", value: "B" },
          { label: "В", value: "B" },
        ]}
        name="film"
        defaultValue="aIng"
        onSelect={handleSelect}
      />
      <div className={styles.row}>
        <button className={styles.btn}>В корзину</button>
        <h2 className={styles.price}>Цена {signpPice}</h2>
        <button className={styles.btn}>Подробнее</button>
      </div>
    </div>
  );
};
export default SignKart;
