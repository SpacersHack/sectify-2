import cls from 'classname';

const ProgressCard = ({ title, manner, candidates }) => {
  return (
    <aside className="bg-white py-6 px-3 w-full rounded-lg my-4 lg:my-0">
      <h4 className="font-bold">
        {title}
        <span className="text-sm"> ({manner})</span>
      </h4>
      {candidates.map((candidate, id) => {
        const randId = Math.floor(Math.random() * 100) + 1;
        return (
          <article key={id} className="flex justify-between items-center my-6">
            <p className="w-[300px] ">{candidate.name}</p>
            <div className=" w-full ml-2">
              <p className="w-full bg-transparent rounded-full overflow-hidden text-sectify-700 flex items-center">
                <span
                  className={cls(
                    `rounded-full block py-1 px-4 mr-3`,
                    `bg-${[candidate.bg]}`
                  )}
                  style={{
                    width: `${randId}%`,
                  }}
                >
                  {candidate.stat}
                </span>
                <span className="text-black inline-block">{randId}%</span>
              </p>
            </div>
          </article>
        );
      })}
    </aside>
  );
};

export default ProgressCard;
