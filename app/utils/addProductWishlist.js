import {
  addDoc,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { app } from "../config/FIREBASE";
const AddProductWishlist = () => {
  const db = getFirestore(app);

  const addProductToWishlist = async (productId) => {
    try {
      // Check for existing document with product_id
      const wishlistRef = collection(db, "Wishlist");
      const wishlistQuery = query(
        wishlistRef,
        where("product_id", "==", productId)
      );
      const wishlistSnapshot = await getDocs(wishlistQuery);

      if (wishlistSnapshot.empty) {
        // Create new document if not found
        const newWishlistRef = await addDoc(wishlistRef, {
          product_id: productId,
        });

        await updateDoc(newWishlistRef, {
          wishlist_id: newWishlistRef.id,
        });
        alert("Wishlist updated");
      }
    } catch (err) {
      console.error("Error adding/updating wishlist:", err);
      // Handle error appropriately (e.g., display user-friendly message)
    }
  };

  return {
    addProductToWishlist,
  };
};

export default AddProductWishlist;
