import style from "./ProductCardDestack.module.css";

function ProductCardDestack({ title, image, discount }) {
  return (
    <>
      <div className={style.productCardDestack}>
        <span className={style.badge}>  
          {discount}
        </span>
        <h3 className={style.productTitle}> {title} </h3>
        <button className={style.button}>Comprar</button>
        <img src={image} alt="" />
      </div>
    </>
  );
}

export default ProductCardDestack;
