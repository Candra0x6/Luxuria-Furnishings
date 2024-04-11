import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import AddProductToCart from "../utils/addProductToCart";
const AddCartButton = ({ price, productID }) => {
  const { postProductToCart, isLoading } = AddProductToCart();

  return (
    <View className=" p-5 flex-row justify-between w-full flex left-0 right-0 bottom-0 border-2 border-[#dddddd] bg-white rounded-t-xl">
      <View className="flex flex-col">
        <Text
          style={{ fontFamily: "InterMedium" }}
          className="text-lg text-[#707F81]"
        >
          Total Price
        </Text>
        <Text style={{ fontFamily: "InterSemiBold" }} className="text-lg">
          {"$" + price}
        </Text>
      </View>
      <TouchableOpacity
        disabled={isLoading}
        onPress={() => postProductToCart(productID)}
        className={`flex flex-row px-14 py-4 items-center justify-center rounded-full ${
          isLoading ? "bg-[#3c5a5d8b]" : "bg-[#3C5A5D]"
        }`}
      >
        <FontAwesome6 name="bag-shopping" size={24} color="white" />
        <Text
          style={{ fontFamily: "InterMedium" }}
          className="text-lg text-white ml-2"
        >
          {isLoading ? "Loading..." : " Add to Cart"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCartButton;
