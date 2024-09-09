import React, { useContext } from "react";
import { AppContext } from "../../../App";

const SelectInput = ({ options, onChange, value }) => {
  // data
  console.log(options);

  const { colors } = useContext(AppContext);
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
    <React.Fragment key={index}>
      <option key={option.id} value={option.name}>
        {option.name}
      </option>
      {option.children?.map((child) => (
        <option
          key={child.id}
          value={child.name}
          style={{ paddingRight: "10px" }}
        >
          &nbsp;&nbsp;{child.name}
        </option>
      ))}
    </React.Fragment>
  ));

  return (
    <select onChange={onChange} style={styles.input} value={value}>
      {optionsElements}
    </select>
  );
};

export default SelectInput;
