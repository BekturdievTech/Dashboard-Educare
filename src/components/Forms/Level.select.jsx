"use client";
import Select from "react-select";
import React, { useId, useState } from "react";

const levels = [
  { value: "Maktab", label: "Maktab" },
  { value: "Bakalavr", label: "Bakalavr" },
  { value: "Magistr", label: "Magistr" },
  { value: "Phd (Doktorantura)", label: "Phd (Doktorantura)" },
  { value: "Postdoktorantura", label: "Postdoktorantura" },
  { value: "Boshqalar", label: "Boshqalar" },
];

export default function LevelSelect() {
  const [level, setLevel] = useState('');

  const handleSelectBox = (event) => {
    setLevel(event);
  };
  let selectedLevels = level.length && level.map(item => item.value);

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
      <div className="font-semibold mb-1">Levels</div>
      <input type="hidden" name="level" value={selectedLevels}/>
      <Select                
        isMulti
        instanceId={useId()}       
        options={levels}
        onChange={handleSelectBox}
        styles={customStyles}
        placeholder="Study Level"
        required
      />
    </div>
  );
}
