import React from 'react';

const SectifyInput = ({ title, placeholder, type, name }) => {
  return (
    <label className="block my-3">
      <p className="text-[#4C4C4C]">{title}</p>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="border-gray-200 border w-full py-3 px-2 my-2 rounded-md"
      />
    </label>
  );
};

export default SectifyInput;
