import style from "./ProductCardDestack.module.css";

function ProductCardDestack({ title, image, discount }) {
  return (
    <>
      <div className={style.productCardDestack}>
<<<<<<< HEAD
        <span className={style.badge}>  
          {discount}
        </span>
        <h3 className={style.productTitle}> {title} </h3>
        <button className={style.button}>Comprar</button>
=======
        <span className={style.badge}>{discount}</span>
        <h3> {title} </h3>
        <button>Comprar</button>
>>>>>>> gideao/main
        <img src={image} alt="" />
      </div>
    </>
  );
}

export default ProductCardDestack;
