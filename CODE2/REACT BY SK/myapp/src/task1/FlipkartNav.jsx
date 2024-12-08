import style from "./flipkartNav.module.css";
import logo from "./images/image.png";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
const FlipkartNav= () => {
 

    return (
        <nav>
            <aside className={style.logo}>
                <img src={logo} />
            </aside>
            <section className={style.searchContainer}><CiSearch />searchContainer</section>
            <ul>

                <li>
                    <FaRegUserCircle />login
                </li>
            <li><BsCart3 />cart</li>
             <li>become a seller</li>
            <li>...</li>
            </ul>
         </nav>
    )
}
export default FlipkartNav;
