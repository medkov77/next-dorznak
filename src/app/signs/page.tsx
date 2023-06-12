"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Isigns } from "@/intefacies/Isigns";
import { IpriceList } from "@/intefacies/IpricelLst";
import SignKart from "./signKart";
import Pagination from "@/componets/pagination/pagination";
import Search from "@/componets/forms/search";
const Signs = () => {
  const [signs, setSigns] = useState<Isigns[]>([]);
  const [price, setPrice] = useState<IpriceList[]>([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [search, setSearch] = useState("");
  const [serachList, setSearchList] = useState([]);
  useEffect(() => {
    const fetchSigns = async () => {
      const signsResponse = await fetch(`/api/signs?page=${page}&limit=6`);
      const signsData: { signs: Isigns[]; size: string } =
        await signsResponse.json();
      const priceResponse = await fetch(`/api/price`);
      const priceData: IpriceList[] = await priceResponse.json();
      setSigns(signsData.signs);
      setPages(Math.floor(Number(signsData.size) / 6 + 1));
      setPrice(priceData);
    };
    fetchSigns();
  }, [page]);
  useEffect(() => {
    const fetchSigns = async () => {
      const searchResponse = await fetch(`api/search?search=${search}`);
      const searchData = await searchResponse.json();
      setSearchList(searchData.signs);
    };
    fetchSigns();
  }, [search]);
  // console.log("price", price[0].form);
  return (
    <div className="container mx-auto">
      <h1 className={styles.title}>Знаки дорожные ГОСТ 52290-2004</h1>
      <Search onChange={setSearch} />
      {serachList && search.length > 3 && (
        <div className={styles.search_list}>
          {serachList.map((item) => (
            <div key={item.gost}>
              {item.gost} {item.name}
            </div>
          ))}
        </div>
      )}
      <div className={styles.wrapper}>
        {signs?.map((sign) => {
          return (
            <SignKart
              key={sign._id}
              sign={sign}
              price={price[0].form[sign.form]}
            />
          );
        })}
      </div>
      <Pagination length={pages} onSetPage={setPage} />
    </div>
  );
};
export default Signs;
