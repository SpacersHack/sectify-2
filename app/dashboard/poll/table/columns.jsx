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
    Header: 'Category',
    Footer: 'name',
    accessor: 'category',
    Cell: ({ value }) => {
      return <p className="text-sm text-[#606060] text-left">{value}</p>;
    },
  },

  {
    Header: 'Registered Voters',
    Footer: 'Description',
    accessor: 'registeredVoters',
    Cell: ({ value }) => {
      return (
        <p className="text-sm text-[#606060] ">
          {value ? new Intl.NumberFormat().format(value) : '----------'}
        </p>
      );
    },
  },
  {
    Header: 'Total Vote',
    Footer: '',
    accessor: 'totalVote',
    Cell: ({ value }) => {
      return (
        <p className="text-sm text-[#606060] ">
          {value ? new Intl.NumberFormat().format(value) : '----------'}
        </p>
      );
    },
  },
  {
    Header: 'start date',
    accessor: 'startDate',
    Cell: ({ value }) => {
      return (
        <p className="text-sm text-[#606060] ">
          {value ? value : '----------'}
        </p>
      );
    },
  },
  {
    Header: 'end date',
    accessor: 'endDate',
    Cell: ({ value }) => {
      return (
        <p className="text-sm text-[#606060] ">
          {value ? value : '----------'}
        </p>
      );
    },
  },
  {
    //Table hooks up to the id to figure out what to render
    Header: 'status',
    Footer: 'status',
    //Accessor connects body to header
    accessor: 'status',
    Cell: ({ value }) => {
      switch (value) {
        case 'coming':
          return (
            <p className="text-[#BFA24C] bg-[#FFF9E5] text-center  py-1 rounded-md text-sm">
              Up coming
            </p>
          );
        case 'progress':
          return (
            <p
              className="text-[#22A57E] bg-[#F2FCF9] text-center  py-1 rounded-md text-sm cursor-pointer"
              onClick={() => window.location.replace('/dashboard/aspirant')}
            >
              In progress
            </p>
          );
        case 'completed':
          return (
            <p className="text-[#B21015] bg-[#FEF1F1] text-center  py-1 rounded-md text-sm">
              Completed
            </p>
          );
        default:
          return <p onClick={() => console.log(value)}> Up comings</p>;
      }
    },
  },
  // {
  //   Header: 'Actions',
  //   Footer: 'Actions',
  //   accessor: '',
  //   Cell: ({ value }) => {
  //     return <p onClick={() => console.log(value)}>hi</p>;
  //   },
  // }
];
