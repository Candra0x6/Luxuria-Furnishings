import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import { app } from "../config/FIREBASE";
const BannerScreenList = () => {
  const db = getFirestore(app);
  const [banner, setBanner] = useState([]);
  const getBannerImage = async () => {
    try {
      setBanner([]);

      const querySnapshot = await getDocs(collection(db, "Banner"));
      querySnapshot.forEach((doc) => {
        setBanner((prevValue) => [...prevValue, doc.data()]);
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getBannerImage();
  }, []);

  return {
    banner,
  };
};

export default BannerScreenList;
