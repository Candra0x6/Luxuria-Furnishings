import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { FontAwesome6 } from "@expo/vector-icons";
const AddCartButton = ({ price }) => {
  const ButtonWidget = styled(TouchableOpacity);
  const ViewWidget = styled(View);
  const TextWidget = styled(Text);

  return (
    <ViewWidget className=" p-5 flex-row justify-between w-full flex left-0 right-0 bottom-0 border-2 border-[#dddddd] bg-white rounded-t-xl">
      <ViewWidget className="flex flex-col">
        <TextWidget
          style={{ fontFamily: "InterMedium" }}
          className="text-lg text-[#707F81]"
        >
          Total Price
        </TextWidget>
        <TextWidget style={{ fontFamily: "InterSemiBold" }} className="text-lg">
          {"$" + price}
        </TextWidget>
      </ViewWidget>
      <ButtonWidget className="flex flex-row bg-[#3C5A5D] px-14 py-4 items-center justify-center rounded-full">
        <FontAwesome6 name="bag-shopping" size={24} color="white" />
        <TextWidget
          style={{ fontFamily: "InterMedium" }}
          className="text-lg text-white ml-2"
        >
          Add to Cart
        </TextWidget>
      </ButtonWidget>
    </ViewWidget>
  );
};

export default AddCartButton;
