import React from 'react';

const VoterDetail = ({ title, text }) => {
  return (
    <p className="flex items-start my-3">
      <span className="inline-block mr-4 text-sm text-[#858383] uppercase w-[100px] md:w-[150px] ">
        {title} :
      </span>
      <span className="text-sm capitalize ">{text}</span>
    </p>
  );
};

export default VoterDetail;
