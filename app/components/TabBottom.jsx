import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const TabBottomBar = (props) => {
  const { item, onPress, accessibilityState } = props;
  const clicked = accessibilityState.selected;
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 justify-center items-center"
    >
      <View
        className={`${clicked ? "bg-white" : ""} p-4
       rounded-full`}
      >
        <item.icon
          name={item.name_nonActive}
          size={25}
          color={`${clicked ? "#3C5A5D" : "#707F81"}`}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TabBottomBar;
