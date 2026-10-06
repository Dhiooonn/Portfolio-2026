import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'coverType',
      title: 'Cover Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image (PNG/JPG)', value: 'image' },
          { title: 'Video (MP4)', value: 'video' },
        ],
        layout: 'radio',
      },
      initialValue: 'image',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail (Image)',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Cover image for portfolio grid card. Recommended size: 1200 x 900 px (Rasio 4:3) - PNG / JPG / WebP',
    }),
    defineField({
      name: 'coverVideo',
      title: 'Cover Video (MP4 File)',
      type: 'file',
      options: {
        accept: 'video/mp4,video/webm,video/*',
      },
      hidden: ({ parent }) => parent?.coverType !== 'video',
      description: 'Upload MP4 video for card cover. Recommended size: 1200 x 900 px (Rasio 4:3, max 15MB)',
    }),
    defineField({
      name: 'videoUrl',
      title: 'External Video URL (Alternative MP4)',
      type: 'url',
      hidden: ({ parent }) => parent?.coverType !== 'video',
      description: 'Direct MP4 link from external CDN. Recommended resolution: 1200 x 900 px (Rasio 4:3)',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'github',
      title: 'Github Repository URL',
      type: 'url',
    }),
    defineField({
      name: 'demo',
      title: 'Live Demo URL',
      type: 'url',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images (3 Feed Photos)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
      validation: (Rule) => Rule.max(3),
      description: 'Upload 3 project photos for detail page. Recommended size: 1080 x 1350 px (Rasio Instagram Feed 4:5)',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
  ],
})
