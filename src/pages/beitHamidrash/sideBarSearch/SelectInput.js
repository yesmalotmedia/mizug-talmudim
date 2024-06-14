import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../App";
import teachers from "../../../data/teachers";
const SelectInput = ({ options, onChange, value }) => {
  // data
  const { colors, bgColors, isMobile } = useContext(AppContext);
  // styles
  const styles = {
    input: {
      padding: "10px 12px",
      borderRadius: 50,
      cursor: "pointer",
      width: "90%",
      outline: "none",
      border: "solid 1px" + colors.darkBlue,
      fontSize: 17,

      color: "grey",
      fontWeight: 500,
      marginBottom: 20,
    },
  };

  //functions

  const optionsElements = options?.map((option, index) => (
    <option key={index} value={option.name}>
      {option.name}
    </option>
  ));
  return (
    <select onChange={onChange} style={styles.input}>
      {optionsElements}
    </select>
  );
};

export default SelectInput;
