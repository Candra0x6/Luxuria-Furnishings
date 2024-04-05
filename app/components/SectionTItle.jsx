import { styled } from "nativewind";
import { View, Text } from "react-native";

const SectionTitle = ({ title, option }) => {
  const ViewWidget = styled(View);
  const TextWidget = styled(Text);
  return (
    <ViewWidget className="w-full justify-between flex flex-row items-center mb-2">
      <TextWidget
        className="text-[20px] font-bold text-[#0C1415]"
        style={{ fontFamily: "inter" }}
      >
        {title}
      </TextWidget>
      <TextWidget
        className="text-[17px] font-bold text-[#707F81]"
        style={{ fontFamily: "inter" }}
      >
        {option}
      </TextWidget>
    </ViewWidget>
  );
};

export default SectionTitle;
