import 'regenerator-runtime/runtime';
import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
// import { useAsyncDebounce } from 'react-table';

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onFilterChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);

  return (
    <label className="block relative floated-label w-full my-3">
      <input
        type="search"
        name="search"
        className="w-full py-2 px-4 outline-none focus:outline-transparent shadow-md cursor-pointer rounded-md border-none"
        placeholder="John Doe"
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onFilterChange(e.target.value);
        }}
      />
    </label>
  );
};

export default GlobalFilter;
