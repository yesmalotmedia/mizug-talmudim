import React, { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import Button from "../../components/elements/Button";
import SelectInput from "../../pages/beitHamidrash/sideBarSearch/SelectInput";

const MemuzagSideBarSearch = ({ options, filter, onFilterChange }) => {
  const {
    responsive,
    colors,
    bgColors,
    isMobile,
    rabbiesData,
  } = useContext(AppContext);

  const { talmuds, masecets, perakim, dapim } = options;
  const { selectedTalmud, selectedMasechet, selectedPerek, selectedDaf } = filter;
console.log(filter);
console.log(options);

  // styles
  const styles = {
    container: {
      backgroundColor: bgColors.lightAzure,
      borderRadius: responsive(50, 0, 0),
      padding: 20,
      width: responsive("40%", "100%", "100%"),
      maxWidth: responsive(300, "100%", "100%"),
      maxHeight: responsive(700, "100vh", "100vh"),
      display: "flex",
      justifyContent: "space-around",
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
  };

  // עדכון הערכים של filter עם שינוי בערכי ה-SelectInput
  const handleTalmudChange = (selectedValue) => {
    if (selectedValue !== selectedTalmud) {
      onFilterChange({ selectedTalmud: selectedValue });
    }
  };

  const handleMasechetChange = (selectedValue) => {
    if (selectedValue !== selectedMasechet) {
      onFilterChange({ selectedMasechet: selectedValue });
    }
  };

  const handlePerekChange = (selectedValue) => {
    if (selectedValue !== selectedPerek) {
      onFilterChange({ selectedPerek: selectedValue });
    }
  };

  const handleDafChange = (selectedValue) => {
    if (selectedValue !== selectedDaf) {
      onFilterChange({ selectedDaf: selectedValue });
    }
  };

  // עדכון האפשרויות בהתאם לתלמוד הנבחר
  useEffect(() => {
    // אם יש רק מסכת אחת בתלמוד שנבחר, בחר אותה אוטומטית
    if (masecets.length === 1 && selectedMasechet !== masecets[0].value) {
      onFilterChange({ selectedMasechet: masecets[0].value });
    }

    // אם יש רק פרק אחד במסכת הנבחרת, בחר אותו אוטומטית
    if (perakim.length === 1 && selectedPerek !== perakim[0].value) {
      onFilterChange({ selectedPerek: perakim[0].value });
    }

    // אם יש רק דף אחד בפרק הנבחר, בחר אותו אוטומטית
    if (dapim.length === 1 && selectedDaf !== dapim[0].value) {
      onFilterChange({ selectedDaf: dapim[0].value });
    }
  }, [masecets, perakim, dapim, selectedMasechet, selectedPerek, selectedDaf, onFilterChange]);

  return (
    <form style={styles.container}>
      <div style={styles.label}>תלמוד</div>
      <SelectInput
        options={talmuds}
        value={selectedTalmud}
        onChange={(e) => handleTalmudChange(e.target.value)}
      />

      <div style={styles.label}>מסכת</div>
      <SelectInput
        options={masecets}
        value={selectedMasechet}
        onChange={(e) => handleMasechetChange(e.target.value)}
      />

      <div style={styles.label}>פרק</div>
      <SelectInput
        options={perakim}
        value={selectedPerek}
        onChange={(e) => handlePerekChange(e.target.value)}
      />

      <div style={styles.label}>דף</div>
      <SelectInput
        options={dapim}
        value={selectedDaf}
        onChange={(e) => handleDafChange(e.target.value)}
      />

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
      />
    </form>
  );
};

export default MemuzagSideBarSearch;
