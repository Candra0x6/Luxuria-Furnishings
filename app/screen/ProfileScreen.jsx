import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  SectionList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Layout from "../layout/Layout";
import img from "../../assets/aa.png";
import { ProfileSection } from "../containers/init";
import { AntDesign } from "@expo/vector-icons";
const ProfileScreen = () => {
  return (
    <ScrollView>
      <Layout>
        <View className="flex flex-col items-center w-full space-y-4">
          <View className="aspect-square w-[110px] bg-transparent flex flex-row justify-end items-end">
            <Image
              source={img}
              className="w-full h-full bg-fill object-contain  rounded-full "
            />
            <TouchableOpacity className="z-10 absolute bg-[#3C5A5D] rounded-full p-2 border-[3px] border-white -bottom-1">
              <AntDesign name="edit" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <Text
            className="text-xl text-[#0C1415]"
            style={{ fontFamily: "InterMedium" }}
          >
            A$lbedo
          </Text>
        </View>
        <View className="flex flex-col ">
          {ProfileSection.map((item, id) => (
            <View
              key={id}
              className={`flex flex-row w-full items-center justify-between py-3 ${
                id !== ProfileSection.length - 1 &&
                "border-b-[1px] border-[#eae8e8]"
              }`}
            >
              <View className="flex flex-row items-center flex-1 space-x-4">
                <item.icon
                  name={`${item.icon_name}`}
                  size={25}
                  color="#3C5A5D"
                />
                <Text
                  className="w-full text-lg"
                  style={{ fontFamily: "InterMedium" }}
                >
                  {item.name}
                </Text>
              </View>
              <View>
                <AntDesign
                  name="right"
                  size={20}
                  color="#3C5A5D"
                  className=""
                />
              </View>
            </View>
          ))}
        </View>
      </Layout>
    </ScrollView>
  );
};

export default ProfileScreen;
