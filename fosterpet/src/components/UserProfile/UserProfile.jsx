// import styles from "./UserProfile.module.css";
import styles from "../EachAdoption/EachAdoption.module.css";
import { IoCloseCircleOutline } from "react-icons/io5";
const UserProfile = ({ userData, setShowProfile }) => {
  const { name, lastname, mail, profileImage, location } = userData;
  return (
    <div className={styles.dataContainer}>
      <button onClick={() => setShowProfile(false)} className={styles.btnClose}>
        <IoCloseCircleOutline />
      </button>
      <img className={styles.img} src={profileImage} alt="userImg" />
      <span className={styles.text}>Name: {`${name} ${lastname}`}</span>
      <span className={styles.text}>Mail: {mail}</span>
    </div>
  );
};

export default UserProfile;
