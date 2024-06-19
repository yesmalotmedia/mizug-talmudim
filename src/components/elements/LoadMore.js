import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import LoaderAnimation from "./LoaderAnimation";

const LoadMore = ({ onClick }) => {
  const { colors, isMobile } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      onClick();
      setIsLoading(false);
    }, 4000);
  };

  const styles = {

    readMore: {
      height: isMobile? "9vw": "3vw",
      width: isMobile? "20vw":"10vw",
      borderRadius: 30,
      border: `2px solid ${colors.orange}`,
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: colors.darkBlue,
      fontWeight: 600,
      fontSize: isMobile? "4vw": "1.5vw",
      cursor: "pointer",
      margin: "20px auto",
    },
    loader: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100px",
      margin: "20px auto",
    },
  };

  return (
    <>
      <LoaderAnimation isLoading={isLoading} color={colors.orange} />
      {!isLoading && (
        <div style={styles.readMore} onClick={handleClick}>
          <p> טען עוד </p>
        </div>
      )}
    </>
  );
};

export default LoadMore;
