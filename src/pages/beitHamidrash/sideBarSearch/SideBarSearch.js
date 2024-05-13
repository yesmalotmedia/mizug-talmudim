import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../App";
import Button from "../../../components/elements/Button";
import SelectInput from "./SelectInput";
import SlideSelect from "./Slider";
import Slider from "./Slider";
import Checkbox from "./Checkbox";

const SideBarSearch = () => {
  // data
  const { colors, bgColors, isMobile } = useContext(AppContext);

  const [selectedValue, setSelectedValue] = useState(500);

  // states
  const [selectedOption, setSelectedOption] = useState("");

  // styles

  //functions
  const handleChange = (value) => {
    setSelectedValue(value);
  };
  const styles = {
    container: {
      backgroundColor: bgColors.lightAzure,
      borderRadius: 50,
      padding: 20,
      width: "20%",
      maxWidth: 300,
      maxHeight: 700,
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "column",
      marginLeft: 20,
    },
    searchContainer: {
      position: "relative",
      width: "90%",
      marginBottom: 20,
    },
    searchInput: {
      padding: "10px 12px",
      borderRadius: 50,
      width: "100%",
      outline: "none",
      border: "solid 1px" + colors.darkBlue,
      color: colors.darkBlue,
      fontWeight: 500,
      paddingRight: 10, // Adjust padding to accommodate the icon
      fontSize: 17,
    },
    searchIcon: {
      position: "absolute",
      left: 10, // Adjust the position of the icon as needed
      top: "50%", // Center vertically
      transform: "translateY(-50%)", // Center vertically
      width: 20, // Set the width of the icon
      height: 20, // Set the height of the icon
    },

    lable: {
      textAlign: "right",
      color: colors.azure,
      fontSize: 15,
      fontWeight: 500,
      width: "90%",
      marginBottom: 5,
      marginRight: 5,
    },
  };

  //functions
  return (
    <form style={styles.container}>
      <div style={styles.searchContainer}>
        <input style={styles.searchInput} placeholder="הקלידו לחיפוש" />
        <img
          src={"searchIcon.png"}
          alt="Search"
          style={styles.searchIcon}
        />{" "}
        {/* Search icon */}
      </div>
      <div style={styles.lable}>הרבנים</div>
      <SelectInput />
      <div style={styles.lable}>הנושאים</div>
      <SelectInput />
      <div style={styles.lable}>הכללים</div>
      <SelectInput />
      <div style={styles.lable}>המסכת</div>
      <SelectInput />
      <div style={styles.lable}>סוג השיעור</div>
      <Checkbox label={"שיעורי וידאו"} />
      <Checkbox label={"שיעורי שמע"} />
      <Checkbox label={"שיעורי טקסט"} />
      <br />
      <div style={styles.lable}>משך זמן השיעור</div>
      <Slider min={1} max={120} step={1} onChange={handleChange} />{" "}
      <Button
        color={colors.white}
        bgColor={bgColors.orangeGradient}
        title={"סנן"}
        fontSize={20}
        fontWeight={500}
        borderRadius={50}
        width={"90%"}
        arrow={true}
      />{" "}
      <style>{`::placeholder {color: ${colors.darkBlue}`}</style>
    </form>
  );
};

export default SideBarSearch;
