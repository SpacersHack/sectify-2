export const COLUMNS = [
  {
    Header: '',
    Footer: 'name',
    accessor: 'id',
    Cell: ({ value }) => {
      return <p className="text-sm text-[#606060] text-left">{value}</p>;
    },
  },
  {
    Header: 'Aspirant',
    accessor: 'aspirant',
    Cell: ({ value }) => {
      return <p className="text-sm text-[#606060] text-left">{value}</p>;
    },
  },
  {
    Header: 'Party Logo',
    Footer: '',
    accessor: 'logo',
    Cell: ({ value }) => {
      return (
        <p className="text-sm text-[#606060] text-left bg-gray-200 w-10 h-10"></p>
      );
    },
  },
  {
    Header: 'Political Party',
    accessor: 'politicalParty',
    Cell: ({ value }) => {
      return <p className="text-sm text-[#606060] text-left">{value}</p>;
    },
  },
];
