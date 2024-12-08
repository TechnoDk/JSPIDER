import style from "./Navbar.module.css";
import Search from "./search.jpg";
import Login from "./login.jpg";
import Cart from "./cart.jpg";
import Seller from "./seller.jpg";

const Navbar = () => {
    return (

        <header id={style.header}>
            <div class={style.left}>
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" width="160" height="40" title="Flipkart" />
            </div>
            <div className={style.mid}>
                  <div className={style.search}>
                    <div class={style.bar}>
                        <img src={Search} alt="" />
                    </div>
                   
                    <input type="search" placeholder="Search for Products,Brands and More" />
                
                </div>
            </div>
            <div className={style.right}>
                <img src={Login} alt="loading" className={style.login} ></img>
                <button>Log in</button>
              
                <div className={style.right}>
                    <img src={Cart} alt="loading" className={style.login} />
                    <button>Cart</button>
                </div>

                <div className={style.right}>
                    <img src={Seller} alt="loding" className={style.login} />
                    <button>Become a seller</button>
                </div>
            </div>              
            
            
        </header>




    )
}
export default Navbar;