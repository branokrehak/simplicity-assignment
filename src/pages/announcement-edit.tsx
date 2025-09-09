import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../styles/pages/announcement-edit.scss';
import AnnouncementEditForm from '../components/AnnouncementEditForm';
import type { Announcement } from '../@types';
import { data } from '../data/announcements';

export default function AnnouncementEdit() {
  const { id } = useParams<{ id: string }>();
  const [announcement, setAnnouncement] = useState<Announcement>();
  
  useEffect(() => {
    if (!id) return;
    
    const selected = data.find(item => item.id === Number(id));
    setAnnouncement(selected);
  }, [id])
  
  return <>
    <section className="announcements">
      <div className="line" />
      {announcement && <AnnouncementEditForm announcement={announcement} />}
    </section>
  </>;
}
