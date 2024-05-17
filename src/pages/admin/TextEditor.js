// TextEditor.js
import React, { useRef } from "react";
import { firestore } from "../../server/firebase-config";

const TextEditor = () => {
  const editorRefTitle = useRef(null);
  const editorRefBody = useRef(null);

  const createArticle = async () => {
    const title = editorRefTitle.current.innerHTML;
    const body = editorRefBody.current.innerHTML;

    try {
      const articleRef = await firestore.collection("videos").add({
        title,
        body,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      console.log("Article created with ID: ", articleRef.id);
    } catch (error) {
      console.error("Error creating article: ", error);
    }
  };

  return (
    <div style={{ marginBottom: "20px", direction: "rtl", textAlign: "right" }}>
      <div
        contentEditable
        ref={editorRefTitle}
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
        ref={editorRefBody}
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
