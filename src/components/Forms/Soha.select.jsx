"use client";
import React, { useId, useState } from "react";
import Select from "react-select";

const levels = [
  { value: "Amaliy fanlar", label: "Amaliy fanlar" },
  { value: "Business boshqaruv", label: "Business boshqaruv" },
  { value: "Kompyuter fanlari", label: "Kompyuter fanlari" },
  { value: "Muhandislik va texnologiya", label: "Muhandislik va texnologiya" },
  { value: "Gumanitar fanlar", label: "Gumanitar fanlar" },
  { value: "Ijtimoiy fanlar", label: "Ijtimoiy fanlar" },
  { value: "sport", label: "sport" },
];

export default function SohaSelect({ defValue }) {
  const [soha, setSoha] = useState("");
  const SelectedValues = [];
  // Iterate through levels array and check if label exists in defValue
  levels.forEach((level) => {
    if (defValue && defValue.includes(level.label)) {
      SelectedValues.push(level);
    }
  });
  let defValueArray = defValue &&  defValue.toString().split(",");
  let selectedSoha = soha.length > 0 ? soha.map((item) => item.value) : defValueArray;

  const handleSelectBox = (event) => {
    setSoha(event);
  };

  const customStyles = {
    control: (defaultStyles) => ({
      ...defaultStyles,
      // Notice how these are all CSS properties
      padding: "0 10px",
      borderRadius: "10px",
      boxShadow: "none",
      minHeight: "56px",
      borderColor: "rgba(162, 161, 168, 0.2)",
    }),
  };


  

  return (
    <div className="mt-1 w-[475px]">
      <div className="font-semibold">Soha</div>
      <input type="hidden" name="soha" value={selectedSoha} />
      <Select
        defaultValue={defValue && SelectedValues}
        isMulti
        instanceId={useId()}
        options={levels}
        onChange={handleSelectBox}
        styles={customStyles}
        placeholder="Select Fields"
        required
      />
    </div>
  );
}
