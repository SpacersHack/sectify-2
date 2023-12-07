'use client';
import React, { useMemo } from 'react';
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useFilters,
  useRowSelect,
} from 'react-table';
import GlobalFilter from './GlobalFilter';
import { COLUMNS } from './columns';
import './table.css';
import MOCK_DATA from './mock_data.json';

const AllTableHooks = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    // pagination
    gotoPage,
    pageCount,
    setPageSize,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    page,
    // global filter
    setGlobalFilter,
    //row selection
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    // global filter
    useFilters,
    useGlobalFilter,
    //pagination
    usePagination,
    //row select
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>{/* <Checkbox {...getToggleAllRowsSelectedProps()} /> */}</div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => {
            return (
              <div>
                {/* <Checkbox {...row.getToggleRowSelectedProps()} /> */}
              </div>
            );
          },
        },
        ...columns,
      ]);
    }
  );

  const { pageIndex, pageSize, globalFilter, selectedRowIds } = state;
  return (
    <>
      <section className="bg-white py-3 overflow-x-scroll'">
        {/* <h3 className="text-sm uppercase">All Categories</h3> */}
        <aside className="px-10">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </aside>
        <aside className="flex justify-between text-black my-3">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup, id) => (
                <tr key={id} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, id) => (
                    <th
                      key={id}
                      {...column.getHeaderProps()}
                      className="font-normal capitalize text-sm text-[#303030] text-left"
                    >
                      {' '}
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, id) => {
                prepareRow(row);
                console.log(row);
                return (
                  <tr key={id} {...row.getRowProps()}>
                    {row.cells.map((cell, id) => {
                      return (
                        <td key={id} {...cell.getCellProps()} className="py-4">
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </aside>
      </section>
    </>
  );
};

export default AllTableHooks;
