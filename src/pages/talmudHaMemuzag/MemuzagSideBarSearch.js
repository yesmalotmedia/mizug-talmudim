import React, { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import Button from "../../components/elements/Button";
import SelectInput from "../../pages/beitHamidrash/sideBarSearch/SelectInput";

const MemuzagSideBarSearch = ({
  options,
  filter,
  onFilterChange,
  onSubmit,
  handleToggle,
}) => {
  const { responsive, colors, bgColors, isMobile } = useContext(AppContext);

  const { talmuds, masecets, perakim, dapim } = options;
  const { selectedTalmud, selectedMasechet, selectedPerek, selectedDaf } =
    filter;

  // styles
  const styles = {
    container: {
      backgroundColor: bgColors.lightAzure,
      borderRadius: responsive(50, 0, 0),
      padding: 20,
      width: responsive("40%", "100%", "100%"),
      maxWidth: responsive(300, "100%", "100%"),
      maxHeight: responsive(500, "100vh", "100vh"),
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "column",
      marginLeft: 20,
    },
    label: {
      textAlign: "right",
      color: colors.azure,
      fontSize: 15,
      fontWeight: 500,
      width: responsive("90%", "50%", "50%"),
      marginBottom: 5,
      marginRight: 5,
    },
    buttonContainer: {
      marginTop: 20,
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  };

  // עדכון האפשרויות בהתאם לתלמוד הנבחר
  useEffect(() => {
    if (masecets.length === 1 && selectedMasechet !== masecets[0].value) {
      onFilterChange({ selectedMasechet: masecets[0].value });
    }
    if (perakim.length === 1 && selectedPerek !== perakim[0].value) {
      onFilterChange({ selectedPerek: perakim[0].value });
    }
    if (dapim.length === 1 && selectedDaf !== dapim[0].value) {
      onFilterChange({ selectedDaf: dapim[0].value });
    }
  }, [
    masecets,
    perakim,
    dapim,
    selectedMasechet,
    selectedPerek,
    selectedDaf,
    onFilterChange,
  ]);

  return (
    <form style={styles.container}>
      <div style={styles.label}>תלמוד</div>
      <SelectInput
        options={talmuds}
        value={selectedTalmud}
        onChange={(e) => onFilterChange({ selectedTalmud: e.target.value })}
      />
      <div style={styles.label}>מסכת</div>
      <SelectInput
        options={masecets}
        value={selectedMasechet}
        onChange={(e) => onFilterChange({ selectedMasechet: e.target.value })}
      />
      <div style={styles.label}>פרק</div>
      <SelectInput
        options={perakim}
        value={selectedPerek}
        onChange={(e) => onFilterChange({ selectedPerek: e.target.value })}
      />
      <div style={styles.label}>דף</div>
      <SelectInput
        options={dapim}
        value={selectedDaf}
        onChange={(e) => onFilterChange({ selectedDaf: e.target.value })}
      />
      <div style={styles.buttonContainer}>
        <Button
          text="חפש"
          onClick={(e) => {
            e.preventDefault(); // מונע רענון דף
            onSubmit(); // פעולה שתגדיר
          }}
          color={colors.azure}
          bgColor={bgColors.white}
        />
      </div>
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
        onClick={handleToggle}
      />{" "}
    </form>
  );
};

export default MemuzagSideBarSearch;
