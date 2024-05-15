import React, { useContext } from "react";
import { AppContext } from "../../App";

export default function LoadMore() {
  const { colors, bgColors } = useContext(AppContext);

  const styles = {
    readMore: {
        height: '3vw',
      width: '10vw',
      borderRadius: 30,
      border: `2px solid ${colors.orange}`,
      textAlign: 'center',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      color: colors.darkBlue,
      fontWeight: 600,
      fontSize: '1.5vw',
      cursor: 'pointer',
    },
  };
  return (
    <>
      <div style={styles.readMore}>
        <p> טען עוד </p>
      </div>
    </>
  );
}
