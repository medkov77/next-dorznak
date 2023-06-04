"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Isigns } from "@/intefacies/Isigns";
import { IpriceList } from "@/intefacies/IpricelLst";
import SignKart from "./signKart";
const Signs = () => {
  const [signs, setSigns] = useState<Isigns[]>([]);
  const [price, setPrice] = useState<IpriceList[]>([]);
  useEffect(() => {
    const fetchSigns = async () => {
      const signsResponse = await fetch(`/api/signs`);
      const signsData: Isigns[] = await signsResponse.json();
      const priceResponse = await fetch(`/api/price`);
      const priceData: IpriceList[] = await priceResponse.json();
      setSigns(signsData);
      setPrice(priceData);
    };
    fetchSigns();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className={styles.title}>Знаки дорожные ГОСТ 52290-2004</h1>
      <div className={styles.wrapper}>
        {signs?.map((sign) => {
          return <SignKart key={sign._id} {...sign} price={price} />;
        })}
      </div>
    </div>
  );
};
export default Signs;
