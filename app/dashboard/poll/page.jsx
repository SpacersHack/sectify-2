import PollTable from './table';
const Poll = () => {
  return (
    <section className="w-[800px] md:w-full md:px-6">
      <h4 className="font-semibold my-6">All poll</h4>
      <aside>
        <PollTable />
      </aside>
    </section>
  );
};

export default Poll;
