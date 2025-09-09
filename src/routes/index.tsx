import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Home from '../pages/index';
import Announcements from '../pages/announcements';
import Layout from '../components/layout';
import AnnouncementEdit from '../pages/announcement-edit';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="announcements/:id" element={<AnnouncementEdit />} />
        </Route>
    )
);
