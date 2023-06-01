import Link from "next/link";
import styles from "./social.module.css";
import { FaViber, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { phoneNumber } from "../../../public/contakts/contakts";
const Social = () => {
  return (
    <div className={styles.social}>
      <Link href={`viber://add?number=${phoneNumber}`} className={styles.item}>
        <FaViber
          style={{
            width: "30px",
            height: "30px",
            color: "inherit",
          }}
        />
      </Link>
      <Link href={`https://wa.me/${phoneNumber}`} className={styles.item}>
        <FaWhatsapp
          style={{
            width: "30px",
            height: "30px",
            color: "inherit",
          }}
        />
      </Link>
      <Link href={`tg://resolve?domain=<@medkov77>`} className={styles.item}>
        <FaTelegram
          style={{
            width: "30px",
            height: "30px",
            color: "inherit",
          }}
        />
      </Link>
    </div>
  );
};
export default Social;
