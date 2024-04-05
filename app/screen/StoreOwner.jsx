import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import noImg from "../../assets/insert-image.png";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../config/FIREBASE";
const StoreOwner = () => {
  const db = getFirestore(app);
  const storage = getStorage();
  const [isLoading, setIsLoading] = useState(false);
  const [fields, setFields] = useState({
    product_id: "",
    name: "",
    category: "",
    description: "",
    price: "",
    rating: "",
    image: {
      width: 0,
      uri: "",
      height: 0,
    },
  });
  const [listCategory, setListCategory] = useState([]);
  const ErrorMessages = {
    nama: "Name is required",
  };

  const handleChange = (value, fieldName) => {
    fieldName === "image.uri"
      ? setFields((prevFields) => ({
          ...prevFields,
          image: { ...prevFields.image, uri: value },
        }))
      : setFields((prevFields) => ({ ...prevFields, [fieldName]: value }));
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (!result.canceled) {
      handleChange(result.assets[0], "image");
    }
  };

  const getCategory = async () => {
    setListCategory([]);
    const querySnapshot = await getDocs(collection(db, "Category"));
    querySnapshot.forEach((doc) => {
      setListCategory((list) => [...list, doc.data()]);
    });
  };
  const submitMethod = async () => {
    if (fields.name === "") {
      alert("Name is required");
      return;
    }

    try {
      // Mendapatkan blob dari gambar yang akan diunggah
      setIsLoading(true);
      const resp = await fetch(fields.image.uri);
      const blob = await resp.blob();

      // Mengunggah blob ke Firebase Storage
      const storageRef = ref(storage, "productImage/" + Date.now() + ".jpg");
      const snapshot = await uploadBytes(storageRef, blob);
      const Imgurl = await getDownloadURL(storageRef);
      handleChange(Imgurl, "image.uri");
      const docRef = await addDoc(collection(db, "Product"), fields);
      await updateDoc(docRef, {
        product_id: docRef.id,
      });
      alert("Submited");
      docRef.id ? console.log(docRef.id) : alert("Product");
    } catch (error) {
      // Tangani kesalahan saat mengunggah gambar
      console.log(error);
      alert("Failed to upload image. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  console.log(fields);
  useEffect(() => {
    getCategory();
  }, []);
  console.log(isLoading);
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="mt-20">
          <View className=" flex flex-col space-y-2">
            <TouchableOpacity
              className="ml-10 aspect-square w-80 max-w-80"
              onPress={pickImage}
            >
              <Image
                source={
                  fields.image.uri !== "" ? { uri: fields.image.uri } : noImg
                }
                className="w-full h-full rounded-xl"
              />
            </TouchableOpacity>
            <Picker
              className="mx-"
              selectedValue={fields.category}
              onValueChange={(e) => {
                handleChange(e, "category");
              }}
            >
              {listCategory &&
                listCategory.map((item, id) => (
                  <Picker.Item key={id} label={item.name} value={item.name} />
                ))}
            </Picker>
            <Text className="text-lg ml-5 font-bold">Set Flash Sale</Text>
            <Picker
              selectedValue={fields.FlashSaleProduct}
              onValueChange={(e) => {
                handleChange(e, "FlashSaleProduct");
              }}
            >
              <Picker.Item label="Yes" value={true} />
              <Picker.Item label="No" value={false} />
            </Picker>
            <TextInput
              aria-label="name"
              onChangeText={(value) => {
                handleChange(value, "name");
              }}
              placeholder="name"
              returnKeyType="none"
              className="text-xl text-[#707F81] border-2 w-[80%] mx-auto"
            />

            <TextInput
              aria-label="description"
              onChangeText={(value) => handleChange(value, "description")}
              placeholder="description"
              returnKeyType="none"
              className="text-xl text-[#707F81] border-2 w-[80%] mx-auto"
            />
            <TextInput
              aria-label="price"
              onChangeText={(value) => handleChange(value, "price")}
              placeholder="price"
              keyboardType="number-pad"
              className="text-xl text-[#707F81] border-2 w-[80%] mx-auto"
            />
            <TextInput
              aria-label="rating"
              onChangeText={(value) => handleChange(value, "rating")}
              placeholder="rating"
              keyboardType="number-pad"
              className="text-xl text-[#707F81] border-2 w-[80%] mx-auto"
            />

            <TouchableOpacity
              onPress={submitMethod}
              className={`mb-52  flex flex-row items-center mx-auto  rounded-full ${
                isLoading ? "bg-yellow-300 opacity-60" : "bg-yellow-300 "
              }`}
              disabled={isLoading}
            >
              <Text className="text-xl text-black text-center rounded-full py-4 w-[80%]">
                {isLoading ? "...Loading" : "Add Store"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StoreOwner;
