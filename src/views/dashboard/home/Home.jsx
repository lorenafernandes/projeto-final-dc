import DollarIcon from "../../../assets/img/icons/dollar-symbol.png";
import "./Home.css";

function Home() {
  const addProduct = () => {
    const formProduct = document.forms[0];
    const formData = new FormData(formProduct);
    const product = Object.fromEntries(formData);
    createProduct(product);
  };

  const createProduct = (product) => {
    fetch("http://localhost:3000/product", {
      method: "post",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      <div className="highlights gap-3 d-flex justify-content-between">
        <div className="card w-100">
          <div className="card-body d-flex">
            <img className="icon-dollar" src={DollarIcon} alt="" />
            <div className="info">
              <p className="fw-light">Total de vendas</p>
              <p className="fs-2">R$ 2.549,78</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
