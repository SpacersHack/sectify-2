import React from 'react';
import VoterBio from './voterBio';
import ProgressCard from './progressCard';

const presidentCandidate = [
  {
    name: 'Bola Tinubu',
    stat: '4700',
    percent: '40',
    bg: 'green',
  },
  {
    name: 'Peter Obi',
    stat: '58900',
    percent: '20',
    bg: 'red',
  },
  {
    name: 'Sowore Omoyele',
    stat: '23050',
    percent: '10',
    bg: 'brown',
  },
  {
    name: 'Imumolen Chistopher',
    stat: '4323000',
    percent: '2',
    bg: 'grey',
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
