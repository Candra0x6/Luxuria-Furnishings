import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { styled } from "nativewind";
import { TouchableOpacity } from "react-native-gesture-handler";

const BackButton = ({ navigation }) => {
  const WidgetButton = styled(TouchableOpacity);
  return (
    <WidgetButton
      onPress={() => navigation.goBack()}
      className="ml-3 border-[2px] border-[#F6F6F6] rounded-full p-1 bg-white"
    >
      <MaterialIcons name="keyboard-backspace" size={28} color="black" />
    </WidgetButton>
  );
};

export default BackButton;
