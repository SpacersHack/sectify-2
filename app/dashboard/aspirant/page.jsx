import React from 'react';
import AspirantTable from './table';
const Aspirant = () => {
  return (
    <section className="w-[800px] md:w-full md:px-6">
      <h4 className="font-semibold my-6 flex items-center">
        <p>2023 Election</p>
        <p className="flex items-center mx-10 text-sm">
          <span className="w-3 h-3 block bg-sectify-100 rounded-full"></span>
          <span className="mx-2">In progress</span>
        </p>
      </h4>
      <aside>
        <AspirantTable />
      </aside>
    </section>
  );
};

export default Aspirant;
