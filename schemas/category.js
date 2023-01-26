export default {
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    {
      name: "category",
      type: "string",
      title: "Category",
    },
    {
      name: "definition",
      type: "text",
      title: "Definition",
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
  ],
};
