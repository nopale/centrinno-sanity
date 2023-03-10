export default {
  name: 'customVideo',
  type: 'object',
  title: 'Custom Video File',
  fields: [
    {
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
    },
    {
      name: 'header',
      title: 'Header',
      type: 'string',
    },
  ],
}
