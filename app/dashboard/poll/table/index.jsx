'use client';
import React, { useMemo } from 'react';
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useFilters,
  useRowSelect,
} from 'react-table';
import { COLUMNS } from './columns';
import './table.css';

const AllTableHooks = ({ data = [], userType }) => {
  const handleModalClose = () => {
    setModalIsOpen((prev) => false);
    setDeleteModalOpen(false);
  };
  // const navigate = useNavigate();
  const columns = useMemo(() => COLUMNS, []);

  return (
    <>
      <section>
        <aside className="flex justify-between text-black my-6">
          <h3 className="text-sm uppercase">All Categories</h3>
        </aside>
      </section>
    </>
  );
};

export default AllTableHooks;
