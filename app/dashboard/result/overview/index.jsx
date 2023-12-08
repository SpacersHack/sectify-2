import React from 'react';

const ResultOverview = ({ title, text }) => {
  return (
    <aside className="py-4 text-center bg-white rounded-lg px-4 h-[120px] my-5 md:my-0 md:w-1/3">
      <h4 className="my-3">{title}</h4>
      <p className="my-3 font-semibold">{text}</p>
    </aside>
  );
};

export default ResultOverview;
