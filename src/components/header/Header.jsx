import Logo from "../../assets/img/logo/logo.png";
import style from "./header.module.css";
import SearchIcon from "../icons/SearchIcon";
import Cart from "../icons/Cart";

function Header() {
  return (
    <>
      <header>
        <div className={style.logo}>
          <img className={style.logoImg} src={Logo} alt="" />
        </div>

        <div className={style.input}>
            <input
              className={style.inputSearch}
              type="text"
              name="search"
              id="search"
              placeholder="Pesquisar produto..."
              />
            <i className={style.iconSearch}>
              <SearchIcon/>
            </i>
        </div>

        <div className={style.storeLinks}>
          <a className="sign-up" href="">
            Cadastre-se
          </a>
          <a className={style.btnLogin} href="">
            Entrar
          </a>
          <div>
              <Cart/>
            <spam>2</spam>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
