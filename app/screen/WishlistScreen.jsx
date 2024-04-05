import { View } from "react-native";
import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import CategoryCard from "../components/CategoryCard";

import ProductCard from "../components/ui/ProductCard";
import { useIsFocused } from "@react-navigation/native";
import GetWishlistItem from "../utils/getWishlistItem";
import GetProductByWishlist from "../utils/getProductByWishlist";
import GetProductCategory from "../utils/getProductCategory";
const WishlistScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const { getWishlistProduct, wishlistProduct } = GetProductByWishlist();
  const { category, getCategory } = GetProductCategory();
  const { getWishlist, wishlist } = GetWishlistItem();
  useEffect(() => {
    getCategory();
  }, []);
  useEffect(() => {
    getWishlistProduct();
    getWishlist();
  }, [isFocused]);

  return (
    <Layout>
      <CategoryCard data={category} />
      <View className="">
        <ProductCard
          data={wishlistProduct}
          navigation={navigation}
          wishlist={wishlist}
          getWishlist={getWishlist}
        />
      </View>
    </Layout>
  );
};

export default WishlistScreen;
