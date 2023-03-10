export default {
    name: 'textColumnLeft',
    type: 'object',
    title: 'Text Column Left',
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