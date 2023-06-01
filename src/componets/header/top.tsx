import logo from "../../../public/img/main/dorlogo.png";
import Image from "next/image";
import styles from "./top.module.css";
import Link from "next/link";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { FaCartArrowDown, FaFileDownload } from "react-icons/fa";
import { phone, phoneNumber, mail } from "../../../public/contakts/contakts";
import Social from "./social";
const Top = () => {
  return (
    <div className={styles.top}>
      <div className="container mx-auto">
        <div className={styles.row}>
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={300}
              height={75}
              className={styles.logo}
            />
          </Link>
          <div className={styles.contakts}>
            <Link className={styles.item} href={`tel: ${phoneNumber}`}>
              <AiFillPhone
                style={{
                  width: "24px",
                  height: "24px",
                  color: "inherit",
                }}
              />
              <span className={styles.hide}>{phone}</span>
            </Link>
            <Link className={styles.item} href={`mailto: ${mail}`}>
              <AiFillMail
                style={{
                  width: "24px",
                  height: "24px",
                  color: "inherit",
                }}
              />
              <span className={styles.hide}>{mail}</span>
            </Link>
          </div>
          <Social />
          <Link className={`${styles.item} ${styles.download}`} href="/">
            <FaFileDownload
              style={{
                width: "30px",
                height: "30px",
                color: "inherit",
              }}
            />
            <span>Скачать прайслист</span>
          </Link>
          <Link href="./cart" className={styles.item}>
            <FaCartArrowDown
              style={{
                width: "30px",
                height: "30px",
                color: "inherit",
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Top;
