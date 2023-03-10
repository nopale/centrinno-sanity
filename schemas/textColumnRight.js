export default {
    name: 'textColumnRight',
    type: 'object',
    title: 'Text Column Right',
    fields: [
      {
        name: 'header',
        type: 'string',
        title: 'Header',
      },
      {
        title: 'Text Content', 
        name: 'textContent',
        type: 'array', 
        of: [{type: 'block'}]
      }
    ],
  }