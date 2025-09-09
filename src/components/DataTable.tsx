import React from 'react';
import { SlPencil } from 'react-icons/sl';
import { flexRender, type Table, type SortingState, getCoreRowModel, getSortedRowModel } from "@tanstack/react-table";

import '../styles/components/table.scss';

export default function DataTable(props: { table: Table<any> }) {
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
                <SlPencil size={16} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>;
}
