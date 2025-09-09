import React from 'react';
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';

import '../styles/pages/announcements.scss';
import DataTable from '../components/DataTable';

const data = [
  {
    title: "Title 1",
    publicationDate: "Aug 11, 2023 00:34",
    lastUpdate: "Aug 11, 2023",
    categories: "City",
  },
  {
    title: "Title 2",
    publicationDate: "Aug 4, 2023 00:35",
    lastUpdate: "Aug 6, 2023",
    categories: "City",
  },
  {
    title: "Title 3",
    publicationDate: "Mar 8, 2023 07:27",
    lastUpdate: "Mar 10, 2023",
    categories: "City/Health",
  },
  {
    title: "Title 4",
    publicationDate: "Aug 3, 2023 00:34",
    lastUpdate: "Aug 7, 2023",
    categories: "City",
  },
  {
    title: "Title 5",
    publicationDate: "Aug 11, 2023 00:35",
    lastUpdate: "Aug 11, 2023",
    categories: "City/Health",
  },
  {
    title: "Title 6",
    publicationDate: "Mar 28, 2023 07:27",
    lastUpdate: "Mar 29, 2023",
    categories: "City/Health",
  },
];

const columns = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "publicationDate",
    header: "Publication date",
  },
  {
    accessorKey: "lastUpdate",
    header: "Last update",
  },
  {
    accessorKey: "categories",
    header: "Categories",
  },
];

export default function Announcements() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <>
    <section className="announcements">
      <div className="line" />
      <div className="content-wrapper">
        <h1>Announcements</h1>
        <DataTable table={table} />
      </div>
    </section>
  </>;
}
