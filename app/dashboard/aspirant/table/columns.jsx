// import format from "date-fns/format";
// import ColumnFilter from './ColumnFilter';

export const COLUMNS = [
  {
    Header: 'Id',
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
      return <p className="text-sm text-[#606060] text-left">{value}</p>;
    },
    // Cell: ({ value }) => {
    //   return (
    //     <p className="text-sm text-[#606060] ">
    //       {value ? new Intl.NumberFormat().format(value) : '----------'}
    //     </p>
    //   );
    // },
  },
  {
    Header: 'Political Party',
    accessor: 'politicalParty',
    Cell: ({ value }) => {
      return <p className="text-sm text-[#606060] text-left">{value}</p>;
    },
  },
  // {
  //   Header: 'Actions',
  //   Footer: 'Actions',
  //   accessor: '',
  //   Cell: ({ value }) => {
  //     return (
  //       <p
  //         className="text-sm text-white flex justify-center items-center bg-sectify py-2 px-4 rounded-md"
  //         onClick={() => console.log(value)}
  //       >
  //         <span>Vote</span>
  //       </p>
  //     );
  //   },
  // },
];
