"use client";
import React, { useId, useState } from "react";
import Select from "react-select";

const levels = [
  { value: "Maktab", label: "Maktab" },
  { value: "Bakalavr", label: "Bakalavr" },
  { value: "Magistr", label: "Magistr" },
  { value: "Phd (Doktorantura)", label: "Phd (Doktorantura)" },
  { value: "Postdoktorantura", label: "Postdoktorantura" },
  { value: "Boshqalar", label: "Boshqalar" },
];

export default function SohaSelect() {
  const [soha, setSoha] = useState('');

  const handleSelectBox = (event) => {
    setSoha(event);
  };
  let selectedSoha = soha.length && soha.map(item => item.value);

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
      <input type="hidden" name="soha" value={selectedSoha}/>
      <Select
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