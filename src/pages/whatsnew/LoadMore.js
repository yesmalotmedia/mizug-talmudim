import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import LoaderAnimation from "../../components/elements/LoaderAnimation";

const LoadMore = ({ onClick }) => {
  const { colors } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(()=>{
       onClick();
    setIsLoading(false);
    },4000)
   
  };

  const styles = {
    readMore: {
      height: "3vw",
      width: "10vw",
      borderRadius: 30,
      border: `2px solid ${colors.orange}`,
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: colors.darkBlue,
      fontWeight: 600,
      fontSize: "1.5vw",
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
    <div>
      <LoaderAnimation isLoading={isLoading} color={colors.orange} />
      {!isLoading && (
        <div style={styles.readMore} onClick={handleClick}>
          <p> טען עוד </p>
        </div>
      )}
    </div>
  );
};

export default LoadMore;
