export default {
  name: 'imageGallery',
  type: 'object',
  title: 'Image Gallery',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Gallery of Images',
      of: [{type: 'image', options: {hotspot: true}}],
    },
  ],
}
