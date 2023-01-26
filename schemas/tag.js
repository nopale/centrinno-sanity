export default {
  name: "tag",
  type: "document",
  title: "Tag",
  fields: [
    {
      name: "tag",
      type: "string",
      title: "Tag",
    },
    {
      name: "definition",
      type: "text",
      title: "Definition",
    },
    {
      name: "categories",
      title: "categories",
      type: "reference",
      to: [{ type: "category" }],
    },
  ],
};
