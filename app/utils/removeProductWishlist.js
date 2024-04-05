import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "../config/FIREBASE";

const RemoveProductWishlist = () => {
  const db = getFirestore(app);

  const removeProductFromWishlist = async (productId) => {
    try {
      const wishlistRef = collection(db, "Wishlist");
      const wishlistQuery = query(
        wishlistRef,
        where("product_id", "==", productId)
      );
      const wishlistSnapshot = await getDocs(wishlistQuery);

      let wishlistSelectedId = "";
      wishlistSnapshot.forEach((doc) => {
        wishlistSelectedId = doc.data().wishlist_id;
      });
      console.log(wishlistSelectedId);
      if (wishlistSelectedId !== "") {
        await deleteDoc(doc(wishlistRef, wishlistSelectedId));
        alert("Wishlist removed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    removeProductFromWishlist,
  };
};

export default RemoveProductWishlist;
