import { View, Text } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { FontAwesome } from "@expo/vector-icons";

const Rating = ({ value }) => {
  const ViewWidget = styled(View);
  const TextWidget = styled(Text);
  return (
    <ViewWidget className="flex flex-row items-center space-x-1 ">
      <FontAwesome name="star" size={13} color="orange" />
      <TextWidget
        className="text-[#707F81] font-normal text-[16px]"
        style={{ fontFamily: "inter" }}
      >
        {value}
      </TextWidget>
    </ViewWidget>
  );
};

export default Rating;
