//context imports
import colors from "./styles/colors";
import bgColors from "./styles/bg-colors";
import pagesList from "./pages/pagesList";
import description from "./data/description";
import dailyTextsData from "./data/dailyTextsData";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Header from "./components/header/Header";
import LastLessons from "./components/lastLessons/LastLessons";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import VideoUploader from "./components/VideoUploader";
export const AppContext = React.createContext();
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 840);
  useEffect(() => {
    setIsMobile(window.innerWidth < 840);
  }, []);
  return (
    <AppContext.Provider
      value={{
        colors,
        bgColors,
        pagesList,
        isMobile,
        description,
        dailyTextsData,
      }}
    >
      <div className="App">
        <Header />
        <Home />
      </div>
    </AppContext.Provider>
  );
}

export default App;