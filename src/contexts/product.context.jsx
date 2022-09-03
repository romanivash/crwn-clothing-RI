import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

export const ProductContext = createContext({
  id: null,
  setId: () => null,
});

export const ProductProvider = ({ children }) => {
  const [id, setId] = useState(null);
  const value = { id, setId };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener((user) => console.log(user));

  //   return unsubscribe;
  // }, []);

  console.log(id);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
