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
import ExtractPostsData from "./assets/extractPostsData";
import getCategoriesByParent from "./assets/getCategoriesByParent";
import DataTest from "./assets/dataTest/DataTest";
import ExtractNewsData from "./assets/ExtractNewsData";
import useResponsive from "./Hooks/useResponsive";
import ExtractPublishData from "./assets/ExtractPublishData";
export const AppContext = React.createContext();

/*
1/ WhatsNew: 1. loader animation 2. connecet do database 2.connect post gallary do database
1*/
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

  //Fetch dedications data
  const {
    data: dedicationsData,
    loading: loadingDedications,
    error: errordedications,
  } = useFetch(
    "https://dev-mizug-talmudim-admin.pantheonsite.io/wp-json/wp/v2/dedications"
  );
  //Fetch news data
  const {
    data: newsData,
    loading: loadingNews,
    error: errorNews,
  } = useFetch(
    "https://dev-mizug-talmudim-admin.pantheonsite.io/wp-json/wp/v2/news"
  );

  //Fetch news data
  const {
    data: publishData,
    loading: loadingPublish,
    error: errorPublish,
  } = useFetch(
    "https://dev-mizug-talmudim-admin.pantheonsite.io/wp-json/wp/v2/publish"
  );

  // State for handling mobile view
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const [lessonsType, setlessonsType] = useState("עיון");
  const [lessonsFilter, setlessonsFilter] = useState({
    category: "כל השיעורים",
  });
  const { responsive } = useResponsive();
  // Parsing data
  let parsedVideosData = [];
  let videos = [];
  let categories = [];
  let parsedNewsData = [];
  let parsedPublishData = [];

  if (postsData) {
    parsedVideosData = ExtractPostsData(postsData);
    videos = parsedVideosData.filter(
      (e) =>
        e.contentType.includes("video") ||
        e.contentType.includes("וידאו") ||
        e.contentType.includes("audio") ||
        e.contentType.includes("text")
    );
    console.log(videos);
  }

  if (newsData) {
    parsedNewsData = ExtractNewsData(newsData);
  }

  if (categoriesData) {
    categories = categoriesData; // Ensure categoriesData is assigned correctly
  }

  if (publishData) {
    parsedPublishData = ExtractPublishData(publishData);
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
        responsive,
        bgColors,
        pagesList,
        isMobile,
        description,
        dailyTextsData,
        postsData,
        loadingPosts,
        isMobileNavOpen,
        videos,
        categories: categories || [], // Default to an empty array if categoriesData is undefined
        loadingCategories,
        lessonsType,
        rabbiesData,
        loadingRabbies,
        lessonsFilter,
        dedicationsData,
        loadingDedications,
        errordedications,
        parsedNewsData,
        loadingNews,
        parsedPublishData,
        setlessonsType,
        setIsMobileNavOpen,
        getCategoriesByParent,
        setlessonsFilter,
      }}
    >
      <div className="App">
        <RouterProvider router={routers} />
      </div>
      {/* <DataTest /> */}
    </AppContext.Provider>
  );
}

export default App;
