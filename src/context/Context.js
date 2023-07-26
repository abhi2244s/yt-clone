import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
      console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <AppContext.Provider
      value={{
        searchResults,
        setSearchResults,
        loading,
        setLoading,
        mobileMenu,
        setMobileMenu,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
