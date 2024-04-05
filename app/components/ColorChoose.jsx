import { View, Text } from "react-native";
import React from "react";
import { styled } from "nativewind";

const ColorChoose = ({ color }) => {
  const ViewWidget = styled(View);
  return (
    <ViewWidget className="flex flex-row space-x-3 mt-2 ">
      {color &&
        color.map((value, id) => (
          <ViewWidget
            key={id}
            className={`h-7 w-7 border-2 rounded-full flex flex-row items-center justify-center bg-[#${
              value && value
            }]`}
          >
            <ViewWidget className="bg-white p-[6px] rounded-full"></ViewWidget>
          </ViewWidget>
        ))}
    </ViewWidget>
  );
};

export default ColorChoose;
