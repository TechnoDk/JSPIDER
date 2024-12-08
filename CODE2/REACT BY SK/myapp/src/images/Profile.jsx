import style from "./profile.module.css";
import PIC from "./propic.jpg";
const Profile = () => {
    return (
        <section id={style.card}> 
            <img src={PIC} id={style.img} />
            <h2>Hello wolrld</h2>
        </section>
        
    )
}
export default Profile;
    