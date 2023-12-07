import React from 'react';
import VoterBio from './voterBio';
import ProgressCard from './progressCard';

const presidentCandidate = [
  {
    name: 'Bola Tinubu',
    stat: '700',
    percent: '40',
  },
  {
    name: 'Peter Obi',
    stat: '500',
    percent: '20',
  },
  {
    name: 'Sowore Omoyele',
    stat: '800',
    percent: '10',
  },
  {
    name: 'Imumolen Chistopher',
    stat: '300',
    percent: '2',
  },
];
const Dashboard = () => {
  return (
    <article>
      <VoterBio />
      <section className="lg:flex justify-between items-center gap-x-6 my-6">
        <ProgressCard
          title={'Top 4 Presidential candidate 2023'}
          manner={'by vote'}
          candidates={presidentCandidate}
        />
        <ProgressCard
          title={'Top 4 Lagos Gubernatorial candidate 2023'}
          manner={'by vote'}
          candidates={presidentCandidate}
        />
      </section>
      <section className="lg:flex justify-between items-center gap-x-6 my-6">
        <ProgressCard
          title={'Top 4 Presidential candidate 2023'}
          manner={'by vote'}
          candidates={presidentCandidate}
        />
        <ProgressCard
          title={'Top 4 Lagos Gubernatorial candidate 2023'}
          manner={'by vote'}
          candidates={presidentCandidate}
        />
      </section>
    </article>
  );
};

export default Dashboard;
