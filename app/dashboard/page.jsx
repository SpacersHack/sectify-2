import React from 'react';
import VoterBio from './voterBio';
import ProgressCard from './progressCard';
import BarChartPoll from './barChart';

const presidentCandidate = [
  {
    name: 'Solace Ajibade',
    stat: '4700',
    percent: '40',
    bg: 'green',
  },
  {
    name: 'Mr. Planet',
    stat: '58900',
    percent: '20',
    bg: 'red',
  },
  {
    name: 'Transjossy Evans',
    stat: '23050',
    percent: '10',
    bg: 'brown',
  },
  {
    name: 'Laurel Aiyegbeni',
    stat: '4323000',
    percent: '2',
    bg: 'grey',
  },
];

const nuesaCandidate = [
  {
    name: 'Ufokima Peter',
    stat: '784700',
    percent: '40',
    bg: 'green',
  },
  {
    name: 'Pope Jose',
    stat: '6258900',
    percent: '20',
    bg: 'red',
  },
  {
    name: 'Badmus Bodmas',
    stat: '4523050',
    percent: '10',
    bg: 'brown',
  },
  {
    name: 'Marshal',
    stat: '64323000',
    percent: '2',
    bg: 'grey',
  },
];

const nacossCandidate = [
  {
    name: 'Jboss Akintomiwa',
    stat: '2352400',
    percent: '40',
    bg: 'green',
  },
  {
    name: 'Nathan Oguntuberu',
    stat: '5138900',
    percent: '20',
    bg: 'red',
  },
  {
    name: 'Omotosho Omotee',
    stat: '2334050',
    percent: '10',
    bg: 'brown',
  },
  {
    name: 'Peculiar Triplet',
    stat: '323007',
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
          title={'Top 4 SUG Presidential candidate 2023'}
          manner={'by vote'}
          candidates={presidentCandidate}
        />
        {/* <BarChartPoll /> */}
        <ProgressCard
          title={'Top 4 NUESA candidate 2023'}
          manner={'by vote'}
          candidates={nuesaCandidate}
        />
      </section>
      <section className="lg:flex justify-between items-center gap-x-6 my-6">
        <ProgressCard
          title={'Top 4 NACOSS Presidential candidate 2023'}
          manner={'by vote'}
          candidates={nacossCandidate}
        />
        <ProgressCard
          title={'Top 4 Passa candidate 2023'}
          manner={''}
          candidates={presidentCandidate}
        />
      </section>
    </article>
  );
};

export default Dashboard;
