import { ScrollView, View } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";

const Layout = ({ children }) => {
  const ViewWidget = styled(View);
  return (
    <ScrollView>
      <ViewWidget className="w-full px-5 flex flex-col space-y-5 flex-1 h-full bg-white max-w-screen-2xl min-h-screen pt-2">
        {children}
      </ViewWidget>
    </ScrollView>
  );
};

export default Layout;
