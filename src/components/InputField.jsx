const InputField = ({ label, type, iconLeft, iconRight, placeholder }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1">{label}</label>
    <div className="flex items-center border rounded px-2 py-2 bg-white shadow-sm">
      {iconLeft}
      <input
        type={type}
        placeholder={placeholder}
        className="flex-1 outline-none px-2"
      />
      {iconRight}
    </div>
  </div>
);

export default InputField;