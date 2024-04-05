import React, { useEffect, useState } from "react";
import { styled } from "nativewind";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import AddProductWishlist from "../../utils/addProductWishlist";
import RemoveProductWishlist from "../../utils/removeProductWishlist";

const LikeButton = ({ productId, wishlist, getWishlist }) => {
  const { addProductToWishlist } = AddProductWishlist();
  const { removeProductFromWishlist } = RemoveProductWishlist();
  const ButtonWidget = styled(TouchableOpacity);
  const wishlistPrevesionPID = wishlist.map((item) => item.product_id);

  const isWishlisted = wishlistPrevesionPID.includes(productId);

  return (
    <ButtonWidget
      onPress={async () => {
        isWishlisted
          ? await removeProductFromWishlist(productId)
          : await addProductToWishlist(productId);
        getWishlist();
      }}
      className="bg-white rounded-full p-2"
    >
      <FontAwesome
        name={isWishlisted ? "heart" : "heart-o"}
        size={15}
        color="#3C5A5D"
      />
    </ButtonWidget>
  );
};

export default LikeButton;
