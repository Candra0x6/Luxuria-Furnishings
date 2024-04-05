import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screen/HomeScreen";
import WishlistScreen from "../screen/WishlistScreen";
import StoreOwner from "../screen/StoreOwner";
import ProfileScreen from "../screen/ProfileScreen";
import { FontAwesome } from "@expo/vector-icons";

export const TabBottom = [
  {
    route: "Home",
    component: HomeScreen,
    icon: Feather,
    name_nonActive: "home",
    headerShown: false,
  },
  {
    route: "Wishlist",
    component: WishlistScreen,
    icon: AntDesign,
    name_nonActive: "hearto",
    name_Active: "hearth",
    headerShown: true,
  },
  {
    route: "Store Owner",
    component: StoreOwner,
    icon: Ionicons,
    name_nonActive: "bag-handle-outline",
    name_Active: "bag-handle",
    headerShown: false,
  },
  {
    route: "Profile",
    component: ProfileScreen,
    icon: FontAwesome,
    name_nonActive: "user-circle-o",
    name_Active: "bag-handle",
    headerShown: true,
  },
];

export const ProfileSection = [
  {
    name: "Your Profile",
    icon: AntDesign,
    icon_name: "user",
  },
  {
    name: "Manage Address",
    icon: AntDesign,
    icon_name: "enviromento",
  },
  {
    name: "Payment Method",
    icon: AntDesign,
    icon_name: "wallet",
  },
  {
    name: "My Orders",
    icon: AntDesign,
    icon_name: "profile",
  },
  {
    name: "My Coupons",
    icon: AntDesign,
    icon_name: "tago",
  },
  {
    name: "Settings",
    icon: AntDesign,
    icon_name: "setting",
  },
  {
    name: "Help Center",
    icon: AntDesign,
    icon_name: "exclamationcircleo",
  },
  {
    name: "Privacy Policy",
    icon: AntDesign,
    icon_name: "lock",
  },
];
