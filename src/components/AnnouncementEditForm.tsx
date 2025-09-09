import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import { MultiSelect, Textarea, TextInput } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import dayjs from 'dayjs';

import '../styles/components/AnnouncementEditForm.scss';
import type { Announcement } from '../@types';
import { data, updateAnnouncement } from '../data/announcements';

const categories = [
  { value: 'Community events', label: 'Community events' },
  { value: 'Crime & safety', label: 'Crime & safety' },
  { value: 'Culture', label: 'Culture' },
  { value: 'Discounts & Benefits', label: 'Discounts & Benefits' },
  { value: 'Emergencies', label: 'Emergencies' },
  { value: 'For Seniors', label: 'For Seniors' },
  { value: 'Health', label: 'Health' },
  { value: 'City', label: 'City' },
  { value: 'Kids & Family', label: 'Kids & Family' },
];

export default function AnnouncementEditForm(props: { announcement?: Announcement }) {
  const navigate = useNavigate();
  const [announcement, setAnnouncement] = useState<Announcement | undefined>(props.announcement);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      title: announcement?.title || '',
      publicationDate: announcement?.publicationDate || '', 
      content: announcement?.content || '',
      categories: announcement?.categories || [], 
    },

    validate: {
      title: (value) => (value ? null : 'Title is required'),
      publicationDate: (value) => {
        if (!value) return 'Publication date is required';

        const formatted = dayjs(value).format('MM/DD/YYYY HH:mm');
        const pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4} ([01]\d|2[0-3]):[0-5]\d$/;
        return pattern.test(formatted) ? null : 'Publication date must be in MM/DD/YYYY HH:mm format';
      },
      content: (value) => (value ? null : 'Content is required'),
      categories: (value) => (value.length ? null : 'Categories are required'),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    if (!announcement) return;

    const updatedAnnouncement: Announcement = {
      ...announcement,
      title: values.title,
      content: values.content,
      categories: values.categories,
      publicationDate: values.publicationDate,
      lastUpdate: new Date().toLocaleDateString('en-US', {
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      }),
    };

    setAnnouncement(updatedAnnouncement);
    updateAnnouncement(updatedAnnouncement);

    navigate('/announcements');
  }

  useEffect(() => {
    if (!props.announcement?.id) return;

    const selected = data.find(item => item.id === Number(props.announcement?.id));
    setAnnouncement(selected);
  }, [props.announcement?.id])

  return <>
    <div className="announcement-edit-form">
      <h2>Edit the announcement</h2>

      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          classNames={{
            wrapper: 'input-wrapper',
            label: 'input-label',
          }}
          label="Title"
          placeholder="Your title"
          key={form.key('title')}
          {...form.getInputProps('title')}
        />

        <Textarea
          label="Content"
          classNames={{
            wrapper: 'input-wrapper',
            label: 'input-label',
          }}
          autosize
          minRows={8}
          maxRows={8}
          placeholder="Your description"
          key={form.key('content')}
          {...form.getInputProps('content')}
        />

        <h4>Category</h4>
        <MultiSelect
          label="Select category so readers know what your announcement is about."
          placeholder="Select categories"
          classNames={{
            label: 'input-label',
            dropdown: 'select-dropdown',
          }}
          data={categories}
          key={form.key('categories')}
          {...form.getInputProps('categories')}
        />

        <h4>Publication date</h4>
        <DateTimePicker
          placeholder="Select date and time"
          valueFormat="MM/DD/YYYY HH:mm"
          key={form.key('publicationDate')}
          {...form.getInputProps('publicationDate')}
        />

        <button className="submit-btn" type="submit">Publish</button>
      </form>
    </div>
  </>;
}
