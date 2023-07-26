import React from "react";
import { AppContextProvider } from "./context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./components/Feed";
import VideoDetails from "./components/VideoDetails";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <>
      <AppContextProvider>
        <BrowserRouter>
          <div className="flex flex-col h-full">
            <Header />
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route
                path="/searchResult/:searchQuery"
                element={<SearchResult/>}
              />
              <Route path="/video/:id" element={<VideoDetails />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AppContextProvider>
    </>
  );
}

export default App;
