import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { styled } from "nativewind";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import SectionTitle from "../components/SectionTItle";
import Layout from "../layout/Layout";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product4 from "../../assets/product4.png";
import product6 from "../../assets/product6.png";
import PagerView from "react-native-pager-view";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductCard from "../components/ui/ProductCard";
import CategoryCard from "../components/CategoryCard";
import { useIsFocused } from "@react-navigation/native";
import GetProductsByFlashSale from "../utils/getProductsByFlashSale";
import GetUserLocation from "../utils/getUserLocation";
import BannerScreenList from "../hooks/bannerScreenList";
import GetWishlistItem from "../utils/getWishlistItem";
export const sectionCategory = [
  {
    id: 1,
    name: "Sofa",
    icon: (
      <MaterialCommunityIcons name="sofa-single" size={35} color="#3C5A5D" />
    ),
  },
  {
    id: 2,
    name: "Chair",
    icon: <FontAwesome5 name="chair" size={35} color="#3C5A5D" />,
  },
  {
    id: 3,
    name: "Lamp",
    icon: <MaterialCommunityIcons name="lamp" size={35} color="#3C5A5D" />,
  },
  {
    id: 4,
    name: "Cupboard",
    icon: (
      <MaterialCommunityIcons
        name="cupboard-outline"
        size={35}
        color="#3C5A5D"
      />
    ),
  },
];

export const productSale = [
  {
    id: 101,
    name: "Circle Chair",
    price: 99.99,
    image: product1,
    rating: 4.3,
    description:
      "This stylish and comfortable sofa is perfect for any living room. It features a sleek design and plush cushioning.",
    category: "Living Room",
  },
  {
    id: 102,
    name: "Table Useful Chair",
    price: 91.0,
    image: product2,
    rating: 4.7,
    description:
      "This sleek and modern chair is perfect for any home office or living room. It features a minimalist design and comfortable seating.",
    category: "Seating",
  },
  {
    id: 103,
    name: "Wood Desk",
    price: 41.0,
    image: product6,
    rating: 4.2,
    description:
      "This functional coffee table features a spacious storage compartment, perfect for keeping your living room organized. It also features a sleek and modern design.",
    category: "Living Room",
  },
  {
    id: 104,
    name: "Blue Line Sofa",
    price: 81.0,
    image: product4,
    rating: 3.1,
    description:
      "This stylish and comfortable sofa is perfect for any living room. It features a sleek design and plush cushioning.",
    category: "Living Room",
  },
];

const HomeScreen = ({ navigation }) => {
  const isFocused = useIsFocused();

  const ButtonWidget = styled(TouchableOpacity);
  const ViewWidget = styled(View);
  const TextWidget = styled(Text);
  const ImageWidget = styled(Image);
  const InputWidget = styled(TextInput);
  const [flashSaleSection, setflashSaleSection] = useState([
    {
      name: "All",
      active: true,
    },
    {
      name: "Newest",
      active: false,
    },
    {
      name: "Popular",
      active: false,
    },
    {
      name: "Featured",
      active: false,
    },
  ]);

  const { getWishlist, wishlist } = GetWishlistItem();
  const { productsFlashSale } = GetProductsByFlashSale();
  const { location } = GetUserLocation();
  const { banner } = BannerScreenList();
  useEffect(() => {
    getWishlist();
  }, [isFocused]);

  return (
    <SafeAreaView>
      <Layout>
        <ViewWidget className="flex flex-row justify-between items-center">
          <ViewWidget className="flex flex-col ">
            <TextWidget
              className="text-[#707F81] font-semibold text-base"
              style={{ fontFamily: "InterMedium" }}
            >
              Location
            </TextWidget>
            <ViewWidget className="flex flex-row items-center">
              <Entypo name="location-pin" size={24} color="#3C5A5D" />
              <TextWidget
                className="text-[#0C1415] font-semibold text-lg"
                style={{ fontFamily: "InterMedium" }}
              >
                {location.county + ", " + location.country}
              </TextWidget>
            </ViewWidget>
          </ViewWidget>
          <ViewWidget className="flex flex-row items-center bg-[#F6F6F6] rounded-full">
            <ButtonWidget className="p-3">
              <ViewWidget className="flex flex-row justify-end ">
                {
                  <ViewWidget className="w-2 h-2 rounded-full absolute z-10 bg-red-500 border-[1px] border-[#f6f6f6] mt-[1px] "></ViewWidget>
                }
                <Fontisto name="bell-alt" size={20} color="black" />
              </ViewWidget>
            </ButtonWidget>
          </ViewWidget>
        </ViewWidget>
        <ViewWidget className="flex flex-row justify-between space-x-3">
          <ViewWidget className="rounded-xl flex-1 flex-row items-center bg-[#F6F6F6] p-2 space-x-3 max-w-full">
            <Feather name="search" size={20} color="#707F81" />
            <InputWidget
              placeholder="Search Workout , Trainer"
              className="text-xl text-[#707F81]"
            />
          </ViewWidget>
          <ButtonWidget
            onPress={() => navigation.navigate("Store Owner")}
            className="bg-[#3C5A5D] flex flex-row items-center p-3 rounded-xl max-w-full"
          >
            <MaterialIcons name="display-settings" size={20} color="white" />
          </ButtonWidget>
        </ViewWidget>
        <PagerView className="h-[180px] w-full relative" pageMargin={30}>
          {banner &&
            banner.map((item, id) => (
              <ViewWidget key={id} className="w-full h-[180px] relative ">
                <ImageWidget
                  source={{ uri: item.image }}
                  className="w-full items-stretch h-full rounded-lg"
                  style={{ resizeMode: "stretch" }}
                />
              </ViewWidget>
            ))}
        </PagerView>

        <ViewWidget className="flex flex-col">
          <SectionTitle title={"Category"} option={"See All"} />
          <ViewWidget className="flex flex-row justify-between">
            {sectionCategory.map((item) => (
              <ViewWidget key={item.id} className="flex flex-col items-center">
                <ButtonWidget className="p-[18px] flex flex-row justify-center aspect-square bg-[#F6F6F6] rounded-full">
                  {item.icon}
                </ButtonWidget>
                <TextWidget
                  className="text-[#0C1415] mt-1 font-bold"
                  style={{ fontFamily: "inter" }}
                >
                  {item.name}
                </TextWidget>
              </ViewWidget>
            ))}
          </ViewWidget>
        </ViewWidget>
        <ViewWidget className="flex flex-col">
          <SectionTitle title={"Flash Sale"} option={"Closing"} />
          <CategoryCard data={flashSaleSection} />
          <ViewWidget className="justify-between pb-20 mt-5 flex flex-row flex-wrap">
            <ProductCard
              data={productsFlashSale}
              navigation={navigation}
              wishlist={wishlist}
              getWishlist={getWishlist}
            />
          </ViewWidget>
        </ViewWidget>
      </Layout>
    </SafeAreaView>
  );
};

export default HomeScreen;
