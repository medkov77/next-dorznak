import Slider from "@/componets/slider/slider";
import styles from "./homePage.module.css";
const HomePage = () => {
  return (
    <div>
      <h1 className={styles.title}>
        ООО "Дорзнак" <br /> Производство и продажа средств обеспечения
        безопасности дорожного движения
      </h1>
      <Slider />
    </div>
  );
};
export default HomePage;
