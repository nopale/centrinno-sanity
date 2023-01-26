// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import story from "./story";
import category from "./category";
import tag from "./tag";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "story",
  types: schemaTypes.concat([story, category, tag]),
});
