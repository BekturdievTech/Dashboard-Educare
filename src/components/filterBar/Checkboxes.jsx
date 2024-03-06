export default function Checkboxes() {
  const options = [
    "Maktab",
    "Bakalavr",
    "Magistr",
    "PhD (Doktorantura)",
    "Postdoktorantura",
    "Boshqalar",
  ];
  return (
    <div className="my-4 grid grid-cols-2 w-full gap-[10px] justify-between">
      {options.map((item, index) => (
        <div className="flex justify-start items-center gap-[10px]" key={index}>
          <input
            type="checkbox"
            name="daraja"
            value={item}
            id={index}
            className="w-[20px] h-[20px] rounded-lg custom-checkbox"
          />
          <label htmlFor={index}>
            {item}
          </label>
        </div>
      ))}
    </div>
  );
}
