// useCollections.js
import { useEffect, useState } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase-config";

const useCollections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const metadataDoc = doc(db, "metadata", "collections");
      const metadataSnap = await getDoc(metadataDoc);

      if (metadataSnap.exists()) {
        setCollections(metadataSnap.data().names);
      } else {
        console.log("No metadata document found!");
      }
    };

    fetchCollections();
  }, []);

  return collections;
};

export default useCollections;
