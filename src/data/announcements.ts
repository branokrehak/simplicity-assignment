import { createColumnHelper } from '@tanstack/react-table';

import type { Announcement } from '../@types';

export let data: Announcement[] = [
  { id: 1, title: 'Title 1', publicationDate: 'Aug 11, 2023 00:34', content: 'aa', lastUpdate: 'Aug 11, 2023', categories: ['City'] },
  { id: 2, title: 'Title 2', publicationDate: 'Aug 4, 2023 00:35', content: 'ss', lastUpdate: 'Aug 6, 2023', categories: ['City'] },
  { id: 3, title: 'Title 3', publicationDate: 'Mar 8, 2023 07:27', content: 'dd', lastUpdate: 'Mar 10, 2023', categories: ['City', 'Health'] },
  { id: 4, title: 'Title 4', publicationDate: 'Aug 3, 2023 00:34', content: 'ff', lastUpdate: 'Aug 7, 2023', categories: ['City'] },
  { id: 5, title: 'Title 5', publicationDate: 'Aug 11, 2023 00:35', content: 'gg', lastUpdate: 'Aug 11, 2023', categories: ['City', 'Health'] },
  { id: 6, title: 'Title 6', publicationDate: 'Mar 28, 2023 07:27', content: 'hh', lastUpdate: 'Mar 29, 2023', categories: ['City', 'Health'] },
];

export function updateAnnouncement(updated: Announcement) {
  data = data.map(item => (item.id === updated.id ? updated : item));
}

const columnHelper = createColumnHelper<Announcement>();

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
