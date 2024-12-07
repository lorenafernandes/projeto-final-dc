import MainBanner from "../../components/main-banner/MainBanner";
import style from "./Home.module.css";
import ProductDestack from "./products-destack/ProductDestack";

function Home() {
  return (
    <>
      <MainBanner />
      <h3>Coleções em Destaque</h3>
      <div className={style.content}>
        <ProductDestack />
      </div>
    </>
  );
}

export default Home;
