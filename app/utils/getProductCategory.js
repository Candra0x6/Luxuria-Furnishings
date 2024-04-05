import { useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../config/FIREBASE";
const GetProductCategory = () => {
  const db = getFirestore(app);

  const [category, setCategory] = useState([]);
  const getCategory = async () => {
    try {
      setCategory([]);

      const querySnapshot = await getDocs(collection(db, "Category"));
      querySnapshot.forEach((doc) => {
        setCategory((prevValue) => [...prevValue, doc.data()]);
      });
    } catch (err) {
      console.log(err);
    }
  };
  return {
    getCategory,
    category,
  };
};

export default GetProductCategory;
