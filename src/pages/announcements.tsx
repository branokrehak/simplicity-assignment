import React, { useState } from 'react';
import { useReactTable, getCoreRowModel, getSortedRowModel, type SortingState } from '@tanstack/react-table';

import '../styles/pages/announcements.scss';
import DataTable from '../components/DataTable';
import { data, columns } from '../data/announcements';

export default function Announcements() {
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'lastUpdate', desc: true },
  ]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting, 
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return <>
    <section className="announcements">
      <div className="line" />
      <div className="content-wrapper">
        <h2>Announcements</h2>
        <DataTable table={table} />
      </div>
    </section>
  </>;
}
