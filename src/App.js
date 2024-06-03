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
import useFetch from "./assets/useFetch";

import getVideoData from "./assets/getVideoData";
export const AppContext = React.createContext();

function App() {
  //data
  const { data, loading, error } = useFetch(
    "https://yesmalot.co.il/wp-json/wp/v2/posts?_fields=acf&per_page=10"
  );
  //state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  //data
  // const videos = useVideos();
  if (data) {
    console.log(getVideoData(data));
  }

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
        data,
      }}
    >
      <div className="App">
        <RouterProvider router={routers} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
