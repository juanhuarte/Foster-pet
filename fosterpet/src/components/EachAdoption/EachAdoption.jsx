import { useDispatch, useSelector } from "react-redux";
import { useAnimalAdoption } from "../CustomHooks/useAnimalAdoption";
import {
  updateAdoption,
  getAdoptions,
  answerRequest,
  getAdoptionRequest,
  getAnimals,
  getUserProfile,
} from "../../redux/action/index";
import styles from "./EachAdoption.module.css";
import { useState } from "react";
import UserProfile from "../UserProfile/UserProfile";

const EachAdoption = ({ data }) => {
  const { date, status, rescuer, animal, id, user, task } = data;
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile);
  const [showProfile, setShowProfile] = useState(false);
  console.log(userProfile);
  const dataAnimal = useAnimalAdoption(animal);

  const handleClick = (e) => {
    if (task === "history" && status === "pending")
      dispatch(updateAdoption({ id, status: "cancel" }));
    if (task === "history" && status === "cancel")
      dispatch(updateAdoption({ id, status: "pending" }));
    if (task === "request") {
      dispatch(answerRequest({ id, status: e.target.name }));
      dispatch(getAdoptionRequest());
      dispatch(getAnimals());
    }
    dispatch(getAdoptions());
  };

  const getProfile = () => {
    dispatch(getUserProfile(user));
    setShowProfile(true);
  };

  return (
    <div className={styles.container}>
      {showProfile ? (
        <UserProfile userData={userProfile} setShowProfile={setShowProfile} />
      ) : (
        <div className={styles.dataContainer}>
          <span className={styles.text}>{dataAnimal?.temporaryName}</span>
          <img className={styles.img} src={dataAnimal?.image} alt="AnimalImg" />
          <span className={styles.text}>{date}</span>
          <span className={styles.text}>Status: {status}</span>

          {task === "history" && (status === "pending" || status === "cancel") && (
            <button className={styles.btn} onClick={handleClick}>
              {status === "pending" ? "Cancel" : "Adopt"}
            </button>
          )}
          {task === "request" && (
            <div className={styles.buttonsContainer}>
              <button className={styles.btn} onClick={getProfile}>
                User Profile
              </button>
              <div className={styles.btnContainer}>
                <button
                  name="approved"
                  className={styles.btn}
                  onClick={handleClick}
                >
                  Approve
                </button>
                <button
                  name="cancel"
                  className={styles.btn}
                  onClick={handleClick}
                >
                  Decline
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default EachAdoption;
