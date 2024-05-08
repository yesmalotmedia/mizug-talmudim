//context imports
import colors from "./styles/colors";
import bgColors from "./styles/bg-colors";
import pagesList from "./pages/pagesList";
import description from "./data/description";
import dailyTextsData from "./data/dailyTextsData";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import LastLessons from "./components/lastLessons/LastLessons";
import VideoUploader from "./components/VideoUploader";
import { RouterProvider } from "react-router-dom";
import routers from "./Routes";

export const AppContext = React.createContext();
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  //context

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
        <RouterProvider router={routers} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
