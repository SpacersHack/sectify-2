import React from 'react';
import PollTable from './table';
const Poll = () => {
  return (
    <section>
      <h4 className="font-semibold">All poll</h4>
      <aside>
        <PollTable />
      </aside>
    </section>
  );
};

export default Poll;
