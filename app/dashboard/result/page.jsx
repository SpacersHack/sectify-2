import ResultOverview from './overview';
import ResultTable from './table';

const Result = () => {
  return (
    <section className="w-[800px] md:w-full md:px-6">
      <h4 className="font-semibold my-6">All poll</h4>
      <article className="justify-between items-center gap-x-6 block md:flex my-6">
        <ResultOverview title={'Registered Voters'} text={'11, 111, 111'} />
        <ResultOverview
          title={'Registered Political Party'}
          text={'11, 111, 111'}
        />
        <ResultOverview title={'Casted votes'} text={'11, 111, 111'} />
      </article>
      <ResultTable />
    </section>
  );
};

export default Result;
