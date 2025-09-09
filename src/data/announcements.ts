import { createColumnHelper } from '@tanstack/react-table';

import type { AnnouncementRow } from '../@types';

export const data: AnnouncementRow[] = [
  { title: 'Title 1', publicationDate: 'Aug 11, 2023 00:34', lastUpdate: 'Aug 11, 2023', categories: 'City' },
  { title: 'Title 2', publicationDate: 'Aug 4, 2023 00:35', lastUpdate: 'Aug 6, 2023', categories: 'City' },
  { title: 'Title 3', publicationDate: 'Mar 8, 2023 07:27', lastUpdate: 'Mar 10, 2023', categories: 'City/Health' },
  { title: 'Title 4', publicationDate: 'Aug 3, 2023 00:34', lastUpdate: 'Aug 7, 2023', categories: 'City' },
  { title: 'Title 5', publicationDate: 'Aug 11, 2023 00:35', lastUpdate: 'Aug 11, 2023', categories: 'City/Health' },
  { title: 'Title 6', publicationDate: 'Mar 28, 2023 07:27', lastUpdate: 'Mar 29, 2023', categories: 'City/Health' },
];

const columnHelper = createColumnHelper<AnnouncementRow>();

export const columns = [
  columnHelper.accessor('title', {
    header: 'Title',
    sortingFn: 'alphanumeric',
  }),
  columnHelper.accessor('publicationDate', {
    header: 'Publication Date',
    sortingFn: (rowA, rowB, columnId) => {
      const a = new Date(rowA.getValue(columnId)).getTime();
      const b = new Date(rowB.getValue(columnId)).getTime();
      return a - b;
    },
  }),
  columnHelper.accessor('lastUpdate', {
    header: 'Last Update',
    sortingFn: (rowA, rowB, columnId) => {
      const a = new Date(rowA.getValue(columnId)).getTime();
      const b = new Date(rowB.getValue(columnId)).getTime();
      return a - b;
    },
  }),
  columnHelper.accessor('categories', {
    header: 'Categories',
    sortingFn: 'alphanumeric',
  }),
];
