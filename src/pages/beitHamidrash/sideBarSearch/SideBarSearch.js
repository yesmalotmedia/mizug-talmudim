import React, { useContext, useState } from "react";
import { AppContext } from "../../../App";
import Button from "../../../components/elements/Button";
import SelectInput from "./SelectInput";
import Slider from "./Slider";
import Checkbox from "./Checkbox";
import yerushalmiMasectot from "../../../data/yerushalmiMasectot";
import { useNavigate } from "react-router-dom";

const SideBarSearch = ({ setlessonsFilter }) => {
  // data
  const {
    colors,
    bgColors,
    isMobile,
    rabbiesData,
    loadingRabbies,
    categories,
    getCategoriesByParent,
    setlessonsType,
  } = useContext(AppContext);

  const [selectedValue, setSelectedValue] = useState(500);

  // states for form inputs
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRabbi, setSelectedRabbi] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedRule, setSelectedRule] = useState("");
  const [selectedMasechet, setSelectedMasechet] = useState("");
  const [videoChecked, setVideoChecked] = useState(false);
  const [audioChecked, setAudioChecked] = useState(false);
  const [textChecked, setTextChecked] = useState(false);
  // styles
  const styles = {
    container: {
      backgroundColor: bgColors.lightAzure,
      borderRadius: isMobile ? 0 : 50,
      padding: 20,
      width: isMobile ? "100%" : "40%",
      maxWidth: isMobile ? "100%" : 300,
      maxHeight: isMobile ? "100vh" : 700,
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
      width: isMobile ? "50%" : "90%",
      marginBottom: 5,
      marginRight: 5,
    },
    clearAll: {
      border: `1px solid ${colors.darkBlue}`,
      borderRadius: 20,
      padding: "7px 14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      color: colors.darkBlue,
      fontSize: 17,
      fontWeight: 500,
      margin: "0 170px 20px 0",
    },
  };

  //functions
  const filterLessons = () => {
    const formData = {
      searchQuery,
      selectedRabbi,
      selectedTopic,
      selectedRule,
      selectedMasechet,
      videoChecked,
      audioChecked,
      textChecked,
      lessonDuration: selectedValue,
    };
    setlessonsFilter(formData);
  };

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <form style={styles.container}>
      {isMobile && (
        <>
          <div style={styles.clearAll}>
            <img src="/clearAll.svg" />
            <span>נקה הכל</span>
          </div>
        </>
      )}
      <div style={styles.searchContainer}>
        <input
          style={styles.searchInput}
          placeholder="הקלידו לחיפוש"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <img src={"/searchIcon.png"} alt="Search" style={styles.searchIcon} />{" "}
        {/* Search icon */}
      </div>
      <div style={styles.lable}>הרבנים</div>
      <SelectInput
        options={rabbiesData}
        value={selectedRabbi}
        onChange={(e) => setSelectedRabbi(e.target.value)}
      />
      <div style={styles.lable}>הנושאים</div>
      <SelectInput
        options={getCategoriesByParent(categories, 3)}
        value={selectedTopic}
        onChange={(e) => setSelectedTopic(e.target.value)}
      />
      <div style={styles.lable}>הכללים</div>
      <SelectInput
        value={selectedRule}
        onChange={(e) => setSelectedRule(e.target.value)}
      />
      <div style={styles.lable}>המסכת</div>
      <SelectInput
        options={yerushalmiMasectot}
        value={selectedMasechet}
        onChange={(e) => setSelectedMasechet(e.target.value)}
      />
      <div style={styles.lable}>סוג השיעור</div>
      <Checkbox
        label={"שיעורי וידאו"}
        checked={videoChecked}
        onChange={() => setVideoChecked(!videoChecked)}
      />
      <Checkbox
        label={"שיעורי שמע"}
        checked={audioChecked}
        onChange={() => setAudioChecked(!audioChecked)}
      />
      <Checkbox
        label={"שיעורי טקסט"}
        checked={textChecked}
        onChange={() => setTextChecked(!textChecked)}
      />
      <br />
      <div style={styles.lable}>משך זמן השיעור</div>
      <Slider
        min={1}
        max={120}
        step={1}
        onChange={handleChange}
        value={selectedValue}
      />{" "}
      <Button
        color={colors.white}
        bgColor={bgColors.orangeGradient}
        hoveredBgColor={bgColors.darkBlueGradient}
        title={"סנן"}
        fontSize={20}
        fontWeight={500}
        borderRadius={50}
        width={"90%"}
        arrow={true}
        onClick={filterLessons}
      />{" "}
      <style>{`::placeholder {color: ${colors.darkBlue}`}</style>
    </form>
  );
};

export default SideBarSearch;
