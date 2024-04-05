import { useState } from "react";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "../config/FIREBASE";
const GetProductByWishlist = () => {
  const db = getFirestore(app);
  const [wishlistProduct, setWishlistProduct] = useState([]);
  const getWishlistProduct = async () => {
    try {
      const getWishlist = await getDocs(collection(db, "Wishlist"));
      const wishlistProductId = getWishlist.docs.map(
        (doc) => doc.data().product_id
      );
      const productRef = collection(db, "Product");
      const wishlistProductQuery = query(
        productRef,
        where("product_id", "in", wishlistProductId)
      );

      const querySnapshot = await getDocs(wishlistProductQuery);
      if (querySnapshot.empty) {
        alert("Wishlist product empty");
      } else {
        setWishlistProduct([]);
        querySnapshot.forEach((doc) => {
          setWishlistProduct((prev) => [...prev, doc.data()]);
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return {
    getWishlistProduct,
    wishlistProduct,
  };
};

export default GetProductByWishlist;
