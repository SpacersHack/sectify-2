import React from 'react';

const ProgressCard = ({ title, manner, candidates }) => {
  return (
    <aside className="bg-white py-6 px-3 w-full rounded-lg my-4 lg:my-0">
      <h4 className="font-bold">
        {title}
        <span className="text-sm"> ({manner})</span>
      </h4>
      {candidates.map((candidate, id) => (
        <article key={id} className="flex justify-between items-center my-6">
          <p className="w-[300px] ">{candidate.name}</p>
          <div className=" w-full ml-2">
            <p className="w-full bg-transparent rounded-full overflow-hidden text-sectify-700 flex items-center">
              <span className="bg-sectify-600 w-1/2 rounded-full block py-1 px-4 mr-3">
                {candidate.stat}
              </span>
              <span className="text-black inline-block">
                {candidate.percent}%
              </span>
            </p>
          </div>
        </article>
      ))}
    </aside>
  );
};

export default ProgressCard;
