import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { app } from "../config/FIREBASE";

const GetWishlistItem = () => {
  const [wishlist, setWishlist] = useState([]);
  const db = getFirestore(app);
  const getWishlist = async () => {
    try {
      setWishlist([]);
      const querySnapshot = await getDocs(collection(db, "Wishlist"));
      querySnapshot.forEach((doc) => {
        setWishlist((prevValue) => [...prevValue, doc.data()]);
      });
    } catch (error) {
      throw error;
    }
  };

  return {
    getWishlist,
    wishlist,
  };
};

export default GetWishlistItem;
