import { createStackNavigator } from "@react-navigation/stack";
import ProductDetail from "./Product/(id_product)";
import BackButton from "../components/ui/BackButton";
import TabNavigation from "./TabNavigation";
import StoreOwner from "./StoreOwner";

const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="TabNavigation"
        component={TabNavigation}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerShown: true,
          headerTransparent: false,
          headerTitleAlign: "center",
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitleStyle: {
            fontFamily: "InterSemiBold",
          },
          headerStyle: {
            backgroundColor: "#F6F6F6",
          },
        })}
        name="Product Details"
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
