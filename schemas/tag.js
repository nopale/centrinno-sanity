export default {
  name: "tag",
  type: "document",
  title: "Tag",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "definition",
      type: "text",
      title: "Definition",
    },
    {
      name: "heroImage",
      type: "image",
      title: "Hero Image"
    },
    {
      name: "categories",
      title: "categories",
      type: "reference",
      to: [{ type: "category" }],
    },
  ],
};
