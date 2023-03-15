const Select = (props) => {
  return (
    <section className="flex flex-col gap-y-1">
      <label htmlFor={props.name} className="text-base text-start">
        {props.label}
        {props.required && <span className="text-red-500">*</span>}
      </label>
      <select
        {...props}
        className={`${
          props.error
            ? "focus:ring-1 focus:ring-red-500 bg-red-50 ring-1 ring-red-500"
            : "focus:ring-1 focus:ring-gray-400 bg-gray-50 ring-1 ring-gray-400"
        } outline-none focus:outline-none p-3 rounded-lg `}
      >
        {props.options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {props.error && <span className="text-red-500">{props.error}</span>}
    </section>
  );
};

export default Select;
