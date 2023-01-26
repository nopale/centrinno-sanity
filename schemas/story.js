export default {
  name: "story",
  type: "document",
  title: "Story",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "Publication date",
      name: "publicationDate",
      type: "date",
    },
    {
      name: "author",
      type: "string",
      title: "Author",
    },
    {
      title: "Main Text",
      name: "mainText",
      type: "text",
    },
    {
      title: "Summary Text",
      name: "summaryText",
      type: "text",
    },
    {
      name: "locations",
      type: "array",
      title: "Locations",
      of: [{ type: "string" }],
    },
    {
      name: "peopleInvolved",
      type: "array",
      title: "People Involved",
      of: [{ type: "string" }],
    },
    {
      name: "imageGallery",
      type: "array",
      title: "Image Gallery",
      of: [{ type: "image" }],
    },
    {
      title: "Story Relevance",
      name: "storyRelevance",
      type: "text",
    },
    {
      name: "pilot",
      type: "string",
      title: "Pilot",
      options: {
        list: [
          { title: "Amsterdam", value: "Amsterdam" },
          { title: "Milan", value: "Milan" },
          { title: "Tallinn", value: "Tallinn" },
          { title: "Berlin", value: "Berlin" },
          { title: "Budapest", value: "Budapest" },
        ],
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
    },
    {
      name: "heroImage",
      type: "image",
      title: "Hero Image",
    },
  ],
};
