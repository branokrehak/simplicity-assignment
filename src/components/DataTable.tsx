import React from 'react';
import { SlPencil } from 'react-icons/sl';
import { flexRender, type Table } from "@tanstack/react-table";
import { Link } from 'react-router-dom';

import '../styles/components/Table.scss';
import type { Announcement } from '../@types';

export default function DataTable(props: { table: Table<Announcement> }) {
  return <>
    <div className="data-table">
      <table className="table--main">
        <thead className="table--head">
          {props.table.getHeaderGroups().map((headerGroup) => (
            <tr className="table--row" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th 
                  className="table--header" 
                  key={header.id} 
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="table--body">
          {props.table.getRowModel().rows.map((row) => (
            <tr className="table--row" key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className="table--data" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              <td className="table--data table--data--icon">
                <Link to={`/announcements/${row.original.id}`} title="Edit">
                  <SlPencil size={16} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>;
}
