import styles from "./sidebar.module.css";
import sign from "../../../public/img/sidebar/signs.png";
import base from "../../../public/img/sidebar/DSCN2360.jpg";
import led from "../../../public/img/sidebar/led.png";
import idn from "../../../public/img/sidebar/idn.jpg";
import parking from "../../../public/img/sidebar/parking.jpg";
import light from "../../../public/img/sidebar/flashlight.jpg";

import Image from "next/image";
import Link from "next/link";
const Sidebar = () => {
  const links: { name: string; link: string; image: any }[] = [
    { name: "Знаки дорожные", link: "/signs", image: sign },
    { name: "Основы дорожных знаков", link: "/base", image: base },
    { name: "Светодиодные знаки", link: "/led", image: led },
    { name: "Лежачие поличейские", link: "/idn", image: idn },
    { name: "Оборудование для парковок", link: "/parking", image: parking },
    { name: "Фонари сигнальные", link: "/light", image: light },
  ];
  return (
    <div className={styles.sidebar}>
      {links.map((link) => (
        <Link href={link.link} className={styles.link} key={link.link}>
          <Image
            src={link.image}
            alt={link.name}
            width={50}
            //height={75}
            className={styles.logo}
          />
          <div className={styles.item}>{link.name}</div>
        </Link>
      ))}
    </div>
  );
};
export default Sidebar;
