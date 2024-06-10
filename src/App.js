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
import extractYoutubeUrl from "./assets/extractYoutubeUrl";
import extractPostsData from "./assets/extractPostsData";

export const AppContext = React.createContext();

function App() {
  //data
  //posts
  const { data, loading, error } = useFetch(
    "https://dev-mizug-talmudim-admin.pantheonsite.io/wp-json/wp/v2/posts"
  );

  //state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  //data
  let parsedData = [];
  let videos = [];
  if (data) {
    parsedData = extractPostsData(data);
    videos = parsedData?.filter((e) => e.contentType === "video");
  }

  //state
  //context

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
        parsedData,
        videos,
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
