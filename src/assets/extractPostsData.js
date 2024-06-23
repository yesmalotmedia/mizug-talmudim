import React, { useContext, useState } from "react";
import useFetch from "./useFetch";
import extractYoutubeUrl from "./extractYoutubeUrl";
import getRabbieNameById from "./getRabbieNameById";

// Function to decode HTML entities
const decodeHtmlEntities = (str) => {
  var txt = document.createElement("textarea");
  txt.innerHTML = str;
  console.log(txt.innerHTML);
  return txt.value;
};

const ExtractPostsData = (data) => {
  return data.map((item) => ({
    id: item.id,
    date: item.date.split("T")[0], // Extract only the date part
    title: decodeHtmlEntities(item.title.rendered), // Decode HTML entities in the title
    rabbiName: getRabbieNameById(item.rabbies[0]),
    contentType: item.acf.contentType,
    url: extractYoutubeUrl(item.acf.url),
    categories: item.categories,
  }));
};

export default ExtractPostsData;
