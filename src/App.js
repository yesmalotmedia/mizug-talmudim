import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import colors from "./styles/colors";
import bgColors from "./styles/bg-colors";
import pagesList from "./pages/pagesList";
import description from "./data/description";
import dailyTextsData from "./data/dailyTextsData";
import LastLessons from "./components/lastLessons/LastLessons";
import VideoUploader from "./components/VideoUploader";
import routers from "./Routes";
import postsData from "./data/whatsNewData";
import useFetch from "./assets/useFetch";
import getVideoData from "./assets/getVideoData";
import extractYoutubeUrl from "./assets/extractYoutubeUrl";
import ExtractPostsData from "./assets/ExtractPostsData";
import getCategoriesByParent from "./assets/getCategoriesByParent";
export const AppContext = React.createContext();

function App() {
  // Fetch posts data
  const {
    data: postsData,
    loading: loadingPosts,
    error: errorPosts,
  } = useFetch(
    "https://dev-mizug-talmudim-admin.pantheonsite.io/wp-json/wp/v2/posts?per_page=100&page=1"
  );

  // Fetch categories data
  const {
    data: categoriesData,
    loading: loadingCategories,
    error: errorCategories,
  } = useFetch(
    "https://dev-mizug-talmudim-admin.pantheonsite.io/wp-json/wp/v2/categories?_fields=id,name,parent&per_page=100&page=1"
  );
  // Fetch rabbies data
  const {
    data: rabbiesData,
    loading: loadingRabbies,
    error: errorRabbies,
  } = useFetch(
    "https://dev-mizug-talmudim-admin.pantheonsite.io/wp-json/wp/v2/rabbies?_fields=id,description,name"
  );

  // State for handling mobile view
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const [lessonsType, setlessonsType] = useState("כל השיעורים");

  // Parsing data
  let parsedData = [];
  let videos = [];
  let categories = [];

  if (postsData) {
    parsedData = ExtractPostsData(postsData);
    videos = parsedData.filter((e) => e.contentType === "video");
  }

  if (categoriesData) {
    categories = categoriesData; // Ensure categoriesData is assigned correctly
  }
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
        categories: categories || [], // Default to an empty array if categoriesData is undefined
        loadingCategories,
        lessonsType,
        rabbiesData,
        loadingRabbies,
        setlessonsType,
        setIsMobileNavOpen,
        getCategoriesByParent,
      }}
    >
      <div className="App">
        <RouterProvider router={routers} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
