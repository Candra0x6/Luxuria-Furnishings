import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBottomBar from "../components/TabBottom";
import { TabBottom } from "../containers/init";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 80,
          position: "absolute",
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 200,
          backgroundColor: "#0C1415",
        },
      }}
    >
      {TabBottom.map((item, id) => (
        <Tab.Screen
          key={id}
          name={item.route}
          component={item.component}
          options={{
            headerShown: item.headerShown,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <item.icon name={item.name_nonActive} color={color} size={size} />
            ),
            tabBarButton: (props) => <TabBottomBar {...props} item={item} />,
            headerTransparent: false,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "InterSemiBold",
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
