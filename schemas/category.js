export default {
  name: "category",
  type: "document",
  title: "Category",
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
    }
  ],
};
