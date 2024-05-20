import React, { useRef } from "react";
import { db } from "../../server/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import Spacer from "../../components/elements/Spacer";

const TextEditor = () => {
  const articlesCollectionRef = collection(db, "articles");

  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  const createArticle = async () => {
    try {
      const title = titleRef.current.innerText;
      const body = bodyRef.current.innerText;

      console.log("Button clicked!"); // Debug log
      await addDoc(articlesCollectionRef, { title, body });
      console.log("Article created!"); // Debug log
    } catch (error) {
      console.error("Error creating article:", error);
    }
  };

  return (
    <div style={{ marginBottom: "20px", direction: "rtl", textAlign: "right" }}>
      <Spacer height={400} />
      <div
        contentEditable
        ref={titleRef}
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      >
        כותרת
      </div>
      <div
        contentEditable
        ref={bodyRef}
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      >
        גוף הטקסט
      </div>
      <button onClick={createArticle}>Create Article</button>
    </div>
  );
};

export default TextEditor;
