import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styled } from "nativewind";
import LikeButton from "./LikeButton";
import Rating from "./Rating";

import truncateText from "../../hooks/truncateText";
const { truncateString } = truncateText();
const ProductCard = ({ data, navigation, wishlist, getWishlist }) => {
  return (
    <View className="justify-between flex flex-row flex-wrap">
      {data &&
        data.map((product, id) => (
          <View
            key={id}
            className="flex flex-col max-w-[48%] aspect-square w-[48%] mb-2 rounded-lg"
          >
            <View className="z-10 right-0 absolute flex flex-row items-start justify-end m-2">
              <LikeButton
                productId={product.product_id}
                wishlist={wishlist}
                getWishlist={getWishlist}
              />
            </View>
            <TouchableOpacity
              key={id}
              onPress={() =>
                navigation.navigate("Product Details", {
                  product_id: product.product_id,
                })
              }
            >
              <View className="aspect-square bg-[#F6F6F6] rounded-lg flex flex-row items-center justify-center">
                <Image
                  source={{ uri: `${product.image.uri}` }}
                  className=" aspect-square w-[80%]"
                />
              </View>
              <View className="flex flex-col mt-2 w-full">
                <View className="flex flex-row justify-between ">
                  <Text
                    className="text-[#0C1415] max-w-[60%] text-lg "
                    style={{ fontFamily: "InterMedium" }}
                  >
                    {truncateString(product.name, 23)}
                  </Text>
                  <Rating value={product.rating} />
                </View>
                <View>
                  <Text
                    className="text-[#0C1415] font-medium text-lg"
                    style={{ fontFamily: "InterMedium" }}
                  >
                    {"$" + product.price}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
    </View>
  );
};

export default ProductCard;
