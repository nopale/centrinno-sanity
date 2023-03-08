// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import story from "./story";
import category from "./category";
import tag from "./tag";
import metaData from "./metaData";
import textColumnLeft from "./textColumnLeft";
import textColumnRight from "./textColumnRight";
import imageGallery from "./imageGallery";
import video from "./video";
import customVideo from "./customVideo";
import twoImages from "./twoImages";
import audio from "./audio";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "story",
  types: schemaTypes.concat([story, category, tag, metaData, textColumnLeft, textColumnRight, imageGallery, video, customVideo, twoImages, audio]),
});
