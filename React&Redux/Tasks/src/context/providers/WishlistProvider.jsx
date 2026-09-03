import React, { useReducer } from "react";
import { WishlistContext } from "../Context";
import { wishlistReducer } from "../reducers/wishlistReducer";

const initialState = {
  userId: 1,
  wishlistItems: [],
};

export const WishlistProvider = ({ children }) => {

  const [wishlistState, wishlistDispatch] = useReducer( wishlistReducer, initialState);

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};