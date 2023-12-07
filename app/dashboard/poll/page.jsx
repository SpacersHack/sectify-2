import React from 'react';
import PollTable from './table';
const Poll = () => {
  return (
    <section className="w-[800px] md:w-full">
      <h4 className="font-semibold my-6">All poll</h4>
      <aside>
        <PollTable />
      </aside>
    </section>
  );
};

export default Poll;
