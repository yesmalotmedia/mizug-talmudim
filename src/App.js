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
import postsData from "./data/postsData";

export const AppContext = React.createContext();

function App() {
  //data

  //state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  //data
  // const videos = useVideos();
  // console.log(videos);

  //state
  //context

  // getDatabase();

  useEffect(() => {
    setIsMobile(window.innerWidth < 1200);
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
        postsData,
        isMobileNavOpen,
        setIsMobileNavOpen,
      }}
    >
      <div className="App">
        <RouterProvider router={routers} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
