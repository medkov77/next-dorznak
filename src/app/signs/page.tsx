"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Isigns } from "@/intefacies/Isigns";
import SignKart from "./signKart";
const Signs = () => {
    const [signs, setSigns] = useState<Isigns[]>([]);
    useEffect(() => {
        const fetchSigns = async () => {
            const response = await fetch(`/api/signs`);
            const data: Isigns[] = await response.json();
            setSigns(data);
        };
        fetchSigns();
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className={styles.title}>Знаки дорожные ГОСТ 52290-2004</h1>
            <div className={styles.wrapper}>
                {signs?.map(sign => {
                    return <SignKart key={sign._id} {...sign} />;
                })}
            </div>
        </div>
    );
};
export default Signs;
