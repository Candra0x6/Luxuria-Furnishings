import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "../config/FIREBASE";
import { useEffect, useState } from "react";

const GetProductsByFlashSale = () => {
  const db = getFirestore(app);

  const [productsFlashSale, setProductsFlashSale] = useState([]);
  const getProductFlashSale = async () => {
    try {
      const productRef = collection(db, "Product");
      const q = query(productRef, where("FlashSaleProduct", "==", true));

      const querySnapshot = await getDocs(q);
      const productList = [];
      querySnapshot.forEach((doc) => {
        productList.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setProductsFlashSale(productList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProductFlashSale();
  }, []);
  return {
    productsFlashSale,
  };
};

export default GetProductsByFlashSale;
