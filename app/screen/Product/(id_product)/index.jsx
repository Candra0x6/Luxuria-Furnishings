import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Layout from "../../../layout/Layout";

import Rating from "../../../components/ui/Rating";
import Cart from "../../../components/Cart";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import Animated from "react-native-reanimated";
import { app } from "../../../config/FIREBASE";
import ColorChoose from "../../../components/ColorChoose";
const ProductDetail = ({ route }) => {
  const [productDetail, setProductDetail] = useState();
  const { product_id } = route.params;
  const db = getFirestore(app);

  const getProductByID = async (productID) => {
    try {
      const productDocRef = doc(db, "Product", productID);
      const productDocSnapshot = await getDoc(productDocRef);

      if (productDocSnapshot.exists()) {
        return productDocSnapshot.data();
      } else {
        console.log("Product not found");
        return null;
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      return null;
    }
  };
  const productID = product_id;

  useEffect(() => {
    getProductByID(productID)
      .then((productData) => {
        if (productData) {
          setProductDetail(productData);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <View className="flex flex-col">
      <Animated.ScrollView>
        <View className="flex flex-col max-h-[500px] h-[440px] bg-[#F6F6F6] items-center justify-start">
          <Image
            source={{
              uri: `${productDetail && productDetail.image.uri}`,
            }}
            className="w-[80%] mb-5 aspect-square"
          />
          <View className="max-w-[85%] rounded-lg bg-white flex flex-row p-[6px] space-x-[6px]">
            <View className="flex flex-col items-center justify-center max-w-[60px] max-h-[60px] bg-[#F6F6F6] rounded-lg ">
              <Image
                source={{
                  uri: `${productDetail && productDetail.image.uri}`,
                }}
                className="w-full h-full aspect-square"
              />
            </View>
          </View>
        </View>
        <Layout>
          <View className="w-full flex flex-col bg-white max-w-screen-2xl pt-5">
            <View className="flex flex-col w-full space-y-3 border-b-[2px] border-[#F6F6F6] pb-3">
              <View className="flex flex-row w-full justify-between items-center">
                <Text
                  style={{ fontFamily: "inter" }}
                  className="text-[#707F81] text-lg"
                >
                  {productDetail && productDetail.category}
                </Text>
                <Rating value={productDetail && productDetail.rating} />
              </View>
              <Text style={{ fontFamily: "InterMedium" }} className=" text-2xl">
                {productDetail && productDetail.name}
              </Text>
              <View className="flex flex-col space-y-2">
                <Text
                  style={{ fontFamily: "InterMedium" }}
                  className=" text-xl"
                >
                  Description
                </Text>
                <Text
                  style={{ fontFamily: "inter" }}
                  className=" text-lg leading-5 text-[#707F81] "
                >
                  {productDetail && productDetail.description}
                </Text>
              </View>
            </View>
            <View className="flex flex-col">
              <Text style={{ fontFamily: "InterMedium" }} className=" text-lg">
                Select Color :{" "}
                <Text
                  style={{ fontFamily: "InterMedium" }}
                  className="text-[#707F81]"
                >
                  Pink
                </Text>
              </Text>

              <ColorChoose color={productDetail && productDetail.color} />
            </View>
          </View>
        </Layout>
      </Animated.ScrollView>

      <Animated.View className="absolute bottom-0 left-0 right-0 h-[100px]">
        <Cart price={productDetail && productDetail.price} st />
      </Animated.View>
    </View>
  );
};

export default ProductDetail;
