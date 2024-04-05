import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";

const CategoryCard = ({ data }) => {
  const [isPress, setIsPress] = useState("All");
  return (
    <View className="flex flex-row">
      <ScrollView horizontal={true} className="space-x-2">
        {data.map((item, id) => (
          <TouchableOpacity
            onPress={() => setIsPress(item.name)}
            key={id}
            className={`px-4 py-2 rounded-full ${
              isPress === item.name ? "bg-[#3C5A5D]" : "bg-[#F6F6F6]"
            }`}
          >
            <Text
              style={{ fontFamily: "inter" }}
              className={`  font-bold text-center ${
                isPress === item.name ? "text-white" : "text-[#0C1415]"
              }`}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryCard;
